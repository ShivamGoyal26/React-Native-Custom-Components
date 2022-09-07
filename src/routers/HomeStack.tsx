import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WebViewScreen from '../screens/WebViewScreen';
import ActionScreen from '../screens/ActionScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="ActionScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
        <Stack.Screen name="ActionScreen" component={ActionScreen} />
      </Stack.Navigator>
    </>
  );
};

export default HomeStack;
