import React, {useEffect} from 'react';
import {Alert, SafeAreaView, View, TextInput, Text, Button, FlatList, Image, StyleSheet, TouchableOpacity, Platform, ScrollView,} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {MaterialCommunityIcons } from 'react-native-vector-icons';
import { colors } from '../components/colors';







function SignUp({navigation}) {

      
       
        // HANDLE LOGIN
        const handleSignUp = async (values) => {
          // try {
          //   const response = await axios.post('https://your-api-endpoint/login', {
          //     email,
          //     password,
          //   });
      
          //   if (response.data.token) {
          //     // Store the token in AsyncStorage for future use
          //     await AsyncStorage.setItem('authToken', response.data.token);
          //     navigation.navigate('Main'); // Navigate to the home screen
          //   } else {
          //     setError('Invalid email or password');
          //   }
          // } catch (error) {
          //   console.error(error);
          //   setError('An error occurred. Please try again later.');
          // }
      
         const {firstName, lastName, address,  email, officerID,  phoneNumber, password, confirm } = values;
      
      
        
        }
      
      











    //VALIDATION SCHEMA
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().label("firstName").nonNullable(),
        lastName: Yup.string().label("lastName").nonNullable(),
        officerID: Yup.string().required().label().nonNullable(),
        address: Yup.string().required().label("address").nonNullable(),
        email: Yup.string().required().email().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format').label("Email").nonNullable(),
        phoneNumber: Yup.string()
        .min(9, "Phone number must be atleast 8 numbers!!!")
        .required()
        .nonNullable(),
        password:  Yup.string().required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(/[a-z]/, ' must contain atleast one lowercase letter')
        .matches(/[A-Z]/, ' must contain atleast one uppercase letter')
        .matches(/\d/, ' must contain atleast one digit')
        .matches(/[!@#$%^&*()_+[\]{};':"\\|,.<>/?-]/, 'Password must contain a special character')
        .nonNullable(),
        confirm: Yup.string()
        .min(8, 'Confirm Password must be atleast 8 characters long')
        .oneOf([Yup.ref('password')] , "Your passwords do not match")
        .required('Confirm password is required')
        .label("Confirm Password")
        .nonNullable(),
       
    });

    const handlePress = () => {
        Keyboard.dismiss();
    };

    return (
        <SafeAreaView       
      
        style = {styles.container}
        >
 
       
         <View style={styles.container1}>

            <Formik
            initialValues={{  firstName: '', lastName: '', address:'',  email: '', officerID: '',  phoneNumber:'', password:'', confirm: '' }}
            //onSubmit={handleSignUp}
            validationSchema={validationSchema}

            children =  {({ handleChange, handleSubmit, errors, values }) => (
                <>
            
                   

                   <View style={styles.Header}>
                    <Text style={{fontSize: 19, color: colors.secondary}}>1</Text>
                   </View>

                  <ScrollView style={{ width:'80%', }}>



                    <View style = {styles.input}>   
                    
                    <TextInput 
                    onChangeText={handleChange('First Name')}
                    placeholder='First Name'
                    values={values.firstName}
                    textContentType='name'
                    autoCapitalize='sentences'
                    autoCorrect={false}
                    keyboardType='default'              
                    style={styles.entry}
                    />        
                    
                    </View>

                   <Text  style = {{color: colors.red}} >{errors.firstName}</Text>




                 

                    <View style = {styles.input}>   
                    
                    <TextInput 
                    onChangeText={handleChange('Last Name')}
                    placeholder='Last Name'
                    values={values.lastName}
                    textContentType='name'
                    autoCapitalize='sentences'
                    autoCorrect={false}
                    keyboardType='default'               
                    style={styles.entry}
                    />        
                    
                    </View>

                   <Text  style = {{color: colors.red}} >{errors.lastName}</Text>




 





                  

                    <View style = {styles.input}>   
                    
                    <TextInput 
                    onChangeText={handleChange('officerID')}
                    placeholder='TFS-Officer ID'
                    values={values.officerID}
                    autoCorrect={true}
                    keyboardType='number-pad'              
                    style={styles.entry}
                    />        
                    
                    </View>

                   <Text  style = {{color: colors.red}} >{errors.officerID}</Text>






                 


                    <View style = {styles.input}>   
                    
                    <TextInput 
                    onChangeText={handleChange('address')}
                    placeholder='P.O.BOX 0000, DAR ES SALAAM'
                    values={values.address}
                    textContentType='addressCity'
                    autoCapitalize='sentences'
                    autoCorrect={false}
                    keyboardType='default'              
                    style={styles.entry}
                    />        
                    
                    </View>

                   <Text  style = {{color: colors.red}} >{errors.address}</Text>

                   







                 


                    <View style = {styles.input}>   
                    
                   

                    <TextInput 
                    icon = 'mail'
                    onChangeText={handleChange('email')}
                    placeholder='Email'
                    values={values.email}
                    textContentType='emailAddress'
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'               
                    style={styles.entry}
                    />        
                    
                    </View>

                   <Text  style = {{color: colors.red}} >{errors.email}</Text>
                   
                









                   


                    <View 
                    style = {styles.input}
                    >          
                    <TextInputMask 
                    onChangeText={handleChange('phoneNumber')}
                    type={'custom'}
                    options={{
                            mask: '+255 *** *** ***'
                            }}
                    placeholder='+255 *** *** ***'
                    textContentType='telephoneNumber'
                    keyboardType='phone-pad'
                    autoCapitalize='none'
                    autoCorrect={false}
                    values={values.phoneNumber}
                    style={styles.entry}
                    />
                    </View>

                    <Text  style = {{color: 'red'}} >{errors.phoneNumber}</Text>

                   

                    <View                    
                    style = {styles.input}
                    >
                   
                    <TextInput 
                    onChangeText={handleChange('password')}
                    placeholder='Password'
                    secureTextEntry
                    textContentType='password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    values={values.password}
                    style={styles.entry}
                    />
                    </View>

                    <Text  style = {{color: 'red'}} >{errors.password}</Text>








                    <View                    
                    style = {styles.input}
                    >
                   


                    <TextInput 
                    onChangeText={handleChange('confirm')}
                    placeholder=' Confirm Password'
                    secureTextEntry
                    textContentType='password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    values={values.confirm}
                    style={styles.entry}
                    />
                    </View>
                  
                    <Text style = {{color: colors.red}}>{errors.confirm}</Text>


                   















                    
                  


                  </ScrollView>

                   



                                 
                    
                    <TouchableOpacity
                    style={styles.button}
                    onPress = {() => navigation.navigate("FinishedReg")}    
                   // disabled={ values.firstName === '' || values.lastName === '' || values.officerID === '' || values.address === '' || values.email === '' || values.phoneNumber === '' || values.password === '' || values.confirm === '' }
                    
                    >
                       <Text style={{fontSize: 19, fontFamily: 'serif', color: colors.black, }}>SignUp</Text>

                    </TouchableOpacity>
                    

                 
                
                 


                   
                    
                        
                    
                </>
              ) }
            />

         </View>
              
            <View style = {styles.footer} > 
                <Text style = {StyleSheet.copyright}>@MPPS 2024</Text>
            </View>   
        </SafeAreaView>
    );
}









































const styles = StyleSheet.create({

    container: {       
        flex: 1,
    },

    container1: {
        jutifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        flex: 36,
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
        marginTop: 5,
        
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
        backgroundColor: colors.primary,
        flex:1,
    },

    
})


export default SignUp;