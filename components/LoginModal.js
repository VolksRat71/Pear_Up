import React from 'react';
import {
    Modal,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Color from '../constants/Colors';
import Dimension from '../constants/dimenions';

const LoginModal = props => {
    return (
        <Modal
            visible={props.visible}
            animationType="slide">
            <View style={styles.modalMenu}>
                <TouchableOpacity>
                    <View>
                        <Text style={styles.menuItems}>
                            Login
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View>
                        <Text style={styles.menuItems}>
                            Sign Up
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={props.onClose}>
                    <View>
                        <Text style={styles.menuClose}>
                            Cancel
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Modal >
    )
}

const styles = StyleSheet.create({
    modalMenu: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.primary,
    },
    menuItems: {
        fontSize: Dimension.contentText,
        color: Color.accent,
    },
    menuClose: {
        fontSize: Dimension.contentText,
        color: Color.negitiveInput,
    },
})

export default LoginModal;