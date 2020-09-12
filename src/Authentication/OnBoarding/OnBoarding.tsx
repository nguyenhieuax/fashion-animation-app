import React, { useRef } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native';
import { useValue, interpolateColor, onScrollEvent, useScrollHandler, scrollHandler } from "react-native-redash";
import Animated, {  multiply, divide,  } from 'react-native-reanimated';
import Slide, { SLIDE_HEIGHT } from './Slide';
import SubSlide from './SubSlide';
import Dot from './Dot';
import { StackNavigationProps, Routes } from '../../components/navigation';

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    slider: {
        height: SLIDE_HEIGHT,
        borderBottomRightRadius: 75,

    },
    footer: {
        flex: 1
    },
    footerContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 75,
    },
    pagination: {
        ...StyleSheet.absoluteFillObject,
        height: 75,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'cyan'
    }

})

const slides = [
    {
        label: 'Relaxed',
        subLabel: 'Where does it come from?',
        desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        color: '#BFE3F5',
        picture: require('../../../assets/1.png')
    },
    {
        label: 'Playfull',
        subLabel: 'Where does it come from?',
        desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        color: '#BEECC4',
        picture: require('../../../assets/2.png')

    },
    {
        label: 'Exentric',
        subLabel: 'Where does it come from?',
        desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        color: '#FFE4D9',
        picture: require('../../../assets/3.png')

    },
    {
        label: 'Funky',
        subLabel: 'Where does it come from?',
        desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        color: '#FFDDDD',
        picture: require('../../../assets/4.png')

    },
]

export const assetsOnboarding = slides.map(item => item.picture);


const OnBoarding = ({navigation}: StackNavigationProps<Routes, "OnBoarding"> ) => {

    const scroll = useRef<Animated.ScrollView>(null);
    //TODO:useScrollEvent
    const { scrollHandler, x } = useScrollHandler();
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((item, index) => index * width),
        outputRange: slides.map((item, index) => item.color)
    })
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>

                <Animated.ScrollView
                    // onScroll={() => {
                    //     console.log('gia tri cua x , ', x);
                    // }}
                    ref={scroll}
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    // scrollEventThrottle={1}
                    {...scrollHandler}
                >
                    {slides.map((item, index) => <Slide picture = {item.picture} right={!(index % 2)} key={index} label={item.label} />)}
               
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}>
                    <View
                        style={
                            styles.footerContainer
                        }>

                        <View style={styles.pagination}>

                            {slides.map((item, index) =>
                                <Dot currentIndex={divide(x, width)} key={index} {...{ index }} />
                            )}

                        </View>

                        <Animated.View style={{
                            flexDirection: 'row',
                            width: width * slides.length,
                            flex: 1,
                            transform: [{ translateX: multiply(x, -1) }]
                        }}>
                            {slides.map((item, index) =>
                                <>
                                    <SubSlide
                                        onPress={() => {
                                            if (scroll.current) {
                                                scroll.current.getNode().scrollTo({ x: width * (index + 1), animated: true })
                                            }
                                            if(index === slides.length -1) {
                                                navigation.navigate('Welcome')
                                            }
                                        }}
                                        key={index}
                                        last={index === slides.length - 1}
                                        subLabel={item.subLabel} desc={item.desc}
                                    ></SubSlide>
                                </>)}
                        </Animated.View>

                    </View>
                </Animated.View>

            </View>
        </View>
    )
}

export default OnBoarding
