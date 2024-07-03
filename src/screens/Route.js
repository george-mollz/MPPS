import React, { useState, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline, MAP_TYPES,  } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

// Example checkpoints data
const checkpointsData = [
  { id: 1, name: 'Checkpoint 1', latitude: -6.369028, longitude: 34.888822 },
  { id: 2, name: 'Checkpoint 2', latitude: -3.386925, longitude: 36.682995 },
];

export default function Route() {
  const [checkpoints, setCheckpoints] = useState(checkpointsData);

  const INITIAL_REGION = {
    latitude: -6.8165,
    longitude: 39.2894,
    latitudeDelta: 5,
    longitudeDelta: 5,
  };

  // Define the boundaries for Tanzania
  const TANZANIA_REGION = {
    latitude: -6.369028,
    longitude: 34.888822,
    latitudeDelta: 10,
    longitudeDelta: 10,
  };

  useEffect(() => {
    setCheckpoints(checkpointsData);
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={INITIAL_REGION}
        provider={PROVIDER_GOOGLE}
        //showsUserLocation
        showsMyLocationButton
        showsCompass
        minZoomLevel={5}
        maxZoomLevel={15}
        onRegionChangeComplete={(region) => {
          if (
            region.latitude < -11.745 &&
            region.latitude > -1.083 &&
            region.longitude < 40.443 &&
            region.longitude > 29.321
          ) {
            // within Tanzania
          } else {
            // reset to Tanzania region if outside bounds
            mapRef.current.animateToRegion(TANZANIA_REGION, 1000);
          }
        }}
        
      >
        {checkpoints.map(checkpoint => (
          <Marker
            key={checkpoint.id}
            coordinate={{ latitude: checkpoint.latitude, longitude: checkpoint.longitude }}
            title={checkpoint.name}
          />
        ))}
        <Polyline
          coordinates={checkpoints.map(checkpoint => ({
            latitude: checkpoint.latitude,
            longitude: checkpoint.longitude,
          }))}
          strokeColor="#000"
          strokeWidth={3}
        />
      </MapView>
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
