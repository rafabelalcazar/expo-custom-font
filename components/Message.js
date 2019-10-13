import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import * as Font from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from './Icon/config.json';

const icomoon = require("../assets/fonts/icomoon.ttf");
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', icomoon);
export default class Message extends Component {

    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'open-sans-bold': require('../assets/fonts/AllerDisplay.ttf'),
            'icomoon': require('../assets/fonts/icomoon.ttf'),
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        return (
            <View>
                {
                    this.state.fontLoaded ? (
                        <Text style={{ fontFamily: 'open-sans-bold', }}>
                            KFC
      </Text>
                    ) : null
                }
                <Icon name="Estrella" color="#05aaae" size={60}/>
                <Icon name="Email"/>
                <Icon name="Facebook" color="#05aaae" size={32}/>
                <Icon name="Corazon" color="#05aaae" size={32}/>
                <Icon name="CorazonAzul" color="#05aaae" size={32}/>
                <Icon name="Promociones" color="#05aaae" size={32}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
