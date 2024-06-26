import React, {useState, useEffect} from 'react';
import { SafeAreaView, Text, StyleSheet, View, TouchableOpacity, FlatList  } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../components/colors';


function Payment(props) {

    
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const date = new Date();
      const hour = date.getHours();
  
      if (hour < 12) {
        setGreeting('Good Morning');
      } else if (hour < 18) {
        setGreeting('Good Afternoon');
      } else {
        setGreeting('Good Evening');
      }
    };
  
    updateGreeting();
  
    // Call updateGreeting again on every hour change
    const intervalId = setInterval(updateGreeting, 3600000); // Milliseconds in an hour
  
    return () => clearInterval(intervalId); // Cleanup function to stop interval on unmount
  }, []);
  





    return (
       <SafeAreaView style={styles.container}>
            <View style={styles.profile}> 

                        <TouchableOpacity style={styles.dp}>
                        


                        </TouchableOpacity>

                        <View>
                            <Text style={{marginLeft: 8, fontWeight:'600', color: colors.black,  fontFamily:'serif'}}>{greeting}</Text>    
                            <Text style={{fontSize: 23, fontWeight: '600', color: colors.black,  fontFamily:'serif'}}> George</Text>    
                        </View>

                        <TouchableOpacity  style={{marginLeft: 200}}  onPress={() => navigation.navigate('Login')} >
                        <MaterialCommunityIcons name='logout' size={30} color={colors.black} />
                        </TouchableOpacity>

            </View>

            <View style={styles.Payments}>
                <Text style={{fontSize: 25, color : colors.black, fontWeight: '600', fontFamily:'serif'  }}>
                    Payments
                </Text>            
            </View>

            <View style={styles.PaymentsView}>
                <Text style={{ fontFamily:'serif'}}>   Total Payable amount </Text>
                <Text style={{ fontFamily:'serif'}}>   68,000</Text>
            </View>

            <View   style={styles.costEstimation}>  
             
                <View>
                    <Text style={{fontSize: 25, color: colors.black,  fontFamily:'serif' }}>Cost Estimation</Text>
                </View>


                <View style={styles.PaymentsView}>
                     <Text> </Text>

                </View>

            </View>   


       </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
    
    container: {
      
        alignItems: 'center',
        backgroundColor: colors.white,
        flex:1,
        
        
     }
    ,

    Payments: {
        width: '98%',
        height: "5%",
        marginTop: 19,
        

    },

    PaymentsView: {
        width: '98%',
        height: 100,
        marginTop: 19,
        borderRadius: 27,
        backgroundColor: colors.primary,

    },

    dp: {
        borderRadius: 50,
        width: 50,
        height:50,
        backgroundColor: colors.primary,
      },
    
      profile: {
        
        marginTop: 10,
        flexDirection: 'row',
        width:400,
        width: '98%',
     
      },

      costEstimation: {
        backgroundColor: colors.lightgray,
        marginTop: 19,
        borderRadius: 27,
        width: '98%',
        height: "auto",
        
        alignItems: 'center',
      },
})

export default Payment;