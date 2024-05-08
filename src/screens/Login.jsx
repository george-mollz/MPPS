import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Text, Button, TouchableOpacity, Image, StyleSheet, Platform, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { colors } from './colors';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().matches(/^[\w!#$%&'*+/=?^`{|}~-]+(?:\.[\w!#$%&'*+/=?^`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$/, 'Invalid email format').email().label("Email").nonNullable(true),
  password: Yup.string().required().label("Password").nonNullable(true),
});

function Login({ navigation }) {
  
 
 

 

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
        onChange={() => console.log(values)}
      >
        {({ handleChange, handleSubmit, handleBlur, errors, values }) => (
          <>
            <Text style={styles.heading}>Login</Text>
            <View style={styles.label}>
              <Text>Email</Text>
            </View>
            <View style={styles.input}>
              <MaterialCommunityIcons
                name='email'
                size={25}
                style={{ color: colors.black, marginRight: 4, marginLeft: 2 }}
              />
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
              <Text>Password</Text>
            </View>
            <View style={styles.input}>
              <MaterialCommunityIcons
                name='lock'
                size={30}
                style={{ color: colors.black, marginRight: 4, marginLeft: 2 }}
              />
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
              onPress={() => navigation.replace('AppNav')}
              
            >
              <Text style={{ fontSize: 19 }}>Sign In</Text>
            </TouchableOpacity>
            <View>
              {/* Sign Up section */}
              <TouchableOpacity style={styles.dhaa} onPress={() => navigation.navigate('SignUp')}>
                <Text style={{ marginTop: 20 }}>
                  Don't have an account? <Text style={{ fontSize: 17, color: colors.blue }}>Sign Up</Text>
                </Text>
                <Image style={{ height: 3, width: 190 }} source={require("../assets/Line.png")} />
              </TouchableOpacity>
             
              {/* Additional Login options (e.g., Google sign-in) can be added here */}
            </View>
            <View style={styles.footer}>
              <Text style={StyleSheet.copyright}>@MPPS 2024</Text>
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: Platform.OS ? 10 : 15,
    },
    heading:{
        fontSize: 39,
        color: colors.black,
        marginTop: 49
    },
    label: {
        justifyContent: 'left',
        alignItems: 'left',
        marginTop: 12,
        width: 300,
    },
    input: {
        alignItems: 'center',
        backgroundColor: colors.lightgray,
        borderRadius: 13,
        width: 300,
        height: 60,
        marginTop: 9,
        flexDirection: 'row'
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        paddingLeft: 10, // Adjust according to icon size
    },
    button: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: colors.secondary,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: colors.tertiary,
        width: 170,
        height: 47,
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
        fontSize: 19, 
        justifyContent: 'center',
        alignItems: 'center',
        color: '506554',
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 17,
        width: 800,
        marginTop: 265,
        backgroundColor: colors.primary,
    },
})

export default Login;
