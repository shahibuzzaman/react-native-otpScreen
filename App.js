import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OtpSend from './components/OtpSend';
import OtpVerify from './components/OtpVerify';
import HomeScreen from './components/Home';
import ConfrimOrder from './components/ConfrimOrder';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="OtpSend" component={OtpSend} />
        <Stack.Screen name="OtpVerify" component={OtpVerify} />
        <Stack.Screen name="ConfrimOrder" component={ConfrimOrder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
