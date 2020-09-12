import React from 'react'
import { View, StyleSheet } from 'react-native'
import {Button, Text} from '../../components'

interface SubSlideProps  {
    subLabel: string;
    desc: string;
    last: boolean;
    onPress: () => void;
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        alignItems: 'center'
    },
    subLabel: {
   
        textAlign: 'center',
        marginBottom: 12,

    }, 
    desc: {
        textAlign: 'center',
        marginBottom: 20
    }
})
const SubSlide = ({subLabel, desc, last, onPress}: SubSlideProps) => {
    return (
        <View style = {styles.container}>
            <Text variant ='title2' style = {styles.subLabel}>{subLabel}</Text>
            <Text variant ='body' style = {styles.desc}>{desc}</Text>
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
