import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';



import Login from '../screens/Login';
import FinishedReg from '../screens/FinishedReg';
import SignUp from '../screens/SignUp';
import Getstarted from '../screens/Getstarted';
import TabNav from './TabNav';
import BusinessLicenseVerification from '../screens/BusinessLicenseVerification';
import TransitForm from '../screens/TransitForm';
import Main from '../screens/Main';
import History from '../screens/History';



const Stack = createStackNavigator();


const StackNav = () => {
    
    return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Getstarted'  screenOptions={{
        headerShown: false
        
        }}>
            
            <Stack.Screen name='Getstarted'   component={Getstarted} />  
            <Stack.Screen name='Login'   component={Login} /> 
            <Stack.Screen name='SignUp'   component={SignUp} />  
            <Stack.Screen name='FinishedReg'   component={FinishedReg} />   
            <Stack.Screen name='TabNav'   component={TabNav} />   
            <Stack.Screen name='TransitForm'   component={TransitForm} />   
            <Stack.Screen name='BusinessLicenseVerification'   component={BusinessLicenseVerification} />  
            <Stack.Screen name='Main'   component={Main} /> 
            <Stack.Screen name='History'   component={History} /> 
        
        </Stack.Navigator>
    </NavigationContainer>
  );


};
  

export default StackNav;