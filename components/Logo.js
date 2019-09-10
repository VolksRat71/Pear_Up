import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import Dimension from '../constants/dimenions';

const Logo = props => {
    return (
        <View>
            <TouchableOpacity>
                <Image
                    source={require('../assets/placeholder_logo.jpg')}
                    style={styles.logo}
                />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    logo: {
        flex: 1,
        width: 100,
        borderRadius: Dimension.borderRadius,
    }
});

export default Logo;