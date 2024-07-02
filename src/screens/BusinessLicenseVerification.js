import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Button } from 'react-native'
import DocumentPicker, { types } from 'react-native-document-picker'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"




import { colors } from '../components/colors'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { ImageBackground } from 'react-native'


function BusinessLicenseVerification({navigation}) {



  const [selectedDocument, setSelectedDocument] = useState(null);




  const selectDocument = async () => {

    try {
      const doc = await DocumentPicker.pick({
        type: [types.pdf],
      });
      setSelectedDocument(doc); // Store the selected document
      console.log(doc); // Log the selected document
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("User cancelled the upload", err);
      } else {
        console.log(err);
      }
    }
  };






  const submitDocument = async () => {
    if (selectedDocument) {
      try {
        // API call to submit the document
        const formData = new FormData();
        formData.append('document', {
          uri: selectedDocument[0].uri,
          type: selectedDocument[0].type,
          name: selectedDocument[0].name,
        });

        const response = await fetch('YOUR_API_ENDPOINT', {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        const result = await response.json();
        console.log(result);
        alert('Document submitted successfully!');
      } catch (err) {
        console.log(err);
        alert('Failed to submit document');
      }
    } else {
      alert('Please select a document first');
    }
  };

 
   return (
     <SafeAreaView style={styles.safeArea}>
     <View style={styles.upperView} >  
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Main") }>
            <MaterialCommunityIcons name="chevron-left" size={37} color={colors.black}/>
        </TouchableOpacity>
      </View>
      <View>
       <Text style={{fontFamily: 'serif', fontSize:29, fontWeight: '800', color: colors.primary, }}>  Verification</Text>
       <Text style={{fontFamily: 'serif', color: colors.black, fontWeight: '600', fontSize: 17}}>     Upload Business License</Text>
      </View>
     </View>




     <View style={styles.lowerView}>

      <View style={styles.lower1}>
        <Text style={styles.UploadHere}>  Upload here</Text>
        <Text style={styles.send}>   Send your document to verify that you are a  </Text>
        <Text style={styles.send}>   <Text style={styles.valid}>valid</Text>  customer of the TFS service system</Text>
      </View>


      <View style={styles.lower2}>
      
      <TouchableOpacity style={styles.search} onPress={selectDocument} >
       <MaterialCommunityIcons name="upload" size={50} color={colors.secondary} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.Submit} 
     // onPress={submitDocument}
      >
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
   flexDirection: 'row'
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