import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Pressable, Platform, Button } from 'react-native';
import React, {useState, useEffect} from 'react';
import { fonts } from '../components/Font';
import { colors } from '../components/colors';
import { Formik } from 'formik';
import * as Yup from 'yup';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import  DateTimePicker from '@react-native-community/datetimepicker';





export default function TransitForm({navigation}) {
  const handlePress = () => {
    Keyboard.dismiss();
  };


  const [date, setStart] = useState(new Date());
  const [startDate, setStartDate] = useState('');
  const [showPicker, setShowPicker] = useState(false);


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



    const confirmStartDate = () => {
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





    const confirmEndDate = () => 
      {
                  
          setEndDate(date1.toDateString());
          toggleDatepicker1();
      }; 


      const [expandedWoodType, setExpandedWoodType] = useState(null);


      const [isPressed, setIsPressed] = useState(false);



  //clearing all the data from the transit form
  const [clear, setClear] = useState(null);


  //creating categories for button toogle
  const woodType = [
    { name: 'Hard Wood' },
    { name: 'Soft Wood' },
    { name: 'Wood Pile' },
    { name: 'Wood Timber' },
  ];
  
  
  
  //set the state initially to false of the categories before clicked
  const [isClicked, setClicked] = useState(false)

  //setting the isClicked variable to true when the specific cargoType is selected
  const toggleWoodType = (woodType) => {
    if (expandedWoodType === woodType) {
        setExpandedWoodType(null); // Collapse if already expanded
    } else {
        setExpandedWoodType(woodType); // Expand if collapsed
    };







}     

  // submitting the details
  const submit = async(values) => {
    const {startPoint, endPoint, startDate, endDate, driverName, vehicleNumber} = values;
   try {
    
    console.log(values)
    
   } catch (error) {
    let errorMessage = 'An error occurred. Please try again.';
  if (error.response) {
    errorMessage = 'Try again';
  }
  Alert.alert("Fill once more", errorMessage);
   }
  };



  //creating a validation schema
  const validationSchema = Yup.object().shape({
    startPoint: Yup.string().required("start region required!!!").nonNullable(true),
    endPoint: Yup.string().required("end region required!!!").nonNullable(true),
    startDate: Yup.string().required("start date required!!!").nonNullable(true),
    endDate:  Yup.string().required("end date required!!!").nonNullable(true),
    driverName: Yup.string().required("drive name required!!!").nonNullable(true),
    vehicleNumber: Yup.string().required("plate number required!!!").nonNullable(true),
    specie: Yup.string().required().nonNullable(true),
    length: Yup.string().required().nonNullable(true),
    width: Yup.string().required().nonNullable(true),
    quantity: Yup.string().required().nonNullable(true),  
  });


  





  return (
    <SafeAreaView style={{flex:1} }>

      <View  style={{flex:1,}}>
        
                <View  style={{ }}
                >

                    <View style={{flexDirection: 'row'}}>

                        <View>
                          <TouchableOpacity onPress={
                            () => navigation.navigate("Transit")
                          }>
                              <MaterialCommunityIcons name="chevron-left" size={45}  color={colors.black}
                              />                      
                          </TouchableOpacity>
                        </View>


                        <View style={{width: "60%", marginLeft:15}}>
                            <Text style={{fontSize: 20, fontFamily: fonts.serif, fontWeight: "800", color: colors.black,}}>Transit Application </Text>
                            <Text style={{fontSize: 16, fontFamily: fonts.serif, color: colors.black}}>Request form</Text>
                        </View>

                    </View>


                    <View style={{marginTop: 35, marginLeft: 5}}> 
                        <Text style={{fontSize: 18, fontFamily: fonts.serif, color: colors.black, fontWeight: "800"}}>
                            Route Details
                        </Text>
                    </View>
                </View>

      </View>


      <View style={{flex:7, alignItems: "center",}}> 

              
                
                    <View style={{backgroundColor: colors.lightgray, width: "95.3%",  height: "90%",  borderRadius: 20,}}>
                      <Formik 
                      initialValues={{startPoint:" ", endPoint:" ", startDate:" ", endDate:" ", driverName:" ", vehicleNumber:" ", specie:" ", length: " ", width: " ", quantity: " " }}
                      validationSchema={validationSchema}
                      onSubmit={(values) => console.log(values)}
                      children= {({ values, handleSubmit, handleChange, handleReset}) => (
                        <ScrollView style={styles.miniContainers}> 
                        
                          {/*REGION SECTION*/}
                          <View style={styles.inputs}>
                                <View style={styles.item}>
                                  <View >
                                    <Text style={styles.label}>
                                      Start Region
                                    </Text>
                                  </View>
     
                                  <View style={styles.input}>
                                         <View style={styles.icons}>
                                            <MaterialCommunityIcons name="map-marker-outline" size={35} color={colors.black}/>
                                        
                                         
                                            <TextInput 
                                            style={styles.value} 
                                            value={values.startPoint}
                                            onChange={handleChange("startPoint")}
                                            
                                            />
                                         </View>

                                  </View>
                                </View>

                                <View style={styles.item}>
                                  <View >
                                    <Text style={styles.label}>
                                      End Region
                                    </Text>
                                  </View>

                                  <View style={styles.input}>
                                         <View style={styles.icons}>
                                            <MaterialCommunityIcons name="map-marker-outline" size={35} color={colors.black}/>
                                        
                                         
                                            <TextInput 
                                            style={styles.value} 
                                            value={values.endPoint}
                                            onChange={handleChange("endPoint")}
                                            
                                            />
                                         </View>

                                  </View>
                                </View>


                                <View>
                                </View>

                          </View>


                          {/*DATE SECTION*/}

                          {/*STARTING DATE*/}
                          <View style={styles.inputs}>
                                <View style={styles.item}>
                                  <View >
                                    <Text style={styles.label}>
                                      Start Date
                                    </Text>
                                  </View>

                                  {showPicker && ( 
                                    <DateTimePicker 
                                        mode ='date'
                                        display='spinner'
                                        value={date}
                                        onChange = {onChange}
                                        style={{height: 120, marginTop: -10, width: 350}}
                                        minimumDate={new Date()}
                                        />
                                        )}

                                 
                                    { !showPicker &&
                                    ( <Pressable
                                        onPress={toggleDatepicker}
                                        >
                                            <View style={styles.input}>
                                                <View style={styles.icons}>
                                                    <MaterialCommunityIcons name='calendar' size={25}  color={colors.black}/>
                                                   
                                                    <TextInput style={styles.value}
                                                    editable={false}
                                                    onPressIn={toggleDatepicker}
                                                    value={values.startDate}
                                                    onChangeText={setStartDate}

                                                    />                                         
                                                </View>
                                                
                                            </View>
                                        </Pressable>)
                                        }


                                 
                                </View>


                                {/*ENDING DATE*/}
                                <View style={styles.item}>
                                  <View >
                                    <Text style={styles.label}>
                                      End Date
                                    </Text>
                                  </View>

                                  {showPicker1 && ( 
                                    <DateTimePicker 
                                        mode ='date'
                                        display='spinner'
                                        value={date1}
                                        onChange = {onChange1}
                                        style={{height: 120, marginTop: -10, width: 350}}
                                        minimumDate={new Date()}
                                        
                                        />
                                        )}



                                    



                                    { !showPicker1 &&
                                    ( <Pressable
                                        onPress={toggleDatepicker1}
                                        >
                                            <View style={styles.input}>
                                                <View style={styles.icons}>
                                                    <MaterialCommunityIcons name='calendar' size={25}  color={colors.black}/>
                                                
                                                    <TextInput style={styles.value}
                                                    editable={false}
                                                    onPressIn={toggleDatepicker1}
                                                    value={values.endDate}
                                                    onChangeText={setEndDate}

                                                    />                                         
                                                </View>
                                                
                                            </View>
                                        </Pressable>)
                                        }

                                  
                                </View>


                               

                          </View>

                          {/*DRIVER NAME AND VEHICLE PLATE NUMBER*/}

                          <View style={styles.inputs}>
                                <View style={styles.item}>
                                  <View >
                                    <Text style={styles.label}>
                                      Driver name
                                    </Text>
                                  </View>

                                  <View style={styles.input}>
                                         <View style={styles.icons}>
                                            <MaterialCommunityIcons name="card-account-details-outline" size={35} color={colors.black}/>
                                        
                                         
                                            <TextInput 
                                            style={styles.value} 
                                            value={values.driverName} 
                                            onChange={handleChange("driverName")}
                                            autoCapitalize='sentences'
                                            keyboardType='default'
                                            keyboardAppearance='default'
                                            />
                                         </View>

                                  </View>
                                </View>

                                <View style={styles.item}>
                                  <View>
                                    <Text style={styles.label}>
                                      Vehicle number
                                    </Text>
                                  </View>

                                  <View style={styles.input}>
                                         <View style={styles.icons}>
                                            <MaterialCommunityIcons name="truck" size={35} color={colors.black}/>
                                        
                                         
                                            <TextInput 
                                            style={styles.value}
                                            value={values.vehicleNumber}
                                            placeholder='T*** AAA'
                                            autoCapitalize='words'
                                            onChange={handleChange("vehicleNumber")}
                                            />
                                         </View>

                                  </View>
                                </View>


                                <View>
                                </View>

                          </View>



                          {/*CARGO CATEGORY SECTION*/}
                          <View style={{height: "4%"}}> 
                          <Text style={styles.label}>Cargo Type</Text>
                          </View>

                          {/*CATEGORIES*/}
                          <View style={styles.category}>
                            <View style={{flexDirection: "column", height: "30%", borderBottomWidth: 2, borderColor: colors.black, borderStyle: "dashed"}}>
                              <View style={{flexDirection: "row", height: "50%", alignItems: "center", justifyContent: "space-around"}}>  
                                  <View style={styles.cat}>
                                    <TouchableOpacity style={[styles.contain,{ justifyContent: "space-around"}]} onPress={() => toggleWoodType('Hard Wood')}>
                                      <Text style={styles.catText}>Hard wood</Text>
                                      <MaterialCommunityIcons name="plus" size={30} color={colors.black}/>
                                       
                                    </TouchableOpacity>

                                  </View>

                                  <View style={styles.cat}>
                                    <TouchableOpacity style={[styles.contain,{ justifyContent: "space-around"}]} onPress={() => toggleWoodType('Soft Wood')}>
                                      <Text style={styles.catText}>Soft Wood</Text>
                                      <MaterialCommunityIcons name="plus" size={30} color={colors.black}/>
                                    </TouchableOpacity>

                                  </View>

                              </View>


                              <View style={{flexDirection: "row", height: "50%", alignItems: "center", justifyContent: "space-around"}}
                              >

                                  <View style={styles.cat}>
                                    <TouchableOpacity style={[styles.contain,{ justifyContent: "space-around"}]} onPress={() => toggleWoodType('Wood Pile')}>
                                      <Text style={styles.catText}>Wood pile</Text>
                                      <MaterialCommunityIcons name="plus" size={30} color={colors.black}/>
                                    </TouchableOpacity>

                                  </View>

                                  <View style={styles.cat}>
                                    <TouchableOpacity style={[styles.contain,{ justifyContent: "space-around"}]} onPress={() => toggleWoodType('Wood Timber')}>
                                      <View>
                                        <Text style={styles.catText}>Wood timber</Text>
                                      </View>

                                      <View>
                                        <MaterialCommunityIcons name="plus" size={30} color={colors.black}/>
                                      </View>
                                    </TouchableOpacity>

                                  </View>

                              </View>

                            </View>

                            

                            {/*INVISIBLE SECTION*/}
                             {/*SELECTED FIELDS*/}
                            
                            <View style={styles.expandable_view}>

{expandedWoodType === 'Hard Wood' && (
    <View  >



        <View style={{flexDirection: 'row', width: 300 }}>

            <View  style={{flexDirection: 'column', marginLeft: 15, marginTop: 2 }}>
                <View>
                    <Text style={styles.expandable_txt_label}>
                        Specie
                    </Text>

                    <TextInput placeholder="Mninga" style={styles.expandable_txtInput}value={values.specie} />
                </View>

                <View style={{marginTop: 5}}>
                    <Text style={styles.expandable_txt_label}>
                        Width
                    </Text>

                    <TextInput placeholder="00.00"  style={styles.expandable_txtInput} keyboardType='numeric' keyboardAppearance='default' value={values.width}/>
                </View>
            </View>







            <View  style={{flexDirection: 'column', marginLeft: 60, marginTop: 2}}>
                <View>
                    <Text style={styles.expandable_txt_label}>
                        Length
                    </Text>

                    <TextInput placeholder="00.00" style={styles.expandable_txtInput} keyboardType='numeric' keyboardAppearance='default' value={values.length}/>
                </View>

                <View style={{marginTop: 5}}>
                    <Text style={styles.expandable_txt_label}>
                        Quantity
                    </Text>

                    <TextInput placeholder="0" style={styles.expandable_txtInput} keyboardType='numeric' keyboardAppearance='default' value={values.quantity} />
                </View>
            </View>




        </View>

        

    </View>
        )}




{expandedWoodType === 'Wood Pile' && (
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




{expandedWoodType === 'Soft Wood' && (
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



{expandedWoodType === 'Wood Timber' && (
            <View  >



            <View style={{flexDirection: 'row', width: "100%", }}>

                <View  style={{flexDirection: 'column', marginLeft: 15, marginTop: 2,  }}>
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


                            <View style={{width: "100%", height: "20%", flexDirection: "row", justifyContent: "space-around", marginTop: 5}}>

                              <TouchableOpacity style={{width: "20%", height: "30%", backgroundColor: colors.palegray, alignItems:"center", borderRadius: 20}} 
                              onPress={() => {handleReset}}
                              >
                                <Text style={{fontSize: 16, color: colors.black, fontWeight: "600"}} onPress={handleReset}> 
                                  CLEAR
                                </Text>
                              </TouchableOpacity>

                              <TouchableOpacity style={{width: "20%", height: "30%", backgroundColor: colors.primary,  alignItems:"center", borderRadius: 20}} onPress={handleSubmit}>
                                <Text style={{fontSize: 16, color: colors.white, fontWeight: "600"}}>
                                   SUBMIT
                                </Text>
                              </TouchableOpacity>
                            </View>








                          </View>



                         

                          

                        </ScrollView>

                      )
                      }
                      
                      
                      
                      />

                      

                         
                    </View>
             
      </View>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  miniContainers: {
      height: "90%",
      widht: "100%", 
      overflow: "hidden",
      flexDirection: "column",
      backgroundColor: colors.palegray,
      borderRadius: 20,
  },

  inputs: {
      flexDirection: "row",
      height: 80,
  },
  item: {
    height: "100%",
    width: "50%",
    //backgroundColor: colors.palegray,
  },

  label: {
    fontFamily: fonts.serif, 
    color: colors.black, 
    fontSize: 21,
    fontWeight: "800"
  },

  input: {
    backgroundColor: colors.white,
    width:"97%",
    borderRadius: 30
  },
  
  icons: {
    
    flexDirection: "row",
    alignItems: "center"
  },

  value: {
   // backgroundColor:colors.blue,
    width: "80%"
  },

  category: {
    height: "59%",
    width: "94%",
    backgroundColor: colors.white,
    marginLeft: 13,
    marginTop: 7,
    borderRadius: 20,
   
    
  },

  cat: {
    backgroundColor: colors.secondary,
    width: "45%",
    height: "59%",
    borderRadius: 40,
    overflow: "hidden"
  },

  contain: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",

  },  

  catText: {
    fontFamily: fonts.serif,
    fontSize: 19,
    color: colors.black,
    fontWeight:"600",
    

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
    marginTop: 4, 
    width: "90%", 
    marginLeft: 16, 
    borderRadius: 40, 
    justifyContent: 'center', 
    alignItems: 'center',
    //backgroundColor: colors.red,
},

expandable_txt_label: {
    fontSize: 22,
    color: colors.black,


},

expandable_txtInput: {
    
    width: 120,
    marginTop: 5,
    height: 40,
    backgroundColor: colors.palegray,
    borderRadius: 30,
    alignItems:"center",
    justifyContent:"center",
},




})