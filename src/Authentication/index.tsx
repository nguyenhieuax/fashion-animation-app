import { OnBoarding, assetsOnboarding } from './OnBoarding';
import { Welcome, assetsWelcome } from './Welcome';
import { Login } from './Login';
import { SignUp } from './SignUp';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from '../components/navigation'
import React from 'react';


const AuthenticationStack = createStackNavigator<Routes>();

export const AuthenticationNavigator = () => {
    return (
        <AuthenticationStack.Navigator headerMode="none">
            <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
            <AuthenticationStack.Screen name="Welcome" component={Welcome} />
            <AuthenticationStack.Screen name="Login" component={Login} />
            <AuthenticationStack.Screen name="SignUp" component={SignUp} />
        </AuthenticationStack.Navigator>

    )

}

export const assets = [...assetsOnboarding, assetsWelcome];