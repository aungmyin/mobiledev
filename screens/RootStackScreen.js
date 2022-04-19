import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SigninScreen from './SigninScreen';
import SignupScreen from './SignupScreen';
import SplashScreen from './SplashScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import ResetPasswordScreen from './ResetPasswordScreen';

const RootStack = createStackNavigator();

const RootStackScreen = () => (
    <RootStack.Navigator headerMode="none" >
        <RootStack.Screen name="SplashScreen" component={SplashScreen} />
        <RootStack.Screen name="SigninScreen" component={SigninScreen} />
        <RootStack.Screen name="SignupScreen" component={SignupScreen} />
        <RootStack.Screen name="ForgotPswScreen" component={ForgotPasswordScreen} />
        <RootStack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
    </RootStack.Navigator>
);

export default RootStackScreen;