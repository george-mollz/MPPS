import React from 'react';
import { SafeAreaView, View, TextInput, Text, Button, FlatList, Image, StyleSheet, TouchableOpacity, Platform, ScrollView,} from 'react-native';


import * as Yup from 'yup';
import {Formik} from 'formik';
import {MaterialCommunityIcons } from 'react-native-vector-icons';
import { colors } from './colors';






function SignUp({navigation}) {
    //VALIDATION SCHEMA
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required().label("firstName").nonNullable(),
        lastName: Yup.string().required().label("lastName").nonNullable(),
        company: Yup.string().required().label().nonNullable(),
        address: Yup.string().required().label("address").nonNullable(),
       
       
    });

    const handlePress = () => {
        Keyboard.dismiss();
    };

    return (
        <SafeAreaView       
        
        style = {styles.container}
        >
 
       
        

            <Formik
            initialValues={{  firstName: ' ', lastName: ' ', address:' ',  email: ' ', company: ' ' }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}

            children =  {({ handleChange, handleSubmit, errors, values }) => (
                <>
            
                   

                   <View style={styles.Header}>
                    <Text style={{fontSize: 19, color: colors.secondary}}>1</Text>
                   </View>

                  

                   <View>


                   </View>
                    <View
                    style = {styles.label}
                    >
                        <Text style={styles.text}>First Name</Text>
                    </View>


                    <View style = {styles.input}>   
                    
                    <TextInput 
                    onChangeText={handleChange('First Name')}
                    placeholder='First Name'
                    values={values.firstName}
                    textContentType='name'
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='default'              
                    style={styles.entry}
                    />        
                    
                    </View>

                   <Text  style = {{color: colors.red}} >{errors.firstName}</Text>




                   <View
                    style = {styles.label}
                    >
                        <Text style={styles.text}>Last Name</Text>
                    </View>


                    <View style = {styles.input}>   
                    
                    <TextInput 
                    onChangeText={handleChange('Last Name')}
                    placeholder='Last Name'
                    values={values.lastName}
                    textContentType='name'
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='default'               
                    style={styles.entry}
                    />        
                    
                    </View>

                   <Text  style = {{color: colors.red}} >{errors.lastName}</Text>




 





                   <View
                    style = {styles.label}
                    >
                        <Text style={styles.text}>Company/ Organisation</Text>
                    </View>


                    <View style = {styles.input}>   
                    
                    <TextInput 
                    onChangeText={handleChange('address')}
                    placeholder='Company Name'
                    values={values.company}
                    textContentType='organizationName'
                    autoCapitalize='none'
                    autoCorrect={true}
                    keyboardType='default'              
                    style={styles.entry}
                    />        
                    
                    </View>

                   <Text  style = {{color: colors.red}} >{errors.company}</Text>






                   <View
                    style = {styles.label}
                    >
                        <Text style={styles.text}>Address</Text>
                    </View>


                    <View style = {styles.input}>   
                    
                    <TextInput 
                    onChangeText={handleChange('address')}
                    placeholder='P.O.BOX 0000, DAR ES SALAAM'
                    values={values.address}
                    textContentType='addressCity'
                    autoCapitalize='characters'
                    autoCorrect={false}
                    keyboardType='default'              
                    style={styles.entry}
                    />        
                    
                    </View>

                   <Text  style = {{color: colors.red}} >{errors.address}</Text>

















                    
                  





                                 
                    <View>
                    <TouchableOpacity
                    style={styles.button} 
                    onPress = {() => navigation.navigate("SignUp2")}   
                    disabled={ values.firstName === '' || values.lastName === '' || values.company === '' || values.address === ''    }
                    >
                       <Text style={{fontSize: 19, fontFamily: 'serif', color: colors.black, }}>Continue</Text>

                    </TouchableOpacity>
                    </View>

                 
                
                 


                   
                    
                    <View style = {styles.footer} > 
                        <Text style = {StyleSheet.copyright}>@MPPS 2024</Text>
                    </View>        
                    
                </>
              ) }
            />
              
             
        </SafeAreaView>
    );
}









































const styles = StyleSheet.create({

    container: {
        jutifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        


    },
    
    
    Header: {
        height: 40,
        width: 40,
        backgroundColor: colors.primary,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
    },

    names : {
        flexDirection: 'row',

    },

    text: {
        fontFamily: 'serif',
        fontSize: 19,
        color: colors.black,
    },

  
       
   

    label: {
        jutifyContent: 'left',
        alignItems: 'left',
        marginTop: 12,
        width:300,
        

    },


    input: {
        alignItems: 'center',
        backgroundColor: colors.lightgray,
        borderRadius: 13,
        width: 300,
        height: 50,
        marginTop: 9,
        flexDirection: 'row',
      
    },

    entry: {
        color: colors.black,
        fontFamily: 'serif',
        flexDirection: 'row',
        width: '98%',
    },

    button: {
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: colors.secondary,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: colors.tertiary,
        width: 170,
        height: 50,
        marginTop: 11,
        
      },
   
   
   

    copyright: {
        fontSize: 15, 
        paddingTop: 1, 
        fontWeight: '600',
        color : colors.black
    },

    footer: {
        jutifyContent: 'center',
        alignItems: 'center',
        height: "3%",
        width: "100%",
        marginTop: 302,
        backgroundColor: colors.primary,
    },

    
})


export default SignUp;