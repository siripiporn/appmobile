
import React from 'react';
import { Image,Platform,Dimensions  } from 'react-native';

import { createStackNavigator } from '@react-navigation-stack';

import Main from '../src/register/main'
import HomeScreen from '../src/homeScreen'


 const Stack = createStackNavigator()
 

export default Navigator = () => {
  return (

    <Stack.Navigator initialRouteName="HomeScreen"
      screenOptions={{ gestureEnabled: false }}>
    {/* Home */}
    <Stack.Screen name='Main'  component={Main} options={{title: ' ', justifycontent: 'center',  headerTitleAlign: 'center' ,   headerStyle: { shadowOffset: { height: 0, width: 0 }  },headerTintColor: '#000000'  }} />
   
    <Stack.Screen name='HomeScreen'  component={HomeScreen} options={{title: ' ', justifycontent: 'center',  headerTitleAlign: 'center' ,   headerStyle: { shadowOffset: { height: 0, width: 0 }  },headerTintColor: '#000000'  }} />
   
    
    </Stack.Navigator>
  )
}