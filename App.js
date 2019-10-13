import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Message from './components/Message';
import Icon from './components/Icon/Icon';

export default function App() {
  return (
    <View style={styles.container}>
      <Message/>
      <Text>Hola</Text>
      <Icon name="Estrella" color="#05ff00" size={30}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
