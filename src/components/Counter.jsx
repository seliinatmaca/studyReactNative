import {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);
  //   const deger = useState(8);
  //   console.log(deger);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
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
    </SafeAreaView>
  );
};

export default Counter;

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
    fontSize: 60,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});
