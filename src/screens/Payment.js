import React, {useState, useEffect} from 'react';
import { SafeAreaView, ScrollView ,Text, StyleSheet, View, TouchableOpacity, FlatList, TouchableWithoutFeedback, Alert, Modal, TextInput  } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../components/colors';
import { fonts } from '../components/Font';

import { useUser } from '../context/UserContext';

function Payment({navigation}) {

    
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


  //HANDLE PAYMENTS
  const [pin, setPin] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handlePayments = () => {
    setModalVisible(true);
  };
  
  //HANDLE PIN SUBMISSION
  const handlePinSubmit = () => {
    if (pin.length === 4) {
      // Handle the payment logic here
      Alert.alert('Payment Successful', 'Your payment has been processed.');
      setModalVisible(false);
      setPin('');
    } else {
      Alert.alert('Invalid PIN', 'Please enter a valid four-digit PIN.');
    }
  };




  //PAYMENT DUMMY DATA
   const costEstimation = [
    {id: 1 , tax_Payments:" 68,000" , cargo_Costs: "68,000"},
   
    ];

    const paymentHistory= [
      {id: 1, date: "16/05/24", route: "Mwz-Sing", cost:"68,000" },
      {id: 2, date: "18/05/24", route: "Ars-Dar", cost:"100,000" },
      {id: 3, date: "21/06/24", route: "Iri-Dom", cost:"100,000" },
      {id: 4, date: "25/06/24", route: "Iri-Ars", cost:"70,000" },
    ];

    //CREATING USER OBBJECT
    const {user} = useUser();

    return (
       <SafeAreaView style={styles.container}>
            <View style={styles.profile}> 

                        <View style={styles.dp}>
                        
                          <MaterialCommunityIcons name="account" size={35} color={colors.black} />

                        </View>

                        <View>
                            <Text style={{marginLeft: 8, fontWeight:'700', color: colors.black,  fontFamily:'serif'}}>{greeting}</Text>    
                            <Text style={{fontSize: 23, fontWeight: '700', color: colors.black,  fontFamily:'serif'}}> GEORGE</Text>    
                        </View>

                        <TouchableOpacity  style={{marginLeft: 200}}  onPress={() => navigation.navigate('Login')} >
                        <MaterialCommunityIcons name='logout' size={35} color={colors.black} />
                        </TouchableOpacity>

            </View>

            <View style={styles.Payments}>
                <Text style={{fontSize: 25, color : colors.black, fontWeight: '800', fontFamily: fonts.serif, marginLeft: 6  }}>
                    Payments
                </Text>            
            </View>

            <View style={[styles.PaymentsView, {height:100}]}>
              <View>

                <Text style={{ fontFamily:fonts.serif, color: colors.secondary, fontSize: 18, fontWeight:"700"}}>   Total Payable amount </Text>
                <Text style={{ fontFamily:fonts.serif, color: colors.secondary, fontSize: 18, fontWeight:"700"}}>   68,000 /=</Text>
              </View>

              <View>
                <View style={styles.pay}>
                  <TouchableOpacity onPress={handlePayments}>
                    <Text style={{fontSize: 18, fontFamily: fonts.serif, color: colors.secondary}}>Pay</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View   style={styles.costEstimation}>  
             
                <View>
                    <Text style={{fontSize: 25, color: colors.black,  fontFamily:'serif', fontWeight:"800" }}>Cost Estimation</Text>
                </View>


                <View style={[styles.PaymentsView, {height: 120}]}>
                  <View style={styles.cost1}>
                     <Text style={{color: colors.secondary, fontSize: 18 ,fontWeight: "700"}}> Tax payments</Text>
                     <Text style={{color: colors.secondary, fontSize: 18 ,fontWeight: "700"}}> 5,000 /=</Text>
                  </View>
                  <View  style={styles.cost1}>
                     <Text style={{color: colors.secondary, fontSize: 18 ,fontWeight: "700"}}> Cargo costs</Text>
                     <Text style={{color: colors.secondary, fontSize: 18 ,fontWeight: "700"}}> 20,000 /=</Text>
                  </View>
                  <View  style={styles.cost1}>
                     <Text style={{color: colors.secondary, fontSize: 18 ,fontWeight: "700"}}> Service Charges</Text>
                     <Text style={{color: colors.secondary, fontSize: 18 ,fontWeight: "700"}}> 20,000 /=</Text>
                  </View>
                  <View   style={styles.cost2}>
                     <Text style={{color: colors.secondary, fontSize: 18 ,fontWeight: "700"}}> Total</Text>
                     <Text style={{color: colors.secondary, fontSize: 18 ,fontWeight: "700"}}> 45,000 /=</Text>
                  </View>

                </View>

                <View style={styles.PaymentsHistory}>
                  {/*HISTORY HEADING*/}
                     <View style={{flex:1,  width: "100%"}}>
                          <Text style={{fontFamily:fonts.serif, color:colors.secondary, fontSize: 18, marginLeft:7, fontWeight: "700"}}>
                            Payment History
                          </Text>
                     </View>

                     <View style={{flex:3, width: "100%"}}>
                          <FlatList 
                          
                          
                data={paymentHistory}
                keyExtractor={item => (
                  item.id.toString()
                )}
                renderItem={({item}) => (
                  <View style={{ marginHorizontal: 10, flexDirection: "row", justifyContent:"space-between", borderBottomWidth:1, borderBottomColor: colors.secondary }}>
                  <View>
                    <Text style={[styles.text, { color: colors.secondary, fontSize: 18, fontWeight: "700" }]}>{item.date}</Text>
                  </View>
                  <View>
                    <Text style={[styles.text, { color: colors.secondary, fontSize: 18, fontWeight: "700" }]}>{item.route}</Text>
                  </View>
                  <View>
                    <Text style={[styles.text, { color: colors.secondary, fontSize: 18, fontWeight: "700" }]}>{item.cost} /=</Text>
                  </View>
                </View>
                 

                )
                }

                style={{width: "100%", borderRadius: 20,}}
                  
              
                          
                          />
                     </View>


                </View>

            </View>   

            <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Enter PIN</Text>
            <TextInput
              style={styles.input}
              onChangeText={setPin}
              value={pin}
              keyboardType="numeric"
              maxLength={4}
              secureTextEntry={true}
              placeholder="Enter 4-digit PIN"
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.button, styles.buttonCancel]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setPin('');
                }}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.buttonSubmit]}
                onPress={handlePinSubmit}
              >
                <Text style={styles.textStyle}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>


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
       
        marginTop: 19,
        borderRadius: 27,
        backgroundColor: colors.primary,

    },

    dp: {
        borderRadius: 50,
        width: 50,
        height:50,
        backgroundColor: colors.primary,
        justifyContent:"center",
        alignItems: "center"
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
        height: "58%",
        
        alignItems: 'center',
      },

      cost1: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "95%",
        marginLeft: 4,
        
      },
     
      cost2: {
        flex:2,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "95%",
        marginTop: 8,

      },

      PaymentsHistory: {
        width: '98%',
        height: "40%",
        marginTop: 19,
        borderRadius: 27,
        backgroundColor: colors.primary,
        
      },

      pay: {
        backgroundColor: "grey",
        borderRadius: 50,
        width: "20%",
        height: "60%",
        justifyContent: "center",
        alignItems:"center",
        borderColor: colors.secondary,
        borderWidth: 2,
      },

      modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalContent: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700',
        color: colors.black,
        fontFamily: fonts.serif,
      },

      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        width: '100%',
        paddingHorizontal: 10,
        borderRadius: 5,
        color: colors.black,
      },

      modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonCancel: {
        backgroundColor: '#f44336',
      },
      buttonSubmit: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },






})

export default Payment;