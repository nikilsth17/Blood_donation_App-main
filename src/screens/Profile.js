import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from 'react-native-paper'
import { Rating } from '@kolking/react-native-rating'

const Profile = () => {
  const [rating, setRating] =React.useState(0);

  const handleChange = React.useCallback(
    (value) => setRating(Math.round((rating + value) * 5) / 10),
    [rating]
  );
  const navigation=useNavigation();
  return (
    <View style={{flex:1,backgroundColor:"#DEE4EA"}}   >
      <View style={{
        height:250,
        backgroundColor:"#DC143C",
        borderBottomRightRadius:60,
        borderBottomLeftRadius:60
      }}>
        <View style={{justifyContent:"row"}}>
              <Ionicons
                name="chevron-back-sharp"
                size={35}
                color="white"
                paddingTop={35}
                onPress={() => navigation.goBack()}
              />
            <Text style={{ fontSize: 20, color: "white",marginTop:-31,marginLeft:50}}>Blood Donate</Text>
        </View>
      
        <View style={{ 
          borderColor:"white",
          backgroundColor: "#DC143C",
          marginTop:20
        }}>
            <Text style={{ fontSize: 30, color: "white",marginLeft:90,fontFamily:"sans-serif-medium"}}>Nikil Shrestha</Text>
            <Text style={{fontSize:25,color:"white",marginLeft:170,width:70,marginTop:10,}}>B+</Text>
        </View>
      </View>
     
      <View style={{marginTop:-70,marginLeft:115}}>
        <Avatar.Image size={130} source={require("../assets/Image/avatar.png")} style={{backgroundColor:"white"}}/>
      </View>

{/* ---------------------Rating ----------------------------------------------------- */}
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',paddingTop:10
        }}
      >
        <Rating size={20} rating={rating} onChange={handleChange} />
        {/* <Text style={{
          fontSize: 17,
          marginTop: 20,
        }}>
        Rated {rating} out of 5</Text> */}
      </View>

      <Text style={{
        backgroundColor:"#f8f8ff",
        textAlign:"center",
        textAlignVertical:"center",
        justifyContent:"center",
        fontSize:20,
        marginTop:15,
        height:50,
        width:300,
        marginLeft:30,
        borderBottomLeftRadius:10,
        borderTopWidth:1,
        borderLeftWidth:1,
        borderRightWidth:2,
        borderColor:"#708090",
        borderBottomRightRadius:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        elevation:5
      }}>18 Donation</Text>

    </View>
 
  )
}

export default Profile