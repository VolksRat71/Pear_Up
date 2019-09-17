import React from 'React';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import BackIcon from './BackIcon';
import Logo from './Logo';
import Menu from './Menu';
import Color from '../constants/color'
import Dimension from '../constants/dimenions';


const ChatHead = props => {
    return (
        <View style={styles.navbar}>
            <View style={styles.left}>
                <TouchableOpacity>
                    <BackIcon />
                </TouchableOpacity>
            </View>
            <View style={styles.center}>
                <Logo />
            </View>
            <View style={styles.right}>
                <Menu />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: 120,
        paddingTop: 55,
        paddingBottom: 10,
        backgroundColor: Color.primary,
        borderBottomColor: Color.borders,
        borderBottomWidth: Dimension.borders,
    },
    left: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    center: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    right: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default ChatHead;