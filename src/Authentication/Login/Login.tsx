import React, { useRef } from 'react'
import { Container, Text, Box, Button, CheckBox } from '../../components';
import SocialLogin from '../components/SocialLogin';
import { TextInput } from '../components/Form';
import { Formik } from 'formik';
import * as Yup from 'yup';
import  Footer  from '../components/Footer'
import { Routes, StackNavigationProps } from '../../components/navigation';
import { Router } from '@react-navigation/native';

const LoginSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});


const Login = ({navigation}:StackNavigationProps<Routes,'SignUp'>) => {

    const password = useRef<typeof TextInput>(null);

    return (
        <Container footer={<Footer title = "Don't have an account?" action = ' Sign up here' onPress = {() =>  navigation.navigate('SignUp')} />}>
            <Box padding='l'>
                <Text textAlign='center' variant='title1'>Welcome back</Text>
                <Text textAlign='center' variant='body'>Use your credential below and login to your account</Text>
            </Box>

            <Formik
                validationSchema={LoginSchema}
                initialValues={{ email: '', password: '', remember: false }}
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
                                onSubmitEditing ={() => password.current?.focus()}

                            />
                        </Box>
                        <Box>
                            <TextInput
                                icon='lock'
                                placeholder='Enter your password'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                error={errors.password}
                                touched={touched.password}
                                secureTextEntry
                                autoCompleteType='password'
                                returnKeyType='go'
                                returnKeyLabel='go'
                                ref={password}
                                onSubmitEditing = {() => handleSubmit()}
                                
                            />
                        </Box>

                        <Box
                            flexDirection='row'
                            justifyContent='space-between' >
                            <Box
                                flexDirection='row'
                                alignItems='center'>
                                <CheckBox label='Remember me'
                                    defaultValue={values.remember}
                                    onChange={() => setFieldValue('remember', !values.remember)} />
                            </Box>
                            <Button
                                onPress={() => true}
                                variant='transparent'
                                label=''>
                                <Text
                                    color='primary'>Forgot password</Text>
                            </Button>

                        </Box>
                        <Box
                            marginTop='m'
                            alignSelf='center'>
                            <Button
                                onPress={handleSubmit}
                                label='Log on your account'
                                variant='primary' />
                        </Box>
                    </Box>

                )}
            </Formik>
        </Container>
    )
}

export default Login;
