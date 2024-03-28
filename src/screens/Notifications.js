import React from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'
import { Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Notifications = () => {
  const navigation = useNavigation();

  return (
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
      <Text style={{ fontSize: 23, color: "white", paddingTop: 30 }}>Notification</Text>
    </View>

  )
}

export default Notifications