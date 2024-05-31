import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Button } from 'react-native'
import DocumentPicker, { types } from 'react-native-document-picker'




import { colors } from './colors'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { ImageBackground } from 'react-native'


function BusinessLicenseVerification(props) {

  const selectDocument = async() => {
    try{ const doc = await DocumentPicker.pick({
      type: [types.pdf]
    });
     console.log(doc);}// API FOR SENDING THE DOCUMENT
     catch {
       if(DocumentPicker.isCancel(err)){
         console.log("User cancelled the Upload", err);
       }
       else
         console.log(err);
     }
   };
 
   return (
     <SafeAreaView style={styles.safeArea}>
     <View style={styles.upperView} >  
       <Text style={{fontFamily: 'serif', fontSize:29, fontWeight: '800', color: colors.primary, }}>  Verification</Text>
       <Text style={{fontFamily: 'serif', color: colors.black, fontWeight: '600', fontSize: 17}}>     Upload Business License</Text>
     </View>




     <View style={styles.lowerView}>

      <View style={styles.lower1}>
        <Text style={styles.UploadHere}>  Upload here</Text>
        <Text style={styles.send}>   Send your document to verify that you are a  </Text>
        <Text style={styles.send}>   <Text style={styles.valid}>valid</Text>  customer of the TFS service system</Text>
      </View>


      <View style={styles.lower2}>
      
      <TouchableOpacity style={styles.search} onpress={selectDocument} >
        <ImageBackground  style={{height: 69, width: 70}} source={require('../assets/Uploader.png')}/>

      </TouchableOpacity>

      <TouchableOpacity style={styles.Submit}>
            <Text style={styles.SubmitText}>
              Submit
            </Text>
      </TouchableOpacity>

      </View>

     </View>
    
 
     </SafeAreaView>
   )
 }
 
 const styles = StyleSheet.create({
 
   safeArea : {
     flex: 1,
     alignItems: 'center'
     
   },

   upperView : {
   flex: 1,
   width: '99%',
   flexDirection: 'column'
   },

   lowerView : {
   backgroundColor: colors.lightgray,
   flex: 7,
   width: '97%',
   marginBottom: 10,
   borderRadius: 30,
   
   },

   lower1 : {
    flex:1,
    flexDirection: 'column',
    width: '100%',
   },

   UploadHere: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.black,
   },

   send: {
    fontFamily: 'serif',
    fontSize: 17,
    fontWeight: '500',
    color: colors.black,

   },

   valid: {
    fontSize: 16,
    fontFamily: 'serif',
    fontWeight: '900',
    color: colors.primary,
   },

   lower2 : {
    
    flex: 8,
    alignItems: 'center'
   },

   search: {
    marginTop: 10,
    backgroundColor: colors.primary,
    height: '30%',
    width: '96%',
    borderRadius: 30,
    justifyContent:'center',
    alignItems: 'center',
   },
    
   Submit: {
    backgroundColor: colors.primary,
    height: '7%',
    width: '40%',
    borderRadius: 30, 
    marginTop: 19,  
    justifyContent: 'center',
    alignItems: 'center'  
   },

   SubmitText: {
    fontFamily: 'serif',
    fontSize: 26,
    fontWeight: '700',
    color: colors.secondary,


   },
 
 })





export default BusinessLicenseVerification;