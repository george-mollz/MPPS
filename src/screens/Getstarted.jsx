import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, TouchableWithoutFeedback, Button, ImageBackground, TouchableOpacity} from 'react-native';


import {colors }from './colors';

function Getstarted({navigation}) {
    return (
        <SafeAreaView  style={styles.container}>
          <View style={styles.intro}>

         <Text style={{fontSize: 35, fontWeight: '600'}}>Welcome to</Text>
         <Text style={{fontSize: 35, fontWeight: '600'}}>Misitu Products</Text>
         <Text style={{fontSize: 35, fontWeight: '600'}}>Permit System</Text> 

          </View>

         <TouchableOpacity onPress={() => navigation.replace('Login')}>
         <View  style={styles.getStarted}>

            <Text style={{ fontSize: 25, }}>Get Started</Text>  

         </View>
         </TouchableOpacity>

              
        <View style = {styles.footer} > 
          <Text style = {StyleSheet.copyright}>@MPPS 2024</Text>
        </View>                  
          
        </SafeAreaView>
     );
 }
 
 
 const styles = StyleSheet.create({
    container:{
      
      justifyContent: 'center',
      alignItems: 'center',
     
 
    },
 
  
 
    intro: {
       
       justifyContent: 'center',
       alignItems: 'center',
       marginTop: 250,
   },

   getStarted: {
      backgroundColor: colors.secondary,
      borderColor: colors.tertiary,
      borderRadius: 15,
      borderWidth: 3,
      width: 190,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 9
   },
 
   footer: {
       jutifyContent: 'center',
       alignItems: 'center',
       height: 45,
       width: 800,
       marginTop: 249,
       backgroundColor: colors.primary,
   },

   copyright: {
    color: colors.primary,
   },
 
 
 
 });
 


export default Getstarted;