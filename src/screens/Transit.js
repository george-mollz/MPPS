import React from 'react';
import { SafeAreaView, View, Text, StyleSheet,  TouchableOpacity} from 'react-native';
import { colors } from '../components/colors';
import Route from './Route';



function Transit({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View  style={styles.title}>
                <Text  style={{color: colors.primary, fontSize: 33,  }}> Transit Application</Text>
            </View>

            <View  style={{marginLeft: 45, marginTop: 20}}>
                <Text style={{fontSize: 20, fontWeight: '500', color: colors.black,}}>
                    New Transit Pass
                
                </Text>
            </View>

            <View  style={styles.wrapper}>
                <Text style={{paddingLeft: 18, fontSize: 18, fontWeight: '500', color: colors.black,}}>
                    Enter details
                </Text>


              
                <TouchableOpacity style={styles.apply} onPress={() => navigation.navigate('TransitForm')}>
                    <Text style={{color: colors.secondary}}> 
                        Apply
                    </Text>
                </TouchableOpacity>
            </View>


            {/* <View>
                <Route checkpoints={checkpoints} />
            </View> */}
            
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
   container: {
    flex: 1,
    alignItems: 'center',


   },

   wrapper: {
     backgroundColor: colors.lightgray,
     width: '90%',
     height: 60,
     borderRadius: 30,
     marginTop: 10,
     flexDirection:'row',
     alignItems: 'center',
     justifyContent:"space-around"

   },

   apply: {
    marginLeft: 90,
    width: 95,
    height:35,
    backgroundColor: colors.primary,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',


   },

})

export default Transit;