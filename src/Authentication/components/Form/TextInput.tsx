import React, { forwardRef, RefObject } from 'react'
import { View, TextInput as RNTextInput, StyleSheet, TextInputProps as RNTextInputProps } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons';
import { Box, Theme } from '../../../components';
import { useState } from 'react';
import { useTheme } from '@shopify/restyle';
interface TextInputProps extends RNTextInputProps {
    placeholder: string;
    icon: string;
    touched?: boolean;
    error: string;
}


const TextInput = forwardRef(
    ({ icon, placeholder, touched, error, ...props }: TextInputProps, ref) => {
        const theme = useTheme<Theme>();

        const CIRCLE_SIZE = theme.borderRadii.m * 2;
        const [input, setInput] = useState('');
        const reColor = !touched ? 'text' : (error ? 'danger' : 'primary');
        const color = theme.colors[reColor];


        return (
            <Box
                flexDirection='row'
                alignItems='center'
                height={48}
                borderRadius='s'
                borderColor={reColor}
                borderWidth={StyleSheet.hairlineWidth}
                padding='s'
            >
                <Box padding='s'>
                    <Icon size={16} name={icon} {...{ color }} />

                </Box>
                <Box flex={1}>
                    <RNTextInput
                        {...{ref}}
                        underlineColorAndroid='transparent'
                        {...{ placeholder }}
                        placeholderTextColor={color}
                        {...props}
                    />
                </Box>
                {
                    touched && (
                        <Box
                            borderRadius='m'
                            height={CIRCLE_SIZE}
                            width={CIRCLE_SIZE}
                            justifyContent='center'
                            alignItems='center'
                            backgroundColor={!error ? 'primary' : 'danger'}
                        >
                            <Icon name={error ? 'x' : 'check'} size={16} color='white' />
                        </Box>
                    )
                }
            </Box>
        )
    }
)

export default TextInput

