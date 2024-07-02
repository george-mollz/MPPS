import React, {useState, useEffect, use} from 'react';
import { ImageBackground, FlatList, SafeAreaView, View, StyleSheet, Image, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useUser } from '../context/UserContext';
import { colors } from '../components/colors';

export default function Main({navigation}) {

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

  const {user} = useUser();



  return (
   <SafeAreaView style={styles.container}>
    
    <View style={styles.View1}>

          <View style={styles.profile}> 

              <TouchableOpacity style={styles.dp}>
                <MaterialCommunityIcons name="account" size={35} color={colors.black}/>
              

              </TouchableOpacity>

              <View>
                  <Text style={{marginLeft: 8, fontWeight:'700', color: colors.black, fontFamily: 'serif'}}>{greeting}</Text>    
                  <Text style={{fontSize: 23, fontWeight: '700', color: colors.black,  fontFamily:'serif'}}> {user?.name}</Text>    
              </View>

              <TouchableOpacity  style={{marginLeft: 200}}  onPress={() => navigation.replace('Login')} >
                <MaterialCommunityIcons name='logout' size={35} color={colors.black} />
              </TouchableOpacity>

          </View>
    </View>


    <View style={styles.View2}>


       
              <ImageBackground style={styles.startH} source={require('../assets/Truck.png')}>

                      {/* <TouchableOpacity
                      style={{ justifyContent:'center', alignItems:'center', marginLeft: 170, marginBottom: 10, marginLeft:237, width: 150, height: 35, backgroundColor: colors.primary, borderRadius: 35, flexDirection: "row"}}
                      onPress = {(onPress) = console.log("Verifying")}
                      >
                        <Text style={{color: colors.white, paddingRight: 13, fontSize:18}}>Start here</Text>
                        <Image style={{width:25, height:19}} source={require('../assets/Arrow.png')}/>
                      </TouchableOpacity> */}

              </ImageBackground>
             
    </View>


    <View style={styles.View3}>


              <View   style={styles.verify}>  
                        <TouchableOpacity    style={styles.verification}  onPress={() => navigation.navigate('BusinessLicenseVerification')} >
                          <Image   style={{height: 50, width: 50, marginLeft: 15 }}   source={require("../assets/VeriIcon.png")} />
                          <View   style={{marginLeft:25}}> 
                            <Text style={{fontSize: 25, color: colors.secondary}}>Verify documents</Text> 
                            <Text style={{color:colors.white, fontSize: 18,}}> Business License Here</Text>
                            
                          </View>                
                        </TouchableOpacity>  

              <View style={{ marginRight:150,  width:230, paddingTop: 2 }}> 
                            <Text style={{fontSize: 22 , fontWeight: '600', color: colors.black}}>Forest Products</Text>
                            <Text style={{fontSize: 15 , fontWeight: '600', color: colors.black}}>Products supported by MPPS</Text>
              </View>



              <View style={styles.products}>    
                                    <View style={{marginRight: 5, paddingTop:10}}>
                                      <Image style={{height: 149, width: 240 ,borderRadius:20}} source={require('../assets/hard_wood_2.png')} /> 
                                    </View>

                                    <View style={{paddingTop:13, }}>


                                      <View style={{flexDirection:'row', }}>


                                        <View style={{ paddingRight:1}}>
                                          <TouchableWithoutFeedback>
                                            <Image style={{height: 69, width: 70, borderRadius: 14}} source={require("../assets/Hardwood.png")} />
                                          </TouchableWithoutFeedback>            
                                        </View>


                                        <View style={{borderRadius: 50}}>
                                          <TouchableWithoutFeedback>
                                            <Image style={{height: 69, width: 70, borderRadius: 14}} source={require("../assets/softwood.png")} />
                                          </TouchableWithoutFeedback>            
                                        </View>

                                      </View>
                                      





                                      <View style={{flexDirection:'row', paddingTop:6}}>

                                        <View style={{paddingRight: 2}}>
                                          <TouchableWithoutFeedback>
                                            <Image style={{height: 69, width: 70, borderRadius: 14}} source={require("../assets/Timber.png")} />
                                          </TouchableWithoutFeedback>            
                                        </View>

                                        <View>
                                          <TouchableWithoutFeedback>
                                            <Image style={{height: 69, width: 70, borderRadius: 14}} source={require("../assets/WoodPile.png")} />
                                          </TouchableWithoutFeedback>            
                                        </View>

                                      </View>

                                    </View>

                                  </View>
                                
                      
                                   
                                        <View style={styles.history}  >
                                              <Text style={{fontSize: 17, color: colors.secondary, }}>    Completed Deliveries</Text>   
                                              <View style={{height: 40, width: 40, marginLeft:135, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.secondary, borderRadius: 50}} source={require("../assets/circle.png")}>
                                                  <Text style={{fontSize: 20, fontWeight:'500', fontFamily: 'serif',color: colors.black}}>5</Text>
                                              </View>                                     
                                        </View>  
                                
            </View>   
    </View>




    









   </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    container: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: colors.white,
        flex:1,
        
        
     },



     View1 : {
       height: 72,
       width: '100%',
       flexDirection: 'row',
       
     }, 
     
     View2: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems:'center',
       

        
            }, 
     
     View3: {
        flex:3,
        width: '99%',
     },
   
     dp: {
       borderRadius: 50,
       width: 50,
       height:50,
       backgroundColor: colors.primary,
       justifyContent: "center",
       alignItems: "center"
     },
   
     profile: {
       
       marginTop: 10,
       flexDirection: 'row',
       width:"100%",
       marginLeft: 4
    
     },
   
     beware: {
       backgroundColor: 'gray',
       marginTop: 5,
       borderRadius: 70,
       
       
     },
   
     startH: {
       height:"90%", 
       width: "99%",
       borderRadius: 40,
       flexDirection: "column-reverse"
       
     
     },
     
     startBtn: {
   
     },
   
     verify: {
       backgroundColor: colors.palegray,
       marginTop: 19,
       borderRadius: 27,
       width: '99%',
       height: 400,
       
       alignItems: 'center',
     },
   
     verification: {
       alignItems:'center',
       flexDirection: 'row',
       marginTop: 10,   
       borderRadius: 27,
       backgroundColor: colors.primary,
       width: '97%',
       height: 100,
     },
   
     history: {
      justifyContent: 'space-between',
       alignItems:'center',
       flexDirection: 'row',
       marginTop: 15,   
       borderRadius: 27,
       backgroundColor: colors.primary,
       width: "100%",
       height: 50,
     },
   
     products: {
       flexDirection: 'row',
     },
   
     tab: {
       backgroundColor: colors.secondary,
       height: 60,
       width: 385,
       borderRadius: 50,
       marginTop: 7
     },

})