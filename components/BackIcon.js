import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import Color from '../constants/color';

const BackIcon = props => {
    return (
        <View>
            <TouchableOpacity onPress={() => alert('back button pressed')}>
                <Text style={styles.backIcon}>⤌</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    backIcon: {
        color: Color.secondary,
        fontSize: 50,
        paddingBottom: 13,
    }
});

export default BackIcon;