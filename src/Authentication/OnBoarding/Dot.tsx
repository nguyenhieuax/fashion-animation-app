import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import Animated, { interpolate, Extrapolate } from 'react-native-reanimated';



interface DotProps {
    index: number;
    currentIndex: Animated.Node<number>;
}


const Dot = ({ index, currentIndex }: DotProps) => {

    // console.log('gia tri cua current index ==========================', currentIndex);
    const widthDot = interpolate(currentIndex, {
        inputRange: [index - 1, index, index + 1],
        outputRange: [8, 20, 8],
        extrapolate: Extrapolate.CLAMP
    })

    const scale = interpolate(currentIndex, {
        inputRange: [index - 1, index, index + 1],
        outputRange: [1, 1.5, 1],
        extrapolate: Extrapolate.CLAMP
    })

    const opacity = interpolate(currentIndex, {
        inputRange: [index - 1, index, index + 1],
        outputRange: [0.5, 1, 0.5],
        extrapolate: Extrapolate.CLAMP

    })

    return (
        <Animated.View style={{
            backgroundColor: 'gray',
            opacity,
            // width: widthDot,
            width: 8,
            height: 8,
            borderRadius: 4,
            marginHorizontal: 5,
            transform: [
                { scale }
            ]
        }} />
    )
}

export default Dot
