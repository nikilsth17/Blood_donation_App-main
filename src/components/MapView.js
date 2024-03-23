import React, { useEffect, useState } from 'react';
import MapView,{Marker} from 'react-native-maps';
import { StyleSheet, View,Button } from 'react-native';
import * as Location from 'expo-location';


const MapViews=()=> {
    const [mapRegion,setMapRegion]= useState({
        latitude:28.3974,
        longitude:84.1258,
        latitudeDelta:0.0922,
        longitudeDelta:0.0421

    })

    const userLocation=async()=>{
        let {status}= await Location.requestForegroundPermissionsAsync();
        if(status !=="granted"){
            setErrorMsg("Permission to access location was denied. ");
        }
        let location= await Location.getCurrentPositionAsync({enableHighAccuracy:true});
        setMapRegion({
            latitude:location.coords.latitude,
            longitude:location.coords.longitude,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421,
        });
        console.log(location.coords.latitude,location.coords.longitude);
    }

    useEffect(()=>{
        userLocation();
    },[]);
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        region={mapRegion}
      >
      <Marker coordinate={mapRegion} title='Marker'/>
      <Button title='Get location' onPress={userLocation}/>
      </MapView>
    </View>
  );
}

export default MapViews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
