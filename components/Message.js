import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import * as Font from 'expo-font';

export default class Message extends Component {

    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'open-sans-bold': require('../assets/fonts/OpenSans-LightItalic.ttf'),
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        return (
            <View>
                 {
    this.state.fontLoaded ? (
      <Text style={{ fontFamily: 'open-sans-bold', fontSize: 56 }}>
        Hello, world!
      </Text>
    ) : null
  }
            </View>
        )
    }
}

const styles = StyleSheet.create({})
