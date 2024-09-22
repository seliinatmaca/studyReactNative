import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

const Counter = () => {
  //let count = 10;
  const [count, setCount] = useState(0);
  // const deger = useState(10);
  // console.log(deger);
  const [inputValue, setInputValue] = useState('');

  //1)bileşn ekrana basılma olayını izle
  useEffect(() => {
    console.log('!!!!!!!BİLEŞEN EKRANA BASILDI');
  });

  //2)bileşen ekrandan gitme olayını izle
  useEffect(() => {
    //bu fonk unmount anında çalışıri
    return () => console.log('ekrandan giitti');
  }, []);

  //3)hem ekrana gelme hem ekrandan gitme olayını izle
  useEffect(() => {
    console.log('ekrana geldi');
    return () => console.log('ekrandan gitti');
  }, []);

  //4)Bileşenin update olma olayını izle
  useEffect(() => {
    'bileşen render oldu.state veya prop değişti';
  });

  // 5) Input değişimini izle
  useEffect(() => {
    console.log('Input değeri değişti:', inputValue);
  }, [inputValue]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Değer girin"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <TouchableOpacity
        //onPress={() => console.log(count - 1)}
        onPress={() => setCount(count - 1)}
        disabled={count === 0}
        style={[
          styles.button,
          {backgroundColor: count < 10 ? 'red' : 'green'},
        ]}>
        <Text style={styles.buttonText}>Azalt</Text>
      </TouchableOpacity>

      <Text style={styles.countText}>{count}</Text>

      <TouchableOpacity
        //onPress={() => console.log(count + 1)}
        onPress={() => setCount(count + 1)}
        style={[
          styles.button,
          {backgroundColor: count > 10 ? 'red' : 'green'},
        ]}>
        <Text style={styles.buttonText}>Arttır</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setCount(0)}
        style={[styles.button, {backgroundColor: 'blue'}]}>
        <Text style={styles.buttonText}>Sıfırla</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  countText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '80%',
  },
});

export default Counter;
