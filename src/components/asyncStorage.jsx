import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import uuid from 'react-native-uuid';

const App = () => {
  //todo ve setTodo: todo kullanıcının şu an girdiği yapılacak öğesini (input alanındaki metin) temsil eder. setTodo bu öğeyi günceller.
  const [todo, setTodo] = useState('');
  //todos ve setTodos: Tüm yapılacaklar listesini (yapılacak öğeler dizisi) saklayan bir state'tir. setTodos bu diziyi günceller.
  const [todos, setTodos] = useState([]);

  //Bu fonksiyon, yapılacaklar listesini (todos) cihazın yerel depolama alanı olan AsyncStorage'a kaydeder.
  // Yapılacaklar dizisi JSON formatına dönüştürülür ve kaydedilir.
  // Eğer bir hata oluşursa, bu hata konsola yazdırılır.
  const saveTodos = async saveTodo => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(saveTodo));
    } catch (error) {
      console.log('error', error);
    }
  };

  // Kullanıcı yeni bir görev eklemek istediğinde, bu fonksiyon çalışır.
  // Eğer todo boş değilse:
  // uuid.v4() ile her görev için benzersiz bir id oluşturulur ve todo ile birlikte yeni bir görev olarak diziye eklenir.
  // todos güncellenir ve ekrana yansıtılır.
  // Güncel todos AsyncStorage'a kaydedilir.
  // setTodo('') ile input alanı temizlenir, böylece kullanıcı yeni bir görev ekleyebilir.
  const addTodo = () => {
    if (todo) {
      const updateTodos = [...todos, {id: uuid.v4(), text: todo}];
      setTodos(updateTodos);
      saveTodos(updateTodos);
      setTodo(''); // Input'u temizliyoruz
    }
  };

  //Uygulama açıldığında veya bileşen ilk yüklendiğinde çalışır.
  //Daha önce AsyncStorage'da kaydedilen görevler varsa, bunlar alınır ve todos state'i ile ekrana yüklenir.
  const loadTodos = async () => {
    try {
      const storedData = await AsyncStorage.getItem('todos');
      if (storedData) {
        setTodos(JSON.parse(storedData));
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   Kullanıcı bir görevi silmek istediğinde bu fonksiyon çalışır.
  // Belirtilen id'ye sahip olmayan görevler filtrelenir, yani bu görev hariç diğer görevler korunur.
  // Yeni liste todos state'i ile güncellenir ve ardından AsyncStorage'a kaydedilir.
  const deleteTodo = async id => {
    console.log('id', id);
    console.log('basıldı');
    //* id'si eişt olmayanları çıkar ve bize dizi olarak döndür.
    const updatedTodos = todos.filter(item => item.id !== id);
    //*state güncelle
    setTodos(updatedTodos);
    //* AsyncStorage'da güncelle
    saveTodos(updatedTodos);
  };

  const updateTodos = id => {
    //* idsini bildiğimiz elemanı todos dizisi içerisinde bulmak için find methodu kullandık.
    const exitingTodo = todos?.find(x => x.id === id);
    //* idli eleman dizide yoksa fonksiyonu durdur
    if (!exitingTodo) return;

    Alert.prompt(
      'Edit Todo', // Kullanıcıya gösterilecek başlık
      'Update', // Kullanıcın güncellem yapması için buton üzerinde yazan metindir
      // Kullanıcının giriş yaptığı metni işleyen fonksiyondur
      newUpdateText => {
        if (newUpdateText) {
          const updatedTodos = todos.map(item =>
            item?.id === id ? {...item, text: newUpdateText} : item,
          );
          setTodos(updatedTodos); //* todos statei güncellendi
          saveTodos(updatedTodos); //* asyncstorage güncellendir
        }
      },
      'plain-text', // Kullanıcının sadece düz metin girişi yapabileceğini belirtir.
      exitingTodo.text, // Kullanıcıya başlangıçta gösterilecek mevcut metindir.
    );
  };

  useEffect(() => {
    loadTodos(); // Fonksiyonu çağırıyoruz
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.headerText}>ReactNative AsyncStorage</Text>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={text => setTodo(text)}
            value={todo} // Input'a değer bağladık
            placeholder="Type a Todo"
            style={styles.input}
          />
          <TouchableOpacity
            onPress={addTodo}
            style={[styles.button, styles.addButton]}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={todos}
          keyExtractor={item => item?.id?.toString()}
          renderItem={({item}) => (
            <View style={styles.todoItem}>
              <Text style={{color: '#000000'}}>{item?.text}</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => deleteTodo(item?.id)}
                    style={[styles.button, styles.deleteButton]}>
                    <Text style={styles.buttonText}>Delete</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => updateTodos(item?.id)}
                    style={[styles.button, styles.updateButton]}>
                    <Text style={styles.buttonText}>Update</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: 'gray',
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginLeft: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    padding: 8,
  },
  buttonText: {
    color: '#fff',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  updateButton: {
    backgroundColor: 'green',
    padding: 10,
  },
  deleteButton: {
    padding: 10,
  },
});
