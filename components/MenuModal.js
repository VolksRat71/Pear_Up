import React from 'react';
import {
    Modal,
    Text,
    View,
    StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native';

const MenuModal = props => {
    return (
        <Modal
            visible={props.visible}
            animationType="slide">
            <View
                style={styles.menu}>
                <Text style={styles.menuTitle}>Menu</Text>
                <TouchableOpacity>
                    <Text style={styles.menuItems}>
                        Match
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.menuItems}>
                        Profile
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={props.onClose}>
                    <Text
                        style={{ color: 'red' }}
                        style={styles.menuItems}>
                        Close
                    </Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    menu: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuTitle: {
        fontWeight: 'bold',
        fontSize: 45,
        textDecorationLine: 'underline',
    },
    menuItems: {
        fontSize: 25,
    }
})

export default MenuModal;