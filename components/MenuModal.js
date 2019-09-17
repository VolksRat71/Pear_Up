import React from 'react';
import {
    Modal,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Color from '../constants/color'
import Dimension from '../constants/dimenions'

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
                {/* Dynamic insertion of chats with delete option*/}
                <TouchableOpacity
                    onPress={props.onClose}>
                    <Text style={styles.menuClose}>
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
        backgroundColor: Color.primary,
    },
    menuTitle: {
        fontWeight: 'bold',
        fontSize: Dimension.headText,
        textDecorationLine: 'underline',
        color: Color.primary,
    },
    menuItems: {
        color: Color.accent,
        fontSize: Dimension.contentText,
    },
    menuClose: {
        fontSize: Dimension.contentText,
        color: Color.negitiveInput,
    },
})

export default MenuModal;