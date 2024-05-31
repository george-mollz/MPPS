import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, TouchableWithoutFeedback, Button, ImageBackground, TouchableOpacity} from 'react-native';


import {colors }from './colors';

function Getstarted({navigation}) {
    return (
        <SafeAreaView  style={styles.container}>

         <View style={{flex : 18, justifyContent: 'center', alignItems: 'center'}}>


          <View style={styles.intro}>

         <Text style={{fontSize: 35, fontWeight: '600', color: colors.black}}>Welcome to</Text>
         <Text style={{fontSize: 35, fontWeight: '600', color: colors.black}}>Misitu Products</Text>
         <Text style={{fontSize: 35, fontWeight: '600', color: colors.black}}>Permit System</Text> 

          </View>

         <TouchableOpacity onPress={() => navigation.replace('Login')}>
         <View  style={styles.getStarted}>

            <Text style={{ fontSize: 25, color: colors.black}}>Get Started</Text>  

         </View>
         </TouchableOpacity>

              
                        
         </View>


         <View style = {styles.footer} > 
          <Text style = {StyleSheet.copyright}>@MPPS 2024</Text>
        </View> 

          
        </SafeAreaView>
     );
 }
 
 
 const styles = StyleSheet.create({
    container:{
      
      justifyContent: 'flex-end',
      alignItems: 'center',
      flex:1,
     
     
 
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
       height: 10,
       width: "100%",
       marginTop: 387,
       backgroundColor: colors.primary,
       flex:1,
   },

   copyright: {
    color: colors.black,
    fontSize : 10,
    fontWeight: 'bold',
    fontFamily: 'serif',
   },
 
 
 
 });
 


export default Getstarted;