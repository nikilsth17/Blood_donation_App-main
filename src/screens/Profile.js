import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from 'react-native-paper'

const Profile = () => {
  const navigation=useNavigation();
  return (
    <View style={{flex:1,backgroundColor:"black"}}   >
      <View style={{backgroundColor:"#DC143C",flexDirection:"row",justifyContent:"center"}}>
      <Ionicons
          name="chevron-back-sharp"
          size={35}
          color="white"
          paddingTop={35}
          onPress={() => navigation.goBack()}
        />
      <Text style={{ fontSize: 23, color: "white",  paddingTop:35}}>Blood Donate</Text>
      </View>
     
      <View style={{ 
        borderColor:"white",
        backgroundColor: "#DC143C",
        shadowColor: "white",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        height: 150,
        justifyContent:"center",
        flexDirection: 'row', // Use flexDirection to align items horizontally
        alignItems: 'center', // Adjust as needed
      }}>
   
      <Text style={{ fontSize: 30, color: "white"}}>Nikil Shrestha</Text>
      <Text>B+</Text>

      </View>
    
    <View style={{marginTop:-60,marginLeft:115}}>
      <Avatar.Image size={130} source={require("../assets/Image/avatar.png")} style={{backgroundColor:"white"}}/>

      </View>
    </View>
 
  )
}

export default Profile