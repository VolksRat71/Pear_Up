import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

import Color from '../constants/Colors'
import Dimension from '../constants/dimenions'
import Card from '../components/Card';

const GetStarted = props => {

    return (
        <ImageBackground
            source={require('../assets/login_background.gif')}
            style={styles.backGround}>
            <View style={styles.viewPort}>
                <Card style={styles.loginCard}>
                    <View style={styles.welcomeMessage}>
                        <Text style={{ fontSize: Dimension.headText, color: Color.primary }}>Welcome to Emit</Text>
                    </View>
                    <View style={styles.getStarted}>
                        <TouchableOpacity
                            onPress={() => props.navigation.replace('Login')}>
                            <Text style={{ fontSize: Dimension.contentText, color: Color.accent }}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                </Card>

            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    backGround: {
        height: '100%'
    },
    viewPort: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginCard: {
        opacity: .8,
        height: 225,
        width: 300,
        maxWidth: '80%',
    },
    welcomeMessage: {
        borderBottomWidth: Dimension.borders,
        borderBottomColor: Color.borders,
        paddingBottom: 15,
        alignItems: 'center',
        // Font style stated with <Text>
    },
    getStarted: {
        alignItems: 'center',
        height: '100%',
        width: '100%',
        paddingTop: 65
        // Font style stated with <Text>
    }
});

export default GetStarted;