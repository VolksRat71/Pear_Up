import React from 'react';
import {
    Modal,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

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
        backgroundColor: '#008B8B',
    },
    menuItems: {
        fontSize: 25,
        color: '#f7287b'
    },
    menuClose: {
        fontSize: 25,
        color: 'black',
    },
})

export default LoginModal;