import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar, Card, IconButton, Portal, Searchbar, Surface } from 'react-native-paper'
import { AntDesign, FontAwesome, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const navigation=useNavigation();
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={{flex:1,backgroundColor:"#DEE4EA"}}>
      <View style={{ 
        borderColor:"white",
        backgroundColor: "#DC143C",
        shadowColor: "white",
        // shadowRadius: 100,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        height: 200,
        flexDirection: 'row', // Use flexDirection to align items horizontally
        justifyContent: 'space-between', // Adjust as needed
        alignItems: 'center', // Adjust as needed
      }}>
        <Avatar.Image size={100} source={require("../assets/Image/avatar.png")} style={{marginLeft:20,backgroundColor:"grey"}}/>
        <View style={{marginLeft:15,gap:10}}>
        <Text style={{fontSize:20,color:"white"}}>Welcome</Text>
        <Text style={{fontSize:25,color:"white"}}>
          Nikil Shrestha !
        </Text>
        </View>
      
        <TouchableOpacity style={{left:20}} onPress={()=>navigation.navigate("Notifications")}>
          <FontAwesome5 name="bell" size={24} color="white"/>
        </TouchableOpacity>
        <Searchbar 
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:"white",
              width:250,
              height:50,
              top:97,
              right:265,
              borderRadius:20,

       }}
    />
      </View> 


      <Text style={{fontSize:15,marginTop:30,marginLeft:20,fontWeight:"bold"}}>Find near me,</Text>
    <View style={{
          justifyContent:"space-between",
          alignItems:"center",
          flexDirection:"row",
          marginLeft:20,
          marginRight:20,
          display:"flex",
          flexWrap:"wrap",
          paddingTop:10,
          gap:10
          }}>
          <TouchableOpacity>
                  <Surface style={{ 
                      padding: 8,
                      height: 90,
                      width: 100,
                      alignItems: 'center',
                      borderRadius:10,
                      justifyContent: 'center',
                      backgroundColor:"white"}} elevation={5}>
                        <Fontisto name="ambulance" size={20} color="red" />
                    <Text paddingTop={10}>Ambulance</Text>
                  </Surface>
            </TouchableOpacity>
            <TouchableOpacity>
                  <Surface style={{ 
                      padding: 8,
                      height: 90,
                      width: 100,
                      alignItems: 'center',
                      borderRadius:10,
                      justifyContent: 'center',
                      backgroundColor:"white"}} elevation={5}>
                        <FontAwesome name="hospital-o" size={24} color="red" />
                    <Text paddingTop={10}>Hospital</Text>
                  </Surface>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("MapShow")}>
                  <Surface style={{ 
                      padding: 8,
                      height: 90,
                      width: 100,
                      alignItems: 'center',
                      borderRadius:10,
                      justifyContent: 'center',
                      backgroundColor:"white"}} elevation={5}>
                        <MaterialCommunityIcons name="blood-bag" size={24} color="red" />
                    <Text paddingTop={10}>Blood Bank</Text>
                  </Surface>
            </TouchableOpacity>
    </View>



      <View style={{
          justifyContent:"space-between",
          alignItems:"center",
          flexDirection:"row",
          marginLeft:15,
          marginRight:15,
          display:"flex",
          flexWrap:"wrap",
          paddingTop:30,
          gap:15
          }}>
          
            <TouchableOpacity onPress={()=>navigation.navigate("RequestList")}>
                    <Surface style={{ padding: 8,
                      height: 120,
                      width: 150,
                      alignItems: 'center',
                      borderRadius:10,
                      justifyContent: 'center',}} elevation={4}>
                        <MaterialIcons name="message" size={24} color="red" />
                      <Text paddingTop={10}>Requester list</Text>
                    </Surface>
            </TouchableOpacity>
         
            
            <TouchableOpacity onPress={()=>navigation.navigate("BloodCompatibilityChart")}>
                    <Surface style={{ padding: 8,
                    height: 120,
                    width: 150,
                    alignItems: 'center',
                    borderRadius:10,
                    justifyContent: 'center',}} elevation={4}>
                      <AntDesign name="table" size={24} color="red" />
                    <Text paddingTop={10}>Blood Compatibility Chart</Text>
                  </Surface>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("RequestDonation")}>
                  <Surface style={{ padding: 8,
                  height: 120,
                  width: 150,
                  alignItems: 'center',
                  borderRadius:10,
                  justifyContent: 'center',
                  backgroundColor:"white"}} elevation={4}>
                  <Fontisto name="blood-drop" size={24} color="red" />
                  <Text paddingTop={10}>Request for Donation</Text>
                </Surface>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>navigation.navigate("DonorList")}>
                  <Surface style={{ padding: 8,
                  height: 120,
                  width: 150,
                  alignItems: 'center',
                  borderRadius:10,
                  justifyContent: 'center',
                  backgroundColor:"white"}} elevation={4}>
                    <Fontisto name="nav-icon-list-a" size={24} color="red" />
                  <Text paddingTop={10}>Donor's List</Text>
                </Surface>
            </TouchableOpacity>
         
      </View>
      
    </View>
  )
}

export default Home
