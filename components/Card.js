import React from 'react';
import { View, StyleSheet } from 'react-native';
import Dimension from '../constants/dimenions';
import Color from '../constants/color';

const Card = props => {
    return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
}

const styles = StyleSheet.create({
    card: {
        borderWidth: Dimension.borders,
        borderColor: Color.borders,
        borderRadius: Dimension.borderRadius,
        shadowColor: Color.iOSshadowColor,
        shadowOffset: Dimension.iOSshadowOffset,
        shadowRadius: Dimension.iOSshadowRadius,
        shadowOpacity: Dimension.iOSshadowOpacity,
        elevation: Dimension.androidShadow,
        paddingVertical: 15,
        backgroundColor: Color.secondary,
    },
});

export default Card;