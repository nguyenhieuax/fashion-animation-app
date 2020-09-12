import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Box, Text, Button } from '../../components/'
import { StackNavigationProps, Routes } from '../../components/navigation';
const picture = require('../../../assets/5.png')
export const assetsWelcome = picture;
const Welcome = ({ navigation }: StackNavigationProps<Routes, 'Welcome'>) => {

    return (
        <Box backgroundColor='white' flex={1}>
            <Box flex={1} borderBottomRightRadius='xl' backgroundColor='lightGrey' justifyContent='flex-end' alignItems='center' >
                <Image style={{
                    height: undefined, width: undefined, ...StyleSheet.absoluteFillObject,
                }} source={picture}></Image>
            </Box>
            <Box flex={1} borderTopLeftRadius='xl'>
                <Box
                    backgroundColor='lightGrey'
                    position='absolute'
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                >
                    <Box
                        backgroundColor='white'
                        borderTopLeftRadius='xl'
                        flex={1}
                        justifyContent='space-evenly'
                        alignItems='center'
                    >
                        <Text style={styles.title} variant='title2'> Let's get started</Text>
                        <Text style={styles.subTitle} variant='body'> Lorem ipsum dolor sit amet, consectetur adipiscing elit</Text>

                        <Button
                            onPress={() => { navigation.navigate('Login') }}
                            variant='primary'
                            label='Have an account? Login' />
                        <Button
                            label="Join us, it's free" />
                        <Button
                            onPress = {() => true}
                            variant='transparent'
                            label='Forgot password?' />

                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',

    },
    subTitle: {
        textAlign: 'center'
    }
})

export default Welcome;
