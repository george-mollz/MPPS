import React from 'react';
import { SafeAreaView, View, TextInput, Text, Button, FlatList, Image, StyleSheet, TouchableOpacity, Platform, ScrollView} from 'react-native';


import * as Yup from 'yup';
import {Formik} from 'formik';
import {MaterialCommunityIcons } from 'react-native-vector-icons';


import {colors} from './colors';




const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string().min(9).required().nonNullable(),
    password:  Yup.string().required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Password must contain a lowercase letter')
    .matches(/[A-Z]/, 'Password must contain an uppercase letter')
    .matches(/\d/, 'Password must contain a digit')
    .matches(/[!@#$%^&*_]/, 'Password must contain a special character'),
    confirm:  Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
})



function SignUp({navigation}) {
    return (
        <SafeAreaView       
        
        style = {styles.container}
        >



            <Formik
            initialValues={{ phoneNumber:' ', password:' ', confirm: ' '}}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
            >
               {({ handleChange, handleSubmit,handleBlur, errors, values }) => (
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
                    
                    <MaterialCommunityIcons 
                    name='email' 
                    size={25}
                    style = {{color: colors.black, marginRight: 4, marginLeft: 2,}}

                    />

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
                    <MaterialCommunityIcons 
                    name='phone' 
                    size={30}
                    style = {{color: 'black', marginRight: 4, marginLeft: 2}} 
                    />


                    <TextInput 
                    onChangeText={handleChange('phoneNumber')}
                    placeholder='+254-*********'
                    textContentType='password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    values={values.password}
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
                    <MaterialCommunityIcons 
                    name='lock' 
                    size={30}
                    style = {{color: 'black', marginRight: 4, marginLeft: 2}} 
                    />


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
                    <MaterialCommunityIcons 
                    name='lock' 
                    size={30}
                    style = {{color: 'black', marginRight: 4, marginLeft: 2}} 
                    />


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
                    >
                       <Text style={{fontSize: 19}}>SignUp</Text> 
                                        
                          
                    </TouchableOpacity>
                   
                    

                 
                
                 


                   
                    
                    <View style = {styles.footer} > 
                        <Text style = {StyleSheet.copyright}>@MPPS 2024</Text>
                    </View>        
                    
                </>
              ) }
            </Formik> 
        </SafeAreaView>
    );
}

























const styles = StyleSheet.create({

    container: {
        jutifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        marginTop: 15,


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
        marginTop: 191,
        backgroundColor: colors.primary,
    },

    
})


export default SignUp;