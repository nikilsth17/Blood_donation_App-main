import { View, Text, TouchableOpacity, ActivityIndicator} from 'react-native'
import React from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import {  Avatar, Button, Card, IconButton } from 'react-native-paper'




const DonorList = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.18.173:7000/user/all");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setUserData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#DC143C" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Error fetching data</Text>
      </View>
    );
  }
  return (
    <>
      <View style={{ 
        // flex:0.15,
        borderColor:"white",
        backgroundColor: "#DC143C",
        shadowColor: "white",
        gap:15,
        height:80,
        // shadowRadius: 100,
        flexDirection: 'row', // Use flexDirection to align items horizontally
        // justifyContent: "left", // Adjust as needed
        alignItems: 'center', // Adjust as needed
      }}>
        <Ionicons name="chevron-back-sharp" size={35}  color="white" style={{
            left:10
        }} paddingTop={35}
        onPress={()=>navigation.goBack()}/>
      <Text style={{fontSize:23,color:"white",paddingTop:30}}>Donor List</Text>
    </View>
    <View style={{ paddingVertical: 15,rowGap:10 }}>
          {userData.map((item) => (
              <Card key={item._id} style={{justifyContent:"space-between",
              
              flexDirection:"row",
              marginLeft:15,
              marginRight:15,
              }}>
                <Card.Title
                  title={item.fullName}
                  subtitle={
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                    <View style={{marginLeft:20}}>
                      <Text>Blood Type:{`\n ${item.bloodType}`}</Text>
                    </View>
                    <View style={{marginLeft:50,paddingLeft:50}}>
                        <Text>Contact No: {`\n${item.phoneNumber}`}</Text>
                    </View>
                    </View>
                  }
                  subtitleStyle={{width:500}}
                  right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
                />
              <Text style={{textAlign:"center"}}>Location:{item.location}</Text>
                <View style={{paddingTop:5,marginBottom:10, flexDirection: "row", justifyContent: "space-around" }}>
                  <TouchableOpacity style={{ width: 100 }}>
                    <Button mode="contained">Call</Button>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Button mode="outlined">Message</Button>
                  </TouchableOpacity>
                </View>
              </Card>
          ))}
    </View>
    </>
  
  )
}

export default DonorList