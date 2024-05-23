import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import DocumentPicker, { types } from 'react-native-document-picker'




import { colors } from './colors'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'


function BusinessLicenseVerification(props) {

  const selectDocument = async() => {
    try{ const doc = await DocumentPicker.pick(types.pdf);
     console.log(doc);}
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
     
     <TouchableWithoutFeedback
     onPress={selectDocument}
     style = {{backgroundColor: colors.lightgray, wdth: '50%'}}
     >
 
     <View>
       <Text>Sample A</Text>
     </View>
 
     </TouchableWithoutFeedback>
 
     </SafeAreaView>
   )
 }
 
 const styles = StyleSheet.create({
 
   safeArea : {
     flex: 1,
     
   },
 
 })





export default BusinessLicenseVerification;