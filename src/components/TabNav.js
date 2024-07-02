import React from 'react';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';


import Transit from '../screens/Transit';
import Route from '../screens/Route';
import Main from '../screens/Main';
import Payment from '../screens/Payment'
import { colors } from './colors';







const Tab = createBottomTabNavigator();





function TabNav(props) {
    return (
        <Tab.Navigator

    screenOptions={{
      headerShown: false,
      tabBarActiveBackgroundColor: colors.primary,
      tabBarActiveTintColor: colors.secondary,
      tabBarInactiveBackgroundColor: colors.lightgray,
      tabBarInactiveTintColor: colors.black,
      tabBarStyle: {
        height: 60,
        position: 'absolute',
        bottom: 16,
        right: 11,
        left: 11,
        borderRadius: 40,
        
        
      }
    }} 


    
   
    initialRouteName='Main'

    
  >

    <Tab.Screen name='Home'   component={Main} 
    options={{
      tabBarIcon: ({size, color}) => (
        <MaterialCommunityIcons name='home' size={size} color={color}/>
      ),
    }}
    />     

    <Tab.Screen name='Transit' component={Transit} 
     options={{
      tabBarIcon: ({size, color}) => (
        <MaterialCommunityIcons name='view-grid-outline' size={size} color={color}/>
      ),
    }}
    />

    <Tab.Screen name='Route' component={Route}
     options={{
      tabBarIcon: ({size, color}) => (
        <MaterialCommunityIcons name='map-marker-path' size={size} color={color}/>
      ),
    }}
    /> 

    <Tab.Screen name='Payment' component={Payment}
     options={{
      tabBarIcon: ({size, color}) => (
        <MaterialCommunityIcons name='credit-card-outline' size={size} color={color}/>
      ),
    }}
    /> 
  </Tab.Navigator>
    );
}

export default TabNav;