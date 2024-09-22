import {View, Button} from 'react-native';
import React, {useState} from 'react';

import Counter from './src/components/Counter';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 60,
      }}>
      {/* Gizle/Göster Butonu */}
      <View style={{marginBottom: 20}}>
        <Button
          title="Gizle / Göster"
          onPress={() => setIsVisible(!isVisible)}
        />
      </View>

      {/* Sayaç bileşeni, isVisible true ise gösterilir */}
      {isVisible && <Counter />}
    </View>
  );
};

export default App;
