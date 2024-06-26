import React, { useState, useEffect} from 'react';
import { SafeAreaView, View, TextInput, Text, Button, TouchableOpacity, Image, StyleSheet, Platform, ScrollView, Keyboard, Alert } from 'react-native';
import  {Formik}  from 'formik';
import * as Yup from 'yup';
import { MaterialCommunityIcons } from 'react-native-vector-icons/MaterialCommunityIcons';




import Footer from '../components/Footer';
import { colors } from '../components/colors'

export default function Login({navigation}) {

  const handlePress = () => {
    Keyboard.dismiss();
};
  

  
  
  
  
  
  
  
  

  
// HANDLE LOGIN
const handleLogin = async (values) => {
    //const {email, password} = values;
    // try {
    //   const response = await axios.post('https://your-api-endpoint/login', {
    //     email,
    //     password,
    //   });

    //   if (response.data.token) {
    //     // Store the token in AsyncStorage for future use
    //     await AsyncStorage.setItem('authToken', response.data.token);
    //     navigation.navigate('Main'); // Navigate to the home screen
    //   } else {
    //     setError('Invalid email or password');
    //   }
    // } catch (error) {
    //   console.error(error);
    //   setError('An error occurred. Please try again later.');
     }



    

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email").nonNullable(true),
    password: Yup.string().required().label("Password").nonNullable(true),
  });


  return (
   <SafeAreaView  style={styles.container}>
    <View style={{  alignItems: 'center', flex:28}}>
       <Formik 
       initialValues={{email: '', password: ''}}
       validationSchema={validationSchema}
       onSubmit={handleLogin}
       children={({ handleChange, handleSubmit, handleBlur, errors, values, isValid }) => (
        <>
          <Text style={styles.heading}>Login</Text>
            <View style={styles.label}>
              <Text style={{fontSize: 17, color: colors.black, fontWeight: '600', fontFamily: 'serif'}}>Email</Text>
            </View>

            <View style={styles.input}>

            
             
              <TextInput
                style={styles.textInput}
                onChangeText={handleChange('email')}
                placeholder='Email'
                value={values.email}
                textContentType='emailAddress'
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='email-address'
                inputMode='email'
               
              />
            </View>

            <Text style={{ color: colors.red }}>{errors.email}</Text>
            <View style={styles.label}>
              <Text style={{fontSize: 17, color: colors.black, fontWeight: '600',  fontFamily: 'serif'}}>Password</Text>
            </View>
            <View style={styles.input}>
              
              <TextInput
                style={styles.textInput}
                onChangeText={handleChange('password')}
                placeholder='Password'
                secureTextEntry
                textContentType='password'
                autoCapitalize='none'
                autoCorrect={false}
                value={values.password}
                keyboardType='default'
                
                
              />
            </View>
            <Text style={{ color: colors.red }}>{errors.password}</Text>
            <TouchableOpacity
              style={[styles.button,]}
              onPress={
              () => navigation.navigate("AppNav")
             // handleSubmit
            }
              //disabled = {values.email === '' || values.password === '' }
            >
              <Text style={{ fontSize: 19, fontWeight: 'bold',  fontFamily: 'serif', color: colors.black }}>Sign In</Text>
            </TouchableOpacity>
            <View>
              {/* Sign Up section */}
              <TouchableOpacity  style={styles.dhaa} onPress={() => navigation.navigate('SignUp')} >
                <Text style={{ marginTop: 20, color: colors.black,fontFamily: 'serif', fontSize: 17  }}>
                  Don't have an account? <Text style={{ fontSize: 17, color: colors.blue }}>Sign Up</Text>
                </Text>
                <Image style={{ height: 3, width: 190 }} source={require("../assets/Line.png")} />
              </TouchableOpacity>
             
              {/* Additional Login options (e.g., Google sign-in) can be added here */}
            </View>
          







        </>
      )}
       
       
       />

    </View>


   
    <View>
      <Footer />
    </View>
    

    
    
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  container: {
       justifyContent: 'flex-end',
        
        
        flex: 1,
        
    },
    heading:{
        fontSize: 39,
        color: colors.black,
        marginTop: 49,
        fontFamily: 'serif'
    },
    label: {
        justifyContent: 'left',
        alignItems: 'left',
        marginTop: 12,
        width: 300,
        fontFamily: 'serif',
    },
    input: {
        alignItems: 'center',
        backgroundColor: colors.lightgray,
        borderRadius: 13,
        width: "80%",
        height: 60,
        marginTop: 9,
        flexDirection: 'row'
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 10, // Adjust according to icon size
        fontFamily: 'serif',
        width: '85%',
        color: colors.black,
    },
    button: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: colors.secondary,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: colors.tertiary,
        width: "30%",
        height: 50,
        marginTop: 11,
    },
    dhaa: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    Google: {
        marginTop: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    copyright: {
      fontSize: 15, 
      paddingTop: 1, 
      fontWeight: 'bold',
      color : colors.black
        
        
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '3%',
        width: '100%',
        marginTop: 394,
        backgroundColor: colors.primary,
        flex:1,
      
    },
    copyright: {
      fontSize: 15, 
      paddingTop: 1, 
      fontWeight: 'bold',
      color : colors.black
        
        
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '3%',
        width: '100%',
        marginTop: 394,
        backgroundColor: colors.primary,
      
    },
})