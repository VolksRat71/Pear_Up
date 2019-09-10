import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import MenuModal from './MenuModal';

const Menu = props => {

    const [isMenu, setIsMenu] = useState(false);

    const closeModal = () => {
        setIsMenu(false);
    };

    return (
        <View>
            <TouchableOpacity
                onPress={() => setIsMenu(true)}>
                <Image
                    source={require('../assets/menu_icon.png')}
                    style={styles.container}
                />
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
        borderRadius: 5,
    },
});

export default Menu;