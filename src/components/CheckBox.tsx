import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Box, Text } from '.';
import { FontAwesome as Icon } from '@expo/vector-icons';


const styles = StyleSheet.create({
    container: {
        borderRadius: 5,

        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 5

    }
})

interface CheckBoxProps {
    label: string;
    defaultValue ?: boolean;
    onChange: () => void;
}

const CheckBox = ({label, onChange, defaultValue} : CheckBoxProps) => {
    const [check, setCheck] = useState(defaultValue);

    const onCheckBoxPress = (check) => {
        setCheck(!check);
    }

    return (
        <TouchableOpacity onPress={() => onCheckBoxPress(check)} style={styles.container}>
            <Box borderWidth={check ? 0 : StyleSheet.hairlineWidth} justifyContent='center' alignItems='center' height={20} width={20} borderRadius='s' backgroundColor={check ? 'primary' : 'white'}>
                <Icon size={14} color='white' name='check'></Icon>

            </Box>

            <Text paddingLeft='s'>{label}</Text>

        </TouchableOpacity>
    )
}

export default CheckBox
