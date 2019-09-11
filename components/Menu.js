import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import MenuModal from './MenuModal';
import Dimension from '../constants/dimenions';
import Color from '../constants/color';

const Menu = props => {

    const [isMenu, setIsMenu] = useState(false);

    const closeModal = () => {
        setIsMenu(false);
    };

    return (
        <View>
            <TouchableOpacity
                onPress={() => setIsMenu(true)}>
                <Text style={styles.menuIcon}>☰</Text>
            </TouchableOpacity>
            <MenuModal
                visible={isMenu}
                onClose={closeModal}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 50,
        borderRadius: Dimension.borderRadius,
    },
    menuIcon: {
        color: Color.secondary,
        fontSize: 40,
    }
});

export default Menu;