import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Card = props => {
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
        }}>
        {props.name}
      </Text>
      <Text>{props.meslek}</Text>
    </View>
  );
};

export default Card;
