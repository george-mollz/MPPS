import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



import Login from './src/screens/Login';
import FinishedReg from './src/screens/FinishedReg';
import SignUp from './src/screens/SignUp';
import Getstarted from './src/screens/Getstarted';
import AppNav from './src/components/AppNav';
import BusinessLicenseVerification from './src/screens/BusinessLicenseVerification';
import TransitForm from './src/screens/TransitForm';
import Main from './src/screens/Main';






export default function App() {

  const Stack = createStackNavigator();

  const StackNavigator = () => (
    <Stack.Navigator initialRouteName='Getstarted'  screenOptions={{
      headerShown: false
      
     }}>
           
        <Stack.Screen name='Getstarted'   component={Getstarted} />  
        <Stack.Screen name='Login'   component={Login} /> 
        <Stack.Screen name='SignUp'   component={SignUp} />  
        <Stack.Screen name='FinishedReg'   component={FinishedReg} />   
        <Stack.Screen name='AppNav'   component={AppNav} />   
        <Stack.Screen name='TransitForm'   component={TransitForm} />   
        <Stack.Screen name='BusinessLicenseVerification'   component={BusinessLicenseVerification} />  
        <Stack.Screen name='Main'   component={Main} /> 
       
     </Stack.Navigator>
  );
  



  return (  
    <NavigationContainer>
      
      <StackNavigator />
    </NavigationContainer>   
   
  );
}


