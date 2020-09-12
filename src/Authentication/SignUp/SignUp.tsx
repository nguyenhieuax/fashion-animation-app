import React, { useRef } from 'react'
import { Container, Text, Box, Button, CheckBox } from '../../components';
import { TextInput } from '../components/Form';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Footer from '../components/Footer'
import { Routes, StackNavigationProps } from '../../components/navigation';
import { Router } from '@react-navigation/native';

const SignUpSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    passwordConfirmation: Yup.string()
        .equals([Yup.ref('password')], 'Password dont match')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});


const SignUp = ({ navigation }: StackNavigationProps<Routes, 'SignUp'>) => {

    const password = useRef<typeof TextInput>(null);
    const passwordConfirmation = useRef<typeof TextInput>(null);

    return (
        <Container
            footer={
                <Footer
                    title="Already have an account?"
                    action=' Login here'
                    onPress={() => navigation.navigate('Login')} />
            }>
            <Box padding='l'>
                <Text textAlign='center' variant='title1'>Create Account</Text>
                <Text textAlign='center' variant='body'>Let's us know what your name, email, and your password</Text>
            </Box>

            <Formik
                validationSchema={SignUpSchema}
                initialValues={{ email: '', password: '', passwordConfirmation: '', remember: false }}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
                    <Box>
                        <Box marginBottom='m'>
                            <TextInput
                                icon='mail'
                                placeholder='Enter your email'
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                error={errors.email}
                                touched={touched.email}
                                autoCompleteType='email'
                                keyboardType='email-address'
                                returnKeyType='next'
                                returnKeyLabel='next'
                                onSubmitEditing={() => password.current?.focus()}

                            />
                        </Box>
                        <Box marginBottom='m'>
                            <TextInput
                                icon='lock'
                                placeholder='Enter your password'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                error={errors.password}
                                touched={touched.password}
                                secureTextEntry
                                autoCompleteType='password'
                                returnKeyType='next'
                                returnKeyLabel='next'
                                ref={password}
                                onSubmitEditing={() => password.current?.focus()}

                            />
                        </Box>
                        <Box>
                            <TextInput
                                icon='lock'
                                placeholder='Confirm password'
                                onChangeText={handleChange('passwordConfirmation')}
                                onBlur={handleBlur('password')}
                                error={errors.passwordConfirmation}
                                touched={touched.passwordConfirmation}
                                secureTextEntry
                                autoCompleteType='password'
                                returnKeyType='go'
                                returnKeyLabel='go'
                                ref={passwordConfirmation}
                                onSubmitEditing={() => handleSubmit()}

                            />
                        </Box>

                    </Box>

                )}
            </Formik>
        </Container>
    )
}

export default SignUp;
