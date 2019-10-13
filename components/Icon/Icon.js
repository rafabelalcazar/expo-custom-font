import React, { Component } from 'react'
import { Text, View } from 'react-native'
import * as Font from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from './config.json';
const icomoon = require("../../assets/fonts/icomoon.ttf");
const Icon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', icomoon);

export default class MyIcon extends Component {


    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            // 'open-sans-bold': require('../assets/fonts/AllerDisplay.ttf'),
            // 'icomoon': require('../assets/fonts/icomoon.ttf'),
            'icomoon': require('../../assets/fonts/icomoon.ttf'),
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        return (
            this.state.fontLoaded?
            <Icon name={this.props.name} color={this.props.color} size={this.props.size}/>:<Text>null</Text>
        )
    }
}
