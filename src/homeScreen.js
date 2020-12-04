import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Button, ImageBackground } from 'react-native';
 
export default class HomeScreen extends Component {

   
    render() {
        return (
            <View style={styles.container}>
                <Text>WELCOME</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: deviceHeight,
    },
    

});


