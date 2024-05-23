import React, { useState }  from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, Pressable, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, Button } from 'react-native';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import { colors } from './colors';
import  DateTimePicker from 'react-native-date-picker';
import { Vignette } from 'phosphor-react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';


function RequestForm({navigation}){   


const handlePress = () => {
        Keyboard.dismiss();
};




const [date, setStart] = useState(new Date());
const [startDate, setStartDate] = useState('');
const [showPicker, setShowPicker] = useState(false);
const [colour, isToogled]  = useState(false)          

const toggleDatepicker = () => {
    setShowPicker(!showPicker);
};

const onChange = ({type}, selectedDate) => {
    if (type == "set") {
    const currentDate = selectedDate;
    setStart(currentDate);

            if(Platform.OS === 'android'){
                toggleDatepicker();
                setStartDate(currentDate.toDateString());
                            
            }
                
    } else {
         toggleDatepicker();
        }
};


const confirmIOSstartDate = () => {
    setStartDate(date.toDateString());
    toggleDatepicker();
}; 



    const [date1, setEnd] = useState(new Date());
    const [endDate, setEndDate] = useState('');
    const [showPicker1, setShowPicker1] = useState(false);


    const toggleDatepicker1 = () => {
        setShowPicker1(!showPicker1);
    };

    const onChange1 = ({type}, selectedDate) => {
        if (type == "set") {
            const currentDate1 = selectedDate;
            setEnd(currentDate1);

            if(Platform.OS === 'android'){
                toggleDatepicker1();
                setEndDate(currentDate1.toDateString());

            }
                
        } else {
                    toggleDatepicker1();
                }
    };



    const confirmIOSendDate = () => 
    {
                
        setEndDate(date1.toDateString());
        toggleDatepicker1();
    }; 








           
    const [expandedWoodType, setExpandedWoodType] = useState(null);
            
    const toggleWoodType = (woodType) => {
        if (expandedWoodType === woodType) {
            setExpandedWoodType(null); // Collapse if already expanded
        } else {
            setExpandedWoodType(woodType); // Expand if collapsed
        };
    }            

    const woodTypes = [
    { name: 'Hand wood' },
    { name: 'Soft wood' },
    { name: 'WoodPile' },
    { name: 'Wood Timber' },
    // Add other wood types here
    ]













    
    const [isPressed, setIsPressed] = useState(false);

    const onhandlePress = () => {
      setIsPressed(true);
      // You can perform any other action here when the button is pressed
    };
  
    const onhandleRelease = () => {
      setIsPressed(false);
      // You can perform any other action here when the button is released
    };









    return (
        <TouchableWithoutFeedback onPress={handlePress}>
        
            <SafeAreaView>
                <Formik
                 
                 onSubmit={(values) => console.log(values)}
                 onChange={() => console.log(values)}
                >

                    {({values, }) => (



                    <>
                    
                   
          
                    <View  style={styles.title}>
                        <Text  style={{color: colors.primary, fontSize: 33,  }}> Transit Application</Text>
                    </View>

                    <View style={{ marginLeft: 14,}}>
                        <Text style={{ color: colors.primary}}>Request form</Text>
                    </View>

                    <View style={{ marginLeft: 14, marginTop: 20}}>
                        <Text style={{ color: colors.black, fontSize: 20, fontWeight: '500'}}>Route Details</Text>
                    </View>



                    <View  style={styles.formDetails}>






                        <View style={styles.row}>



                                <View style={styles.column}>


                                
                                    <View style={styles.label_input}>
                                        <Text style={styles.label}>
                                            Start Date
                                        </Text>




                                    


                                    {showPicker && ( 
                                    <DateTimePicker 
                                        mode ='date'
                                        display='spinner'
                                        value={values.date}
                                        onChange = {onChange}
                                        style={{height: 120, marginTop: -10, width: 350}}
                                        minimumDate={new Date()}
                                        />
                                        )}

                                        

                                    {showPicker && Platform.OS === 'android' && ( 
                                    <View 
                                        style={{ flexDirection: 'row', justifyContent: 'space-around'}}
                                        >
                                            <TouchableOpacity style={[styles.cancel, styles.pickerButton]}
                                            onPress={toggleDatepicker}
                                            >
                                                    <Text  style={{fontWeight: '700'}}>
                                                        Cancel
                                                    </Text>
                                            </TouchableOpacity>


                                            <TouchableOpacity style={[styles.dateButton, styles.pickerButton]}
                                            onPress={confirmIOSstartDate}
                                            >
                                                    <Text style={{fontWeight: '700'}}>
                                                        Confirm
                                                    </Text>
                                            </TouchableOpacity>
                                        </View>     
                                        )}



                                    { !showPicker &&
                                    ( <Pressable
                                        onPress={toggleDatepicker}
                                        >
                                            <View style={styles.input}>
                                                <View style={{marginLeft: 9}}>
                                                    <MaterialCommunityIcons name='calendar' size={25}/>
                                                </View>
                                                
                                                <TextInput style={styles.TextInput}
                                                editable={false}
                                                onPressIn={toggleDatepicker}
                                                value={values.startDate}
                                                onChangeText={setStartDate}

                                                />                                         
                                            </View>
                                        </Pressable>)
                                        }

                                    </View>




                                    <View style={styles.label_input}>
                                        <Text style={styles.label}>
                                            End Date
                                        </Text>
                                        
                                        {showPicker1 && ( 
                                    <DateTimePicker 
                                        mode ='date'
                                        display='spinner'
                                        value={values.date1}
                                        onChange = {onChange1}
                                        style={{height: 120, marginTop: -10, width: 350}}
                                        minimumDate={new Date()}
                                        
                                        />
                                        )}





                                    {showPicker1 && Platform.OS === 'android' &&( 
                                    <View 
                                        style={{ flexDirection: 'row', justifyContent: 'space-around'}}
                                        >
                                            <TouchableOpacity style={[styles.cancel, styles.pickerButton]}
                                            onPress={toggleDatepicker1}
                                            >
                                                    <Text  style={{fontWeight: '700'}}>
                                                        Cancel
                                                    </Text>
                                            </TouchableOpacity>


                                            <TouchableOpacity style={[styles.dateButton, styles.pickerButton]}
                                            onPress={confirmIOSendDate}
                                            >
                                                    <Text style={{fontWeight: '700'}}>
                                                        Confirm
                                                    </Text>
                                            </TouchableOpacity>
                                        </View>     
                                        )}




                                    { !showPicker1 &&
                                    ( <Pressable
                                        onPress={toggleDatepicker1}
                                        >
                                            <View style={styles.input}>
                                                <View style={{marginLeft: 9}}>
                                                    <MaterialCommunityIcons name='calendar' size={25}/>
                                                </View>
                                                
                                                <TextInput style={styles.TextInput}
                                                editable={false}
                                                onPressIn={toggleDatepicker1}
                                                value={endDate}
                                                onChangeText={setEndDate}

                                                />                                         
                                            </View>
                                        </Pressable>)
                                        }
                                    </View>



                                    <View style={styles.label_input}>
                                        <Text style={styles.label}>
                                            Driver Name
                                        </Text>
                                        
                                        <View style={styles.input}>
                                            <View style={{marginLeft: 9}}>
                                                <MaterialCommunityIcons name='human' size={25}/>
                                            </View>
                                            
                                            <TextInput style={styles.TextInput}
                                            autoCapitalize='words'
                                            />                                         
                                        </View>
                                    </View>
                                </View>








                                <View style={styles.column1}>



                                    <View style={styles.label_input}>
                                        <Text style={styles.label}>
                                            Starting point
                                        </Text>
                                        
                                        <View style={styles.input}>
                                            <View style={{marginLeft: 9}}>
                                                <MaterialCommunityIcons name='map-marker' size={25}/>
                                            </View>
                                            
                                            <TextInput style={styles.TextInput}
                                            placeholder='Dar Es Salaam'
                                            autoCapitalize='words'
                                            />                                         
                                        </View>
                                    </View>



                                    <View style={styles.label_input}>
                                        <Text style={styles.label}>
                                            Ending point
                                        </Text>
                                        
                                        <View style={styles.input}>
                                            <View style={{marginLeft: 9}}>
                                                <MaterialCommunityIcons name='map-marker' size={25}/>
                                            </View>
                                            
                                            <TextInput style={styles.TextInput}
                                            placeholder='Arusha'
                                            autoCapitalize='words'
                                            
                                            />                                         
                                        </View>
                                    </View>


                                    



                                    <View style={styles.label_input}>
                                        <Text style={styles.label}>
                                            Vehicle Number
                                        </Text>
                                        
                                        <View style={styles.input}>
                                            <View style={{marginLeft: 9}}>
                                                <MaterialCommunityIcons name='truck' size={25}/>
                                            </View>
                                            
                                            <TextInput style={styles.TextInput}
                                            autoCapitalize='characters'
                                            placeholder='T000 ABC'
                                            />                                         
                                        </View>
                                    </View>
                                </View>


                        </View>





                        <View style={{marginLeft: 16, marginTop: 10}}>
                            <Text style={{ color: colors.black, fontSize: 20, fontWeight: '500', }}>
                                Cargo Type
                            </Text>
                        </View>

                            

                            <ScrollView>


                                
                                    <View style={styles.cargo}> 

                                        <View  style={{flexDirection:'row'}}>


                                            <View  style={styles.cargo_column}>

                                                <TouchableOpacity 
                                                    style={styles.container_label} 
                                                    onPress={() => toggleWoodType('HardWood')}
                                                    >
                                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                        <Text style={styles.cargo_label}>HardWood</Text>
                                                        <MaterialCommunityIcons name='plus' size={20}  style={{paddingLeft: 47}}/>
                                                    </View>
                                                </TouchableOpacity>
                                            

                                                <TouchableOpacity style={[styles.container_label, styles.column_spacing]}  onPress={() => toggleWoodType('WoodPile')}>
                                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                        <Text style={styles.cargo_label}>WoodPile</Text>
                                                        <MaterialCommunityIcons name='plus' size={20} style={{paddingLeft: 57}} />
                                                    </View>
                                                </TouchableOpacity>
                                            
                                            </View>


                                            <View  style={styles.cargo_column1}>

                                                <TouchableOpacity style={styles.container_label} onPress={() => toggleWoodType('SoftWood')}>
                                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                        <Text style={styles.cargo_label}>SoftWood</Text>
                                                        <MaterialCommunityIcons name='plus' size={20} style={{paddingLeft: 51}} />
                                                    </View>
                                                </TouchableOpacity>
                                            

                                                <TouchableOpacity style={[styles.container_label, styles.column_spacing]}  onPress={() => toggleWoodType('WoodTimber')}>
                                                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                        <Text style={styles.cargo_label}>WoodTimber</Text>
                                                        <MaterialCommunityIcons name='plus' size={20} style={{paddingLeft: 29}} />
                                                    </View>
                                                </TouchableOpacity>
                                            

                                            </View>
                                        </View>








                                        <View style={styles.expandable_view}>

                                        {expandedWoodType === 'HardWood' && (
                                            <View  >



                                                <View style={{flexDirection: 'row', width: 300 }}>

                                                    <View  style={{flexDirection: 'column', marginLeft: 15, marginTop: 2 }}>
                                                        <View>
                                                            <Text style={styles.expandable_txt_label}>
                                                                Specie
                                                            </Text>

                                                            <TextInput placeholder="Mninga" style={styles.expandable_txtInput} />
                                                        </View>

                                                        <View style={{marginTop: 5}}>
                                                            <Text style={styles.expandable_txt_label}>
                                                                Width
                                                            </Text>

                                                            <TextInput placeholder="00.00"  style={styles.expandable_txtInput} keyboardType='numeric' keyboardAppearance='default' />
                                                        </View>
                                                    </View>







                                                    <View  style={{flexDirection: 'column', marginLeft: 60, marginTop: 2}}>
                                                        <View>
                                                            <Text style={styles.expandable_txt_label}>
                                                                Length
                                                            </Text>

                                                            <TextInput placeholder="00.00" style={styles.expandable_txtInput} keyboardType='numeric' keyboardAppearance='default'/>
                                                        </View>

                                                        <View style={{marginTop: 5}}>
                                                            <Text style={styles.expandable_txt_label}>
                                                                Quantity
                                                            </Text>

                                                            <TextInput placeholder="0" style={styles.expandable_txtInput} keyboardType='numeric' keyboardAppearance='default' />
                                                        </View>
                                                    </View>




                                                </View>

                                                

                                            </View>
                                                )}




                                        {expandedWoodType === 'WoodPile' && (
                                                    <View  >



                                                    <View style={{flexDirection: 'row', width: 300, justifyContent: 'center', alignItems: 'center' }}>
                        
                                                        <View  style={{flexDirection: 'column', marginBottom: 52, marginRight: 30 }}>
                                                            <View>
                                                                <Text style={styles.expandable_txt_label}>
                                                                    Specie
                                                                </Text>
                        
                                                                <TextInput placeholder="Specie" style={styles.expandable_txtInput} />
                                                            </View>
                        
                                                        
                                                        </View>
                        
                        
                        
                        
                        
                        
                        
                                                        <View  style={{flexDirection: 'column', marginLeft: 20, marginBottom: 53}}>
                                                                
                                                            <View style={{marginTop: 5,}}>
                                                                <Text style={styles.expandable_txt_label}>
                                                                    Quantity
                                                                </Text>
                        
                                                                <TextInput placeholder="0" style={styles.expandable_txtInput} keyboardType='numeric' keyboardAppearance='default' />
                                                            </View>
                                                        </View>
                        
                        
                        
                        
                                                    </View>
                        
                                                    
                        
                                                </View>
                                                )}




                                        {expandedWoodType === 'SoftWood' && (
                                                    <View  >



                                                    <View style={{flexDirection: 'row', width: 300 }}>
                        
                                                        <View  style={{flexDirection: 'column', marginLeft: 15, marginTop: 2 }}>
                                                            <View>
                                                                <Text style={styles.expandable_txt_label}>
                                                                    Specie
                                                                </Text>
                        
                                                                <TextInput placeholder="Mninga" style={styles.expandable_txtInput} />
                                                            </View>
                        
                                                            <View style={{marginTop: 5}}>
                                                                <Text style={styles.expandable_txt_label}>
                                                                    Width
                                                                </Text>
                        
                                                                <TextInput placeholder="00.00"  style={styles.expandable_txtInput} keyboardType='numeric' keyboardAppearance='default' />
                                                            </View>
                                                        </View>
                        
                        
                        
                        
                        
                        
                        
                                                        <View  style={{flexDirection: 'column', marginLeft: 60, marginTop: 2}}>
                                                            <View>
                                                                <Text style={styles.expandable_txt_label}>
                                                                    Length
                                                                </Text>
                        
                                                                <TextInput placeholder="00.00" style={styles.expandable_txtInput} keyboardType='numeric' keyboardAppearance='default'/>
                                                            </View>
                        
                                                            <View style={{marginTop: 5}}>
                                                                <Text style={styles.expandable_txt_label}>
                                                                    Quantity
                                                                </Text>
                        
                                                                <TextInput placeholder="0" style={styles.expandable_txtInput} keyboardType='numeric' keyboardAppearance='default' />
                                                            </View>
                                                        </View>
                        
                        
                        
                        
                                                    </View>
                        
                                                    
                        
                                                </View>
                                                )}



                                        {expandedWoodType === 'WoodTimber' && (
                                                    <View  >



                                                    <View style={{flexDirection: 'row', width: 300 }}>
                        
                                                        <View  style={{flexDirection: 'column', marginLeft: 15, marginTop: 2 }}>
                                                            <View>
                                                                <Text style={styles.expandable_txt_label}>
                                                                    Specie
                                                                </Text>
                        
                                                                <TextInput placeholder="Muarobaini" style={styles.expandable_txtInput} />
                                                            </View>
                        
                                                            <View style={{marginTop: 5}}>
                                                                <Text style={styles.expandable_txt_label}>
                                                                    Width
                                                                </Text>
                        
                                                                <TextInput placeholder="00.00"  style={styles.expandable_txtInput} keyboardType='numeric' keyboardAppearance='default' />
                                                            </View>

                                                            <View style={{marginTop: 5}}>
                                                                <Text style={styles.expandable_txt_label}>
                                                                    Breadth
                                                                </Text>
                        
                                                                <TextInput placeholder="00.00"  style={styles.expandable_txtInput} keyboardType='numeric' keyboardAppearance='default' />
                                                            </View>
                                                        </View>
                        
                        
                        
                        
                        
                        
                        
                                                        <View  style={{flexDirection: 'column', marginLeft: 60, marginTop: 9}}>
                                                            <View>
                                                                <Text style={styles.expandable_txt_label}>
                                                                    Length
                                                                </Text>
                        
                                                                <TextInput placeholder="00.00" style={styles.expandable_txtInput} keyboardType='numeric' keyboardAppearance='default' />
                                                            </View>
                        
                                                            <View style={{marginTop: 5}}>
                                                                <Text style={styles.expandable_txt_label}>
                                                                    Quantity
                                                                </Text>
                        
                                                                <TextInput placeholder="0" style={styles.expandable_txtInput} keyboardType='numeric' keyboardAppearance='default' />
                                                            </View>
                                                        </View>
                        
                        
                        
                        
                                                    </View>
                        
                                                    
                        
                                                </View>
                                            )}



                                    </View>




                        <View>


                    </View>

                </View>
            </ScrollView>

             
              
                <TouchableOpacity style={styles.save}
                onPress={() => navigation.navigate("Transit")}
                >
                    <Text style={{color: colors.white}}>Save</Text>
                </TouchableOpacity>

                <View style={{marginTop: 4}}>
                   
                </View>        
                
                    




                  </View>
                    </>
                    )

                    }

                </Formik>
            
            </SafeAreaView>
        </TouchableWithoutFeedback>  

    );
}





    const styles = StyleSheet.create
    ({
        formDetails: {
            backgroundColor: colors.lightgray,
            width: 392,
            
            marginLeft: 12,
            marginTop: 8,
            borderRadius: 30,
        },

        row: {
            flexDirection: 'row'
        },

        column: {
            flexDirection: 'column',
        }, 

        column1: {
            flexDirection: 'column',
            marginLeft: 23,
        },

        label_input: {
            marginLeft: 15,
            marginTop: 15,
        },
        
        label: {
            marginLeft: 6,
            fontWeight: '600'
        },

        input: {
            flexDirection:'row', 
            backgroundColor: colors.white, 
            width: 165,
            height: 30,
            marginTop: 4, 
            borderRadius:30, 
            alignItems: 'center',
                                
        },

        TextInput: {
            width: 129,
        },

        cargo: {
            width: 370,
            backgroundColor: colors.white,
            marginLeft: 11,
            marginTop: 4,
            borderRadius: 20
        },

        dateButton: {
            height:50,
            justifyContent:'center',
            alignItems:'center',
            borderRadius: 50,
            marginTop: 10,
            marginBottom: 15,
            backgroundColor: colors.blue
        },

        pickerButton: {
            paddingHorizontal: 20, 
        },

        cancel: {
            height:50,
            justifyContent:'center',
            alignItems:'center',
            borderRadius: 50,
            marginTop: 10,
            marginBottom: 15,
            backgroundColor: colors.red
        },

        cargo_label: { 
            fontSize: 15,
            paddingLeft: 8,
             
        },

        cargo_column: {
            height: 40,
            paddingLeft:16,
            paddingTop:9,
            
        },

        cargo_column1: {
            height: 40,
            paddingLeft: 13,
            paddingTop:9,
        },

        column_spacing: {
            marginTop : 9,
        },

        container_label: {
            height: 29,
            width: 164,
            backgroundColor:  colors.secondary,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent:'center'
        },

        expandable_view: {
            marginTop: 60, 
            width: 340, 
            marginLeft: 16, 
            borderRadius: 30, 
            justifyContent: 'center', 
            alignItems: 'center',
        },

        expandable_txt_label: {
            fontSize: 18,

        },

        expandable_txtInput: {
            width: 110,
            marginTop: 5,
            height: 30,
            backgroundColor: colors.lightgray,
            borderRadius: 30
        },

        save: {
            height: 40, 
            width: 80, 
            marginLeft: 300, 
            marginTop: 17, 
            backgroundColor: colors.primary, 
            borderRadius: 30, 
            justifyContent: 'center', 
            alignItems: 'center',
        },

       

    })

export default RequestForm;