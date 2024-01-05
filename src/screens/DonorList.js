import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Avatar, Button, Card, IconButton } from 'react-native-paper'


const dataCard = [
    { id: 1, name: "John Doe", bloodGroup: "Subtitle 1", contactNo: "123-456-7890" },
    { id: 2, name: "Card 2", bloodGroup: "Subtitle 2", contactNo: "987-654-3210" },
    { id: 3, name: "Card 3", bloodGroup: "Subtitle 3", contactNo: "555-123-4567" },
];

const DonorList = () => {
    const navigation= useNavigation();
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
    <View style={{paddingVertical:10,rowGap:10}}>
    {
        dataCard?.map((item) => {
            return (
                <Card style={{justifyContent:"space-between",
                alignItems:"center",
                flexDirection:"row",
                marginLeft:15,
                marginRight:15,
                display:"flex",
                flexWrap:"wrap",
                }}>
                     <Card.Title
                        key={item.id}
                        title={item.name}
                        subtitle={`Blood Group: ${item.bloodGroup}\nContact No: ${item.contactNo}`}
                        // left={(props) => <Avatar.Icon {...props} icon="folder" />}
                        right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
                    />
                    <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                        <TouchableOpacity style={{width:100}}>
                        <Button  mode='outlined' 
                        >
                            Call
                        </Button>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Button mode='outlined'>Message</Button>

                        </TouchableOpacity>
                
                    </View>
                   
                      
              
                    
                      
                       
                   
                </Card>
               
            );
        })
    }
     
    </View>
    
    </>
  
  )
}

export default DonorList