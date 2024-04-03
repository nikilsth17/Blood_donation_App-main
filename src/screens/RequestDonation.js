import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";
import { Button } from "react-native-paper";
import { ApiBaseUrl } from "../lib/axios"; // Import ApiBaseUrl
import axios from "axios"

const RequestDonation = ({navigation}) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [location, setLocation] = useState("");
  const navigations = useNavigation();

  const handleSubmit = async () => {
    try {
      const requestData = {
        fullName,
        phoneNumber,
        location,
        bloodType
      };
      const response = await axios.post(
        `${ApiBaseUrl}/requester/add`,
        requestData
      );
  
      // Check if response is defined before accessing its properties
      if (response && response.data) {
        Alert.alert('Success', response.data.message);
      } else {
        // Log or handle unexpected response format
        console.error("Unexpected response format:", response);
      }
    } catch (error) {
      // Check if error.response is defined before accessing its properties
      if (error.response && error.response.data) {
        Alert.alert('Error', error.response.data.error);
      } else {
        // Log or handle unexpected error format
        console.error("Unexpected error format:", error);
      }
    }
  };
  
  return (
    <>
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
          onPress={() => navigations.goBack()}
        />
        <Text style={{ fontSize: 23, color: "white", paddingTop: 30 }}>
          Request blood
        </Text>
      </View>
      <SafeAreaView>
        <KeyboardAvoidingView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ marginHorizontal: 22 }}>
              <View style={{ marginVertical: 10 }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: COLORS.black,
                  }}
                >
                  Request for blood donation
                </Text>
              </View>

              <View style={{ marginBottom: 12 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    marginVertical: 8,
                  }}
                >
                  Full Name
                </Text>
                <View
                  style={{
                    width: "100%",
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 22,
                  }}
                >
                  <TextInput
                    placeholder="Enter your full name"
                    placeholderTextColor={COLORS.black}
                    keyboardType="default"
                    style={{
                      width: "100%",
                    }}
                    onChangeText={(text) => setFullName(text)}
                  />
                </View>
              </View>

              <View style={{ marginBottom: 12 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    marginVertical: 8,
                  }}
                >
                  Mobile Number
                </Text>

                <View
                  style={{
                    width: "100%",
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingLeft: 22,
                  }}
                >
                  <TextInput
                    placeholder="Enter your phone number"
                    placeholderTextColor={COLORS.black}
                    keyboardType="numeric"
                    style={{
                      width: "80%",
                    }}
                    onChangeText={(text) => setPhoneNumber(text)}
                  />
                </View>
              </View>

              <View style={{ marginBottom: 12 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    marginVertical: 8,
                  }}
                >
                  Blood type
                </Text>
                <Picker
                  selectedValue={bloodType}
                  onValueChange={(value, index) => setBloodType(value)}
                  mode="dropdown" // Android only
                  style={styles.picker}
                >
                  <Picker.Item label="Select" value="Select" />
                  <Picker.Item label="A+" value="A+" />
                  <Picker.Item label="B+" value="B+" />
                  <Picker.Item label="O+" value="O+" />
                  <Picker.Item label="O-" value="O-" />
                  <Picker.Item label="A-" value="A-" />
                  <Picker.Item label="B-" value="B-" />
                  <Picker.Item label="AB+" value="AB+" />
                  <Picker.Item label="AB-" value="AB-" />
                </Picker>
              </View>
              <View style={{ marginBottom: 12 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    marginVertical: 8,
                  }}
                >
                  Location
                </Text>

                <View
                  style={{
                    width: "100%",
                    height: 48,
                    borderColor: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 22,
                  }}
                >
                  <TextInput
                    placeholder="Enter your location"
                    placeholderTextColor={COLORS.black}
                    keyboardType="default"
                    onChangeText={(text) => setLocation(text)}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>

      <View style={styles.container}>
        <Button
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10,
            width: "93%",
          }}
          onPress={handleSubmit}
          mode="contained"
        >
          Request
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingLeft: 22,
  },
});

export default RequestDonation;
