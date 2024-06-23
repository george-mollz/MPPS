import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'


import {MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from './colors'

export default function Header() {
  return (
 
    <View style={styles.heading}>
      <Text style={{fontSize:38, color: colors.primary}}>Transit Application</Text>
      <Text style={{color: colors.black,fontSize:25 }}>Request form</Text>
    </View>

 
  )
}

const styles = StyleSheet.create({
    heading: {
      
       
    },
})