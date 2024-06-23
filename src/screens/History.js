import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Button, FlatList } from 'react-native'
import axios from 'axios';




import { colors } from '../components/colors'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { ImageBackground } from 'react-native'



const data = [
  {id:1, route: "Mwanza - Singida" ,   days:7 },
  {id:2, route:"Dar es Salaam - Arusha" ,     days:7},
  {id:3, route:"Dar es Salaam - Iringa" ,  days:7 },
  {id:4, route:"Dar es Salaam - Mtwara" ,     days:7 },
  {id:5, route:"Dodoma - Mwanza" ,     days:7 },
  {id:6, route:"Dar es Salaam - Tanga" ,   days:7 },
 ];

 


 function History(props) {
  

  
 
 
   return (
     <SafeAreaView style={styles.safeArea}>
     <View style={styles.upperView} >  
       <Text style={{fontFamily: 'serif', fontSize:29, fontWeight: '800', color: colors.black, }}>  History</Text>
       <Text style={{fontFamily: 'serif', color: colors.black, fontWeight: '700', fontSize: 17}}>     Completed Deliveries</Text>
     </View>




     <View style={styles.lowerView}>

      <View style={styles.lower1}>
        <Text style={styles.UploadHere}>  Route Details</Text>
       
      </View>


      <View style={styles.lower2}>
      
      <View style={styles.Route}  >
        <View style={styles.heading}>
            <Text  style={{fontFamily: 'serif', fontSize: 36, color: colors.secondary}}>
              Route
            </Text>

            <Text  style={{fontFamily: 'serif', fontSize: 36, color: colors.secondary}}>
                Days Used
            </Text>
        </View>

        <View style={styles.body}> 
          <FlatList
            data = {data}
            renderItem={({item}) => {
              return (
                <View style={styles.row} key={item.id}>
                <Text style={{fontSize: 20, color: colors.secondary}}>{item.route}</Text>
                <Text style={{fontSize: 20, color: colors.secondary}}>{item.days} days</Text>
              </View>
              );
            }


            }
          />
        </View>

       
        
          
       
      </View>

     

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
    fontFamily: 'serif',
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

   Route: {
    marginTop: 10,
    backgroundColor: colors.primary,
    height: '50%',
    width: '96%',
    borderRadius: 30,
    flexDirection: 'column',
    justifyContent: 'space-between',
   

     
   },

   heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 6,
    flex: 1
   },

   body: {
    width: '97%',
    flex:3,
    flexDirection: 'column',
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

   row : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
   },
 
 })





export default History;