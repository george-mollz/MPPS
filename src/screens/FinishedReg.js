import React from 'react';
import { Button, Image, ImageBackground, SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../components/colors';

function FinishedReg({navigation }) {
    return (
        <SafeAreaView    style={styles.container}>
           
            <Text style={styles.finish} > Finished Registration</Text>
           

           <View style= {styles.success}>
              <ImageBackground style={{height:250, width:250, }}     source={require("../assets/success.png")}>
              <Image   style={{height:250, width:250,}}       source={require('../assets/tick.png')} />
              </ImageBackground>
           </View>
            
           
              <TouchableOpacity 
              style= {styles.return}
              onPress= {() => navigation.replace("Login")}
              
              >
                <Text style={{fontSize: 20, color: colors.blue}} >Return to Login</Text>
           
                     <Image    style={{height:3, width:140, }}    source= { require("../assets/Line.png")}/>
             
               </TouchableOpacity>
            
            
            <View style = {styles.footer} > 
                        <Text style = {styles.copyright}>@MPPS 2024</Text>
            </View>  
           
        </SafeAreaView>
    );
}












const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
       
    },

    finish: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 38,
        fontWeight: '600',
        color: colors.black,
    },
   
    success: {
        borderRadius: 50,
        height: 50,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 280

    },
    return: {
        marginTop: 160,
        justifyContent: 'center',
        alignItems: 'center',
    },

    Button: {
        backgroundColor: colors.secondary,
       
    },

    line: {
        marginTop: 2,
    },

    copyright: {
        fontSize: 15, 
        paddingTop: 1, 
        fontWeight: '600',
        color : colors.black,
        fontFamily: 'serif'
        
    },

    footer: {
        jutifyContent: 'center',
        alignItems: 'center',
        height: "3%",
        width: "100%",
        marginTop: 223,
        backgroundColor: colors.primary,
    },
    


})



export default FinishedReg;