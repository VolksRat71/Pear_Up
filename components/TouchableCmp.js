import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native'

import Color from '../constants/Colors';
import Dimension from '../constants/dimenions';
import dimenions from '../constants/dimenions';

const TouchableComponent = props => {
    let TouchableCmp = TouchableOpacity

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }
    return (
        <View style={styles.gridItem}>
            <TouchableCmp
                style={{ flex: 1 }}
                onPress={props.onPress}
            >
                <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                    <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                </View>
            </TouchableCmp>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 80,
        borderRadius: Dimension.borderRadius,
        shadowColor: Color.iOSshadowColor,
        shadowOffset: Dimension.iOSshadowOffset,
        shadowRadius: Dimension.iOSshadowRadius,
        shadowOpacity: Dimension.iOSshadowOpacity,
        elevation: Dimension.androidShadow,
        overflow:
            Platform.OS === 'android' && Platform.Version >= 21
                ? 'hidden'
                : 'visible',
        borderColor: Color.borders,
        borderWidth: Dimension.borders,
    },
    container: {
        flex: 1,
        borderRadius: Dimension.borderRadius,
        shadowColor: Color.iOSshadowColor,
        shadowOffset: Dimension.iOSshadowOffset,
        shadowRadius: Dimension.iOSshadowRadius,
        shadowOpacity: Dimension.iOSshadowOpacity,
        elevation: Dimension.androidShadow,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontSize: 20,
        textAlign: 'right',
        color: Color.primary,
    }
})

export default TouchableComponent
