import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button, SafeAreaView } from 'react-native';





function Welcome({navigation}) {
    

   setTimeout(() =>{
      navigation.replace('Getstarted')
   },1000)


    return (
       <SafeAreaView  style={styles.container}>
         
         <Image style={styles.logo} source={require("../assets/logo.png")}/>

         
                    
         
       </SafeAreaView>
    );
}


const styles = StyleSheet.create({
   container:{
     
     justifyContent: 'center',
     alignItems: 'center',
    

   },

   logo: {
      
      width: 320,
      height: 250,
      marginTop: 230,
   },

   copyright: {
      fontSize: 19, 
      justifyContent: 'center',
      alignItems: 'center',
      color:'506554',
  },

  footer: {
      jutifyContent: 'center',
      alignItems: 'center',
      height: 45,
      width: 800,
      marginTop: 228,
      backgroundColor: 'darkslategrey',
  },



})
export default Welcome;