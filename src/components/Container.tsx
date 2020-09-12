import React, { ReactNode } from 'react'
import { Image, Dimensions, StyleSheet, StatusBar } from 'react-native';
import { Box } from './Theme';
import { Button, Text, Theme } from '.';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@shopify/restyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


interface ContainerProps {
    children: ReactNode;
    footer: ReactNode;

}
const { width } = Dimensions.get('window');
const aspectRaito = 750 / 1125;
const height = width * aspectRaito;

export const assets = require('../../assets/pattern1.png');

const Container = ({ children, footer }: ContainerProps) => {
    const theme = useTheme<Theme>();
    const insets = useSafeAreaInsets();

    return (
        <Box backgroundColor='title' flex={1}>
            <StatusBar barStyle='light-content' />
            <Box backgroundColor='white'>

                <Box
                    borderBottomLeftRadius='xl'
                    overflow='hidden'
                    height={height * 0.50}


                >
                    <Image
                        source={assets}
                        style={{
                            width,
                            height,
                            borderBottomLeftRadius: theme.borderRadii.xxl
                        }} />
                </Box>
            </Box>
            <Box overflow='hidden' flex={1} >
                <Image
                    source={assets}
                    style={{
                        ...StyleSheet.absoluteFillObject,
                        width,
                        height,
                        top: -height * 0.50,
                        left: 0,
                    }} />
                <Box borderRadius='xxl' borderTopLeftRadius={0} backgroundColor='white' flex={1} padding='m' >
                    <KeyboardAwareScrollView>
                        {children}
                    </KeyboardAwareScrollView>
                </Box>
            </Box>

            <Box marginVertical='s' backgroundColor='title'  >
                {footer}
            </Box>
        </Box>
    )
}

export default Container
