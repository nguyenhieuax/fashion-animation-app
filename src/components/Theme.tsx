import { createTheme, createText, createBox } from '@shopify/restyle';

// const palette = {
//   purpleLight: '#8C6FF7',
//   purplePrimary: '#5A31F4',
//   purpleDark: '#3F22AB',

//   greenLight: '#56DCBA',
//   greenPrimary: '#0ECD9D',
//   greenDark: '#0A906E',

//   black: '#0B0B0B',
//   white: '#F0F2F3',
// };


export const theme = createTheme({
    colors: {
        white: 'white',
        button: '#0C0D34',
        title: '#0C0D34',
        text: 'rgba(12, 13, 52,0.7)',
        primary: '#2CB9B0',
        grey: 'rgba(12, 13, 52,0.05)',
        lightGrey: '#F4F0Ef',
        darkGrey: '#8A8D90',
        danger: '#FF0058',
        transparent: 'transparent'


    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    borderRadii: {
        s: 4,
        m: 10,
        l: 25,
        xl: 40,
        xxl: 75
    },
    textVariants: {
        hero: {
            fontSize: 80,
            fontFamily: 'SFProText-Bold',
            color: 'white',
            textAlign: 'center',
            lineHeight: 80,
            transparent: 'transparent',
        },
        title1: {
            fontSize: 28,
            fontFamily: 'SFProText-Semibold',
            color: 'title'
        },
        title2: {
            fontSize: 24,
            lineHeight: 30,
            fontFamily: 'SFProText-Semibold',
            color: 'title'
        },
        body: {
            fontSize: 16,
            lineHeight: 24,
            fontFamily: 'SFProText-Regular',
            color: 'text'
        },
        button: {
            fontSize: 15,
            lineHeight: 24,
            fontFamily: 'SFProText-Regular',
            color: 'button'
        }
    },
    breakpoints: {
    },
});

export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
