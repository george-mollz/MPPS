import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import SignUp2 from './src/screens/SignUp2';
import Login from './src/screens/Login';
import FinishedReg from './src/screens/FinishedReg';
import Welcome from './src/screens/Welcome';
import SignUp from './src/screens/SignUp';
import Main from './src/screens/Main';
import Getstarted from './src/screens/Getstarted';
import AppNav  from './src/screens/AppNav';
import RequestForm from './src/screens/RequestForm';
import Route from './src/screens/Route';
import BusinessLicenseVerification from './src/screens/BusinessLicenseVerification';
import SampleA from './src/screens/SampleA';






export default function App() {

  const Stack = createStackNavigator();

  const StackNavigator = () => (
    <Stack.Navigator initialRouteName='Welcome'  screenOptions={{
      headerShown: false
      
     }}>
        <Stack.Screen name='Welcome'   component={Welcome} />       
        <Stack.Screen name='Getstarted'   component={Getstarted} />  
        <Stack.Screen name='Login'   component={Login} /> 
        <Stack.Screen name='SignUp'   component={SignUp} />  
        <Stack.Screen name='SignUp2'   component={SignUp2} />  
        <Stack.Screen name='FinishedReg'   component={FinishedReg} />   
        <Stack.Screen name='Main'   component={Main} />    
        <Stack.Screen name='AppNav'   component={AppNav} />   
        <Stack.Screen name='RequestForm'   component={RequestForm} />  
        <Stack.Screen name='Route'   component={Route} />  
        <Stack.Screen name='BusinessLicenseVerification'   component={BusinessLicenseVerification} />  
        <Stack.Screen name="SampleA" component={SampleA} />
       
     </Stack.Navigator>
  );
  



  return (  
    <NavigationContainer>
      
      <StackNavigator />
    </NavigationContainer>   
  );
}


