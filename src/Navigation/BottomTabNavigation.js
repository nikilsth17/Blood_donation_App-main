// import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome, FontAwesome5, Ionicons} from '@expo/vector-icons';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import Register from '../screens/Register';
import { Image, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';

const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor:"#DC143C",
  }
}

const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
  <Tab.Navigator screenOptions={screenOptions}>
  <Tab.Screen 
  name="Home" 
  component={Home} 
  options={{
    tabBarIcon: ({focused})=>{
      return (
        <View style={{alignItems: "center", justifyContent: "center"}}> 
          <Entypo name="home" size={24} color={focused ? "white": "white"} />
          <Text style={{fontSize: 12, color: "white"}}>HOME</Text>
    </View>
      )
    }
  }}
  />
  <Tab.Screen 
  name="Notification" 
  component={Notifications} 
  options={{
    headerShown:false,
    tabBarIcon: ({focused})=>{
      return (
        <View style={{alignItems: "center", justifyContent: "center"}}> 
         <Entypo name="wallet" size={24} color={focused ? "white": "#111"} />
          <Text style={{fontSize: 12, color: "white"}}>WALLET</Text>
    </View>
      )
    }
  }}
  />
  <Tab.Screen 
  name="Register" 
  component={Register} 
   options={{
    tabBarIcon: ({focused})=>{
      return (
        <View
         style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#D7D7D7",
          width: Platform.OS == "ios" ? 50 : 60,
          height: Platform.OS == "ios" ? 50 : 60,
          top: Platform.OS == "ios" ? -10 : -20,
          borderRadius: Platform.OS == "ios" ? 25 : 30,

         }}
        >
          <FontAwesome name="exchange" size={24} color="red" />
        </View>
      )
    }
   }}
  />
  <Tab.Screen 
  name="Profile" 
  component={Profile} 
  options={{
    tabBarIcon: ({focused})=>{
      return (
        <View style={{alignItems: "center", justifyContent: "center"}}> 
         <Ionicons name="settings" size={24}  color={focused ? "white": "#111"} />
          <Text style={{fontSize: 12, color: "white"}}>Profile</Text>
    </View>
      )
    }
  }}
  />
</Tab.Navigator>

)
  
}

export default BottomTabNavigation