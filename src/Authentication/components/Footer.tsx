import React from 'react'
import { View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Button, Box, Text } from '../../components'
import { SocialLogin } from './SocialLogin';
interface FooterProps {
    title: string;
    action: string;
    onPress: () => void;
}
const Footer = ({ title, action, onPress }: FooterProps) => {
    return (
        <Box alignSelf='center' >
            <SocialLogin />
            <TouchableWithoutFeedback {...{onPress}}>
                <Box paddingVertical = 's' justifyContent='center' alignItems = 'center' flexDirection ='row'>
                    <Text color='white'>
                        {title}
                    </Text>
                    <Text color='primary'>
                        {action}
                    </Text>
                </Box>
            </TouchableWithoutFeedback>

        </Box>
    )
}

export default Footer;
