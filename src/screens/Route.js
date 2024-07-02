import React ,{ useState}from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { StyleSheet, View } from 'react-native';





export default function Route(){
  const [checkpoints, setCheckpoints] = useState([]);

  

   const INITIAL_REGION = {
    latitude: -6.8165,
    longitude: 39.2894,
    latitudeDelta: 2,
    longitudeDelta: 2, 
   };


  return (

    
    <View style={styles.container}>
      <MapView style={styles.map}
       initialRegion={INITIAL_REGION} 
       showsUserLocation
       showsMyLocationButton
       provider={PROVIDER_GOOGLE}
       showsCompass
       
        
       
      >
        {checkpoints.map(checkpoint => (
          <Marker
            key={checkpoint.id}
            coordinate={{ latitude: checkpoint.latitude, longitude: checkpoint.longitude }}
            title={checkpoint.name}
          />
        ))}
      
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