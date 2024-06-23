import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { colors } from './colors'

export default function Footer() {
  return (
    <SafeAreaView>
    <View style={styles.footer}>
        <Text style={StyleSheet.copyright}>@MPPS 2024</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
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
})