import React from 'react';
import { SafeAreaView, View, TextInput, Text, Button, FlatList, Image, StyleSheet, TouchableOpacity, Platform, ScrollView} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import * as Yup from 'yup';
import {Formik} from 'formik';
import {MaterialCommunityIcons } from 'react-native-vector-icons';


import {colors} from './colors';








function SignUp2({navigation}) {

    const validationSchema = Yup.object().shape({
        email: Yup.string().required().email().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format').label("Email").nonNullable(),
        phoneNumber: Yup.string()
        .min(9)
        .required()
        .nonNullable(),
        password:  Yup.string().required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-z]/, ' must contain atleast one lowercase letter')
        .matches(/[A-Z]/, ' must contain atleast one uppercase letter')
        .matches(/\d/, ' must contain atleast one digit')
        .matches(/[!@#$%^&*_]/, 'Password must contain a special character')
        .nonNullable(),
        confirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required')
        .label("Confirm Password"),
    })


    const handlePress = () => {
        Keyboard.dismiss();
    };

    return (
        <SafeAreaView       
        
        style = {styles.container}
        >



            <Formik
            initialValues={{email: '', phoneNumber:'', password:'', confirm: ''}}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
            children = {({ handleChange, handleSubmit,handleBlur, errors, values }) => (
                <>
            
                   <View style={styles.Header}>
                    <Text style={{color: colors.secondary, fontSize:19}}>2</Text>
                   </View>




                    
                    <View
                    style = {styles.label}
                    >
                        <Text>Email</Text>
                    </View>


                    <View style = {styles.input}>   
                    
                   

                    <TextInput 
                    icon = 'mail'
                    onChangeText={handleChange('email')}
                    placeholder='Email'
                    values={values.email}
                    textContentType='emailAddress'
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'               
                    style={{width: 270}}
                    />        
                    
                    </View>

                   <Text  style = {{color: colors.red}} >{errors.email}</Text>
                   
                









                    <View
                        style = {styles.label}
                    >
                            <Text>Phone Number</Text>
                    </View>


                    <View                    
                    style = {styles.input}
                    >
                    


                    <TextInputMask 
                    onChangeText={handleChange('phoneNumber')}
                    type={'custom'}
                    options={{
                            mask: '(+255) ***-***-***'
                            }}
                    placeholder='(+255) ***-***-***'
                    textContentType='telephoneNumber'
                    autoCapitalize='none'
                    autoCorrect={false}
                    values={values.phoneNumber}
                    style={{width: 270}}
                    />
                    </View>

                    <View
                        style = {styles.label}
                    >
                            <Text>Password</Text>
                    </View>


                    <View                    
                    style = {styles.input}
                    >
                   
                    <TextInput 
                    onChangeText={handleChange('password')}
                    placeholder='Password'
                    secureTextEntry
                    textContentType='password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    values={values.password}
                    style={{width: 260}}
                    />
                    </View>

                    <Text  style = {{color: 'red'}} >{errors.password}</Text>






                    <View
                    style = {styles.label}
                    >
                        <Text>Confirm Password</Text>
                    </View>


                    <View                    
                    style = {styles.input}
                    >
                   


                    <TextInput 
                    onChangeText={handleChange('Confirm password')}
                    placeholder=' Confirm Password'
                    secureTextEntry
                    textContentType='password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    values={values.confirm}
                    style={{width: 260}}
                    />
                    </View>
                  
                    <Text style = {{color: colors.red}}>{errors.confirm}</Text>





                                 
                   
                    <TouchableOpacity
                    style={styles.button} 
                    onPress = {() => navigation.replace('FinishedReg')}
                    disabled={values.email === '' || values.phoneNumber === '' || values.password === '' || values.confirm === '' }
                    >
                       <Text style={{fontSize: 19}}>SignUp</Text> 
                                        
                          
                    </TouchableOpacity>
                   
                    

                 
                
                 


                   
                    
                    <View style = {styles.footer} > 
                        <Text style = {StyleSheet.copyright}>@MPPS 2024</Text>
                    </View>        
                    
                </>
              )}
            />
               
            
        </SafeAreaView>
    );
}

























const styles = StyleSheet.create({

    container: {
        jutifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
      


    },

    Header: {
        height: 40,
        width: 40,
        backgroundColor: colors.primary,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
    },

    label: {
        jutifyContent: 'left',
        alignItems: 'left',
        marginTop: 12,
        width:300,
        

    },


    input: {
        alignItems: 'center',
        backgroundColor: colors.lightgray,
        borderRadius: 13,
        width: 300,
        height: 50,
        marginTop: 9,
        flexDirection: 'row'

    },

    button: {
        alignItems: 'center',
        
        padding: 10,
        backgroundColor: colors.secondary,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: colors.tertiary,
        width: 170,
        height: 50,
        marginTop: 11,
      },
   
    copyright: {
        fontSize: 19, 
        paddingTop: 9, 
        color:colors.primary,
    },

    footer: {
        jutifyContent: 'center',
        alignItems: 'center',
        height: 18,
        width: 800,
        marginTop: 323,
        backgroundColor: colors.primary,
    },

    text: {
        fontFamily: 'serif',
        fontSize: 19,
        color: colors.black,
    },

    entry: {
        color: colors.black,
        fontFamily: 'serif',
        flexDirection: 'row',
        width: '98%',
    },

    
})


export default SignUp2;