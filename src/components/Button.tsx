import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        borderRadius: 25,
        height: 50,
        width: 245,
        justifyContent: 'center',
        alignItems: 'center'

    },
    label: {
        fontSize: 15,
        fontWeight: 'bold'

    }

})

interface ButtonProps {
    variant: 'default' | 'primary';
    label: string;
    onPress: () => {}
}

const Button = ({ variant, label, onPress }) => {
    const backgroundColor = variant === 'primary' ? '#2CB9B0' : '#B4B2B4';
    const color = variant === 'primary' ? 'white' : '#333333';

    return (
        <RectButton  {...{onPress}} style={[styles.container, { backgroundColor }]}>
                <Text style={[styles.label, { color }]}>{label}</Text>
        </RectButton>

    )
}

Button.defaultProps = { variant: 'default ' };
export default Button
