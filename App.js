import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import SignUp2 from './src/screens/SignUp2';
import Login from './src/screens/Login';
import FinishedReg from './src/screens/FinishedReg';
import SignUp from './src/screens/SignUp';
import Getstarted from './src/screens/Getstarted';
import AppNav  from './src/screens/AppNav';
import RequestForm from './src/screens/RequestForm';
import BusinessLicenseVerification from './src/screens/BusinessLicenseVerification';
import History from './src/screens/History';






export default function App() {

  const Stack = createStackNavigator();

  const StackNavigator = () => (
    <Stack.Navigator initialRouteName='Getstarted'  screenOptions={{
      headerShown: false
      
     }}>
           
        <Stack.Screen name='Getstarted'   component={Getstarted} />  
        <Stack.Screen name='Login'   component={Login} /> 
        <Stack.Screen name='SignUp'   component={SignUp} />  
        <Stack.Screen name='SignUp2'   component={SignUp2} />  
        <Stack.Screen name='FinishedReg'   component={FinishedReg} />   
        <Stack.Screen name='AppNav'   component={AppNav} />   
        <Stack.Screen name='RequestForm'   component={RequestForm} />  
        <Stack.Screen name='BusinessLicenseVerification'   component={BusinessLicenseVerification} />  
        <Stack.Screen name='History' component={History} />
       
     </Stack.Navigator>
  );
  



  return (  
    <NavigationContainer>
      
      <StackNavigator />
    </NavigationContainer>   
  );
}


