import React, { useState, useEffect } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Button, Text } from 'react-native';
import * as Location from 'expo-location';

const MapShow = () => {
    const [mapRegion, setMapRegion] = useState({
        latitude: 27.7172,
        longitude: 85.3240,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      const [bloodBank, setBloodBank] = useState([]);
      const [selectedBloodBank, setSelectedBloodBank] = useState(null);
    
      const fetchBloodBankData = () => {
        // Dummy bloodBank data with rating and contact information
        const dummyBloodBankData = [
          { name: 'Blood bank A', latitude: 27.67886, longitude: 85.37953, rating: 4.5, contact: '123-456-7890' },
          { name: 'Blood bank B', latitude: 27.7102, longitude: 85.3241, rating: 3.8, contact: '987-654-3210' },
          { name: 'Blood bank C', latitude: 27.7203, longitude: 85.3352, rating: 4.0, contact: '111-222-3333' },
          { name: 'Blood bank D', latitude: 27.673136, longitude: 85.422302, rating: 4.0, contact: '999-111-222' },
          { name: 'Blood bank E', latitude: 27.6683, longitude:85.3206, rating: 4.0, contact: '999-111-222' },
          // Add more bloodBank data as needed
        ];
        setBloodBank(dummyBloodBankData);
      };
    
      const userLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log('Permission to access location was denied');
          return;
        }
        let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
        setMapRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      };
    
      useEffect(() => {
        userLocation();
        fetchBloodBankData(); // Fetch bloodBank data when component mounts
      }, []);
    
      const handleMarkerPress = (bloodBank) => {
        setSelectedBloodBank(bloodBank);
      };
    
  return (
    <View style={styles.container}>
    <MapView style={styles.map} region={mapRegion}>
      {bloodBank.map((bloodBank, index) => (
        <Marker
          key={index}
          coordinate={{ latitude: bloodBank.latitude, longitude: bloodBank.longitude }}
          title={bloodBank.name}
          onPress={() => handleMarkerPress(bloodBank)}
        >
          <Callout>
            <View>
              <Text>{bloodBank.name}</Text>
              <Text>Rating: {bloodBank.rating}</Text>
              <Text>Contact: {bloodBank.contact}</Text>
            </View>
          </Callout>
        </Marker>
      ))}
    </MapView>
    {selectedBloodBank && (
      <View style={styles.selectedBloodBankContainer}>
        <Text>Selected BloodBank: {selectedBloodBank.name}</Text>
        <Text>Rating: {selectedBloodBank.rating}</Text>
        <Text>Contact: {selectedBloodBank.contact}</Text>
      </View>
    )}
    <Button title='Get Location' onPress={userLocation} />
  </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    selectedBloodBankContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      padding: 10,
    },
  });
  
export default MapShow