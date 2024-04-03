import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Card, IconButton, Button } from "react-native-paper"; // Import Card, IconButton, and Button
import { ApiBaseUrl } from "../lib/axios";

const RequestList = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${ApiBaseUrl}/request/all`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setUserData(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsError(true);
      setIsLoading(false);
    }
  };

  return (
    <View>
            <ScrollView>

      <View
        style={{
          borderColor: "white",
          backgroundColor: "#DC143C",
          shadowColor: "white",
          gap: 15,
          height: 80,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons
          name="chevron-back-sharp"
          size={35}
          color="white"
          style={{ left: 10 }}
          paddingTop={35}
          onPress={() => navigation.goBack()}
        />
        <Text style={{ fontSize: 23, color: "white", paddingTop: 30 }}>
          Blood Request List
        </Text>
      </View>
        <View style={{ paddingVertical: 15, gap: 5 }}>
          {userData.map((item) => (
            <Card key={item._id} style={{ marginHorizontal: 15, marginBottom: 10 }}>
              <Card.Content>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.fullName}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text>Blood Type: {item.bloodType}</Text>
                  <Text>Contact No: {item.phoneNumber}</Text>
                </View>
                <Text style={{ paddingTop: 5 }}>Location: {item.location}</Text>
              </Card.Content>
              <Card.Actions>
                <TouchableOpacity style={{ flex: 1 }}>
                  <Button mode="contained" onPress={() => {}}>
                    Call
                  </Button>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1 }}>
                  <Button mode="outlined" onPress={() => {}}>
                    Message
                  </Button>
                </TouchableOpacity>
              </Card.Actions>
            </Card>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default RequestList;
