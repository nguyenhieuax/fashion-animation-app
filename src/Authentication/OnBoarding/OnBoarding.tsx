import React, {useRef} from 'react'
import { View, Text, Slider, StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useValue, interpolateColor, onScrollEvent } from "react-native-redash";
import Animated, { interpolate, Value, multiply } from 'react-native-reanimated';
import Slide, { SLIDE_HEIGHT } from './Slide';
import SubSlide from './SubSlide';

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    slider: {
        height: SLIDE_HEIGHT,
        borderBottomRightRadius: 75
    },
    footer: {
        flex: 1
    },
    footerContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 75,
        flexDirection: 'row',
    }

})

const slides = [
    { label: 'Relaxed', subLabel: 'Where does it come from?', desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit', color: '#BFE3F5' },
    { label: 'Playfull', subLabel: 'Where does it come from?', desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit', color: '#BEECC4' },
    { label: 'Exentric', subLabel: 'Where does it come from?', desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit', color: '#FFE4D9' },
    { label: 'Funky', subLabel: 'Where does it come from?', desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit', color: '#FFDDDD' },
]


const OnBoarding = () => {

    const x = new Value(0);
    const scroll = useRef<Animated.ScrollView>(null); 
    //TODO:useScrollEvent
    const onScroll = onScrollEvent({ x });
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((item, index) => index * width),
        outputRange: slides.map((item, index) => item.color)
    })
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                <Animated.ScrollView
                    ref = {scroll}
                    horizontal snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    scrollEventThrottle={1}
                    {...{ onScroll }}
                >
                    {slides.map((item, index) => <Slide right={!(index % 2)} key={index} label={item.label} />)}
                    {/* <Slide label="Relaxed" />
                    <Slide label="Playfull" right />
                    <Slide label="Excentric" />
                    <Slide label="Funky" right /> */}


                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}>
                    <Animated.View style={[styles.footerContainer, { width: width * slides.length, flex: 1, transform: [{ translateX: multiply(x, -1) }] }]}>
                        {slides.map((item, index) =>
                            <>
                                <SubSlide
                                    onPress = {() => {
                                        if(scroll.current) {
                                            scroll.current.getNode().scrollTo({x: width* (index+1), animated: true})
                                        }
                                    }}
                                    key={index}
                                    last={index === slides.length - 1}
                                    subLabel={item.subLabel} desc={item.desc}
                                ></SubSlide>
                            </>)}
                    </Animated.View>
                </Animated.View>

            </View>
        </View>
    )
}

export default OnBoarding
