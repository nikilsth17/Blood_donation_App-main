import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { Avatar, Card, IconButton } from 'react-native-paper'
import { FontAwesome5 } from '@expo/vector-icons'

const Home = () => {
  return (
    <>
      <View style={{ 
        flex: 0.3,
        borderColor:"white",
        backgroundColor: "#DC143C",
        shadowColor: "white",
        // shadowRadius: 100,
        borderBottomLeftRadius: 120,
        borderBottomRightRadius: 0,
        height: 200,
        flexDirection: 'row', // Use flexDirection to align items horizontally
        justifyContent: 'space-between', // Adjust as needed
        alignItems: 'center', // Adjust as needed
      }}>
        <Avatar.Image size={110} source={require("../assets/Image/avatar.png")} style={{marginLeft:20,backgroundColor:"grey"}}/>
        <Text style={{fontSize:20,color:"white"}}>
          Hello John !
        </Text>
        <TouchableOpacity>
          <FontAwesome5 name="bell" size={24} color="white"/>
        </TouchableOpacity>
      </View>
      
      <View style={{
        marginVertical: 26,
        flex: 0.3,
        backgroundColor: 'grey',
        borderWidth: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={(props) => <Avatar.Icon {...props} icon="folder" />}
          right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
        />
        <Card.Content></Card.Content>
      </View>
    </>
  )
}

export default Home
