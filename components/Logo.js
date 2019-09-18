import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import Color from '../constants/Colors';
import Dimension from '../constants/dimenions';

const Logo = props => {
    return (
        <View>
            <TouchableOpacity>
                <Text style={styles.logo}>emit</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    logo: {
        flex: 1,
        borderRadius: Dimension.borderRadius,
        fontSize: 50,
        color: Color.accent,
    }
});

export default Logo;