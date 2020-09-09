import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native';


interface SlideProps {
    label: String;
    right?: boolean;
}
const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;
const styles = StyleSheet.create({
    container: {
        width


    },
    title: {
        fontSize: 80,
        fontFamily: 'SFProText-Bold',
        color: 'white',
        textAlign: 'center',
        lineHeight: 80,

    },
    titleContainer: {
        // backgroundColor: 'red',
        height: 100,
        justifyContent: 'center',

    }

})


const Slide = ({ label, right }) => {
    const transform = [
        { translateY: (SLIDE_HEIGHT - 100) / 2 },
        { translateX: (right ? 1 : -1) * width /3 },
        {rotate: right ? '-90deg': '90deg'}
    ]
    return (
        <View style={styles.container}>
            <View style={[styles.titleContainer, { transform }]}>
                <Text style={styles.title}>{label}</Text>
            </View>
        </View>
    )
}

export default Slide
