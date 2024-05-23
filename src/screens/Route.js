import React ,{ useState}from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';





export default function App() {

   const [drop, setDrop] = useState(false);

   toogleDrop = () => {

   };


   const INITIAL_REGION = {
    latitude: -6.8165,
    longitude: 39.2894,
    latitudeDelta: 2,
    longitudeDelta: 2, 
   };


  return (
    <View style={styles.container}>
      <MapView style={styles.map}
       //initialRegion={INITIAL_REGION} 
       showsUserLocation
       showsMyLocationButton
       showsCompass
       //provider='google'
      >
      
      
      </ MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});     