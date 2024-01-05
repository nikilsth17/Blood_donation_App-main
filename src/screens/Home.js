import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar, Card, IconButton, Portal, Searchbar, Surface } from 'react-native-paper'
import { FontAwesome5, Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'
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
        <Avatar.Image size={110} source={require("../assets/Image/avatar.png")} style={{marginLeft:20,backgroundColor:"grey"}}/>
        <Text style={{fontSize:20,color:"white",left:40}}>
          Hello John !
        </Text>
        <TouchableOpacity style={{left:90}} onPress={()=>navigation.navigate("Notifications")}>
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
        height: Platform.OS == "ios" ? 50 : 40,
        top: Platform.OS == "ios" ? 40 : 95,
        right:200,
        borderRadius: Platform.OS == "ios" ? 25 : 30,

       }}
    />
      </View> 
      
      {/* <View style={{
        marginVertical: 26,
        backgroundColor: 'grey',
        borderWidth: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}>
        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={(props) => <Avatar.Icon {...props} icon="folder" />}
          right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
        />
         
      </View> */}
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
            <TouchableOpacity>
                  <Surface style={{ 
                      padding: 8,
                      height: 120,
                      width: 150,
                      alignItems: 'center',
                      borderRadius:10,
                      justifyContent: 'center',
                      backgroundColor:"white"}} elevation={5}>
                    <Fontisto name="blood-drop" size={24} color="black" />
                    <Text>Blood donate</Text>
                  </Surface>
            </TouchableOpacity>
          
            <TouchableOpacity>
                    <Surface style={{ padding: 8,
                      height: 120,
                      width: 150,
                      alignItems: 'center',
                      borderRadius:10,
                      justifyContent: 'center',}} elevation={4}>
                      <Fontisto name="blood-drop" size={24} color="black" />
                      <Text>Message a Donor</Text>
                    </Surface>
            </TouchableOpacity>
         
            <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate("DonorList")}>
                <Surface style={{ padding: 8,
                  height: 120,
                  width: 150,
                  alignItems: 'center',
                  borderRadius:10,
                  justifyContent: 'center',}} 
                  elevation={4}
                >
                  <Fontisto name="blood-drop" size={24} color="black" />
                  <Text>Donation center</Text>
                </Surface>
            </TouchableOpacity>
            <TouchableOpacity>
                    <Surface style={{ padding: 8,
                    height: 120,
                    width: 150,
                    alignItems: 'center',
                    borderRadius:10,
                    justifyContent: 'center',}} elevation={4}>
                    <Fontisto name="blood-drop" size={24} color="black" />
                    <Text>Blood Compatibility Chart</Text>
                  </Surface>
            </TouchableOpacity>
            <TouchableOpacity>
                  <Surface style={{ padding: 8,
                  height: 120,
                  width: 150,
                  alignItems: 'center',
                  borderRadius:10,
                  justifyContent: 'center',
                  backgroundColor:"white"}} elevation={4}>
                  <Fontisto name="blood-drop" size={24} color="black" />
                  <Text>Request for Donation</Text>
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
                  <Fontisto name="blood-drop" size={24} color="black" />
                  <Text>Donor's List</Text>
                </Surface>
            </TouchableOpacity>
         
      </View>
      
    </View>
  )
}

export default Home
