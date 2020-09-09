import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated';4
import {Button} from '../../components'

interface SubSlideProps  {
    subLabel: string;
    desc: string;
    last: boolean;
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        alignItems: 'center'
    },
    subLabel: {
        fontFamily: 'SFProText-Bold',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 12,

    }, 
    desc: {
        fontFamily: 'SFProText-Regular',
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
        marginBottom: 20



    }
})
const SubSlide = ({subLabel, desc, last, x, onPress}) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.subLabel}>{subLabel}</Text>
            <Text style = {styles.desc}>{desc}</Text>
            <Button 
            label = {last ? "Let's get started" : "Next"} 
            variant = {last ? 'primary' : 'default'}
            {...{onPress}}
            >

            </Button>
        </View>
    )
}

export default SubSlide
