import React from 'react';
import {View ,StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import * as Permissions from 'react-native-permissions';


import colors from './colors';


function BusinessLicenseVerification(props) {

  const selectDoc = async () => {
    const { status } = await Permissions.askAsync(Permissions.STORAGE);
    if (status !== 'granted') {
      console.error('Storage permission not granted');
      return;
    }
  
    try {
      const doc = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
        allowMultiSelection: false,
      });
      console.log(doc);

    } catch(err) {
      if(DocumentPicker.isCancel(err))
        console.log("User cancelled the upload", err);
      else
      console.log(err)


    }
  };








  return (
   <SafeAreaView>
        <Text
          style ={{
            color: '#000',
            fontSize: 28,
            textAlign:  'center',
            marginVertical: 40,
          }}
        >
            upload Business License
        </Text>

        <View style={{marginHorizontal: 40}}>
          <Button title='Select Business License' onPress={() => {selectDoc}} />
        </View>

   </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  
})





export default BusinessLicenseVerification;