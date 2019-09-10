import React from 'React';
import { View, Text, StyleSheet } from 'react-native';
import Logo from './Logo';
import Menu from './Menu';
import Color from '../constants/color'


const NavBar = props => {
    return (
        <View style={styles.navbar}>
            <View style={styles.left}>
                {/* Placeholder */}
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

export default NavBar;