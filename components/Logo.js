import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    
} from 'react-native';
import Color from '../constants/color';
import Dimension from '../constants/dimenions';
import Emitlogo from '../assets/Emitlogo.png';
// import { Avatar } from 'react-native-paper';


// const MyComponent = () => (
//     <Avatar.Image size={24} source={require('../assets/avatar.png')} />
//   );




const Logo = props => {
    return (
        <View>
            <TouchableOpacity>
            {/* <img src={Emitlogo} />                        */}
            <Image style={{}} source={Emitlogo} />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    logo: {
        flex: 1,
        borderRadius: Dimension.borderRadius,
        fontSize: 50,
        color: Color.accent,
    }
});

export default Logo;