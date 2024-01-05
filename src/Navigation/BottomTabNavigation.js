// import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Entypo, EvilIcons, FontAwesome, FontAwesome5, Ionicons} from '@expo/vector-icons';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import Register from '../screens/Register';
import { Image, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import Setting from '../screens/Setting';

const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: "absolute",
    elevation: 0,
    height: 60,
    backgroundColor:"#DC143C",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

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
          <Entypo name="home" size={24} color={focused ? "#FFC371": "white"} />
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
         <Entypo name="wallet" size={24} color={focused ? "#FFC371": "white"} />
          <Text style={{fontSize: 12, color: "white"}}>Notification</Text>
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
          backgroundColor: "#EDF1F4",
          width: Platform.OS == "ios" ? 50 : 60,
          height: Platform.OS == "ios" ? 50 : 60,
          top: Platform.OS == "ios" ? -10 : -20,
          borderRadius: Platform.OS == "ios" ? 25 : 30,

         }}
        >
          <AntDesign name="qrcode" size={40} color="black" />
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
         {/* <Ionicons name="user" size={24}  color={focused ? "white": "#111"} /> */}
         <AntDesign name="user" size={24} color={focused ? "#FFC371": "white"}/>
          <Text style={{fontSize: 12, color: "white"}}>Profile</Text>
        </View>
      )
    }
  }}
  />
  <Tab.Screen 
  name="Setting" 
  component={Setting} 
  options={{
    tabBarIcon: ({focused})=>{
      return (
        <View style={{alignItems: "center", justifyContent: "center"}}> 
         <Ionicons name="settings" size={24}  color={focused ? "#FFC371": "white"} />
          <Text style={{fontSize: 12, color: "white"}}>Setting</Text>
        </View>
      )
    }
  }}
  />
</Tab.Navigator>

)
  
}

export default BottomTabNavigation