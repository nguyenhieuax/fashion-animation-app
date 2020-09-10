import React from 'react'
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';


interface SlideProps {
    label: String;
    right?: boolean;
    picture: number;
}

const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;
const styles = StyleSheet.create({
    container: {
        width,
        overflow: 'hidden'
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

    },
    underlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',

    },
    picture: {
        ...StyleSheet.absoluteFillObject,
        height: undefined,
        width: undefined,
        borderBottomRightRadius: 75,

    }

})


const Slide = ({ label, right, picture }: SlideProps) => {
    const transform = [
        { translateY: (SLIDE_HEIGHT - 100) / 2 },
        { translateX: (right ? 1 : -1) * width /3 },
        {rotate: right ? '-90deg': '90deg'}
    ]
    return (
        <View style={styles.container}>
            <View style = {styles.underlay}>
                <Image source = {picture} style = {styles.picture} />
            </View>
            <View style={[styles.titleContainer, { transform }]}>
                <Text style={styles.title}>{label}</Text>
            </View>
        </View>
    )
}

export default Slide
