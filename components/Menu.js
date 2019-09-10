import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Modal
} from 'react-native';

const Menu = props => {

    return (
        <View>
            <TouchableOpacity>
                <Image
                    source={require('../assets/menu_icon.png')}
                    style={styles.container}
                />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 50,
        borderRadius: 5,
    },
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Menu;