import React, { useState, useEffect } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, View, Dimensions, Button, Text } from 'react-native';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MapShow = () => {
    const [mapRegion, setMapRegion] = useState({
        latitude: 27.7172,
        longitude: 85.3240,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      const [bloodBank, setBloodBank] = useState([]);
      const [selectedBloodBank, setSelectedBloodBank] = useState(null);
    const navigation= useNavigation();
      const fetchBloodBankData = () => {
        // Dummy bloodBank data with rating and contact information
        const dummyBloodBankData = [
          { name: 'Blood bank A', latitude: 27.67886, longitude: 85.37953, rating: 4.5, contact: '123-456-7890' },
          { name: 'Blood bank B', latitude: 27.7102, longitude: 85.3241, rating: 3.8, contact: '987-654-3210' },
          { name: 'Blood bank C', latitude: 27.7203, longitude: 85.3352, rating: 4.0, contact: '111-222-3333' },
          { name: 'Blood bank D', latitude: 27.673136, longitude: 85.422302, rating: 4.0, contact: '999-111-222' },
          { name: 'Blood bank E', latitude: 27.6683, longitude:85.3206, rating: 4.0, contact: '999-111-222' },
          { name: 'Blood bank F', latitude: 28.2096, longitude:83.9856, rating: 4.0, contact: '999-111-222' },
          { name: 'Blood bank G', latitude: 27.5829, longitude:85.5097, rating: 3.7, contact: '999-111-222' },
          { name: 'Blood bank H', latitude: 27.6992, longitude:86.7416, rating: 3.5, contact: '999-111-222' },
          { name: 'Blood bank I', latitude: 27.2000, longitude:86.7430, rating: 3.7, contact: '999-111-222' },
          { name: 'Blood bank J', latitude: 27.8112, longitude:86.3500, rating: 3.8, contact: '999-111-222' },
          { name: 'Blood bank K', latitude: 26.6992, longitude:86.3300, rating: 3.9, contact: '999-111-222' },
          { name: 'Blood bank L', latitude: 27.5096, longitude:83.9856, rating: 4.0, contact: '999-111-222' },

          { name: 'Blood bank M', latitude: 28.8096, longitude:80.4856, rating: 4.0, contact: '999-111-222' },

          { name: 'Blood bank N', latitude: 29.1096, longitude:80.9856, rating: 4.0, contact: '999-111-222' },

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
         <View style={{
      borderColor: "white",
      backgroundColor: "#DC143C",
      shadowColor: "white",
      gap: 15,
      height: 80,
      flexDirection: 'row',
      alignItems: 'center',
    }}>
      <Ionicons
        name="chevron-back-sharp"
        size={35}
        color="white"
        style={{ left: 10 }}
        paddingTop={35}
        onPress={() => navigation.goBack()}
      />
      <Text style={{ fontSize: 23, color: "white", paddingTop: 30 }}>Map</Text>
    </View>
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
  });
  
export default MapShow