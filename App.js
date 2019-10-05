import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Message from './components/Message';

export default function App() {
  return (
    <View style={styles.container}>
      <Message/>

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
