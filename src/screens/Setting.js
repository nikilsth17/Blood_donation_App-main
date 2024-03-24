import { View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Card,
  Text,
  List,
  MD3Colors,
  TextInput,
  TextInputMask,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Setting = () => {
  const navigation = useNavigation();
  const [expanded, setExpanded] = React.useState(true);
  const [text, setText] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const handlePress = () => setExpanded(!expanded);
  return (
    <>
      <View
        style={{
          borderColor: "white",
          backgroundColor: "#DC143C",
          shadowColor: "white",
          gap: 15,
          height: 100,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons
          name="chevron-back-sharp"
          size={35}
          color="white"
          style={{ left: 10,paddingTop: 30 }}
          onPress={() => navigation.goBack()}
        />
        <Text style={{ fontSize: 23, color: "white", paddingTop: 30 }}>
          Donor List
        </Text>
      </View>
      <Card style={{ margin: 20,borderRadius:15 }}>
        <List.Section title="Login and Security">
          <List.Accordion
            title="User Name"
            left={(props) => <List.Icon {...props} icon="account" />}
          >
            <TextInput
              label="New username"
              value={text}
              onChangeText={(text) => setText(text)}
            ></TextInput>
          </List.Accordion>
          <List.Accordion
            title="Phone Number"
            left={(props) => <List.Icon {...props} icon="phone" />}
          >
            <TextInput
              label="New phone number"
              keyboardType="numeric"
              onChangeText={(text) => setPhoneNumber(text)}
            />
          </List.Accordion>
          <List.Accordion
            title="Email Address"
            left={(props) => <List.Icon {...props} icon="email" />}
          >
            <TextInput
              label="New Email address"
              value={text}
              onChangeText={(text) => setText(text)}
            />
          </List.Accordion>
          <List.Accordion
            title="Password"
            left={(props) => <List.Icon {...props} icon="lock" />}
          >
            <TextInput
              label="Current Password"
              secureTextEntry
              right={<TextInput.Icon icon="eye" />}
            />
            <TextInput
              label="New Password"
              secureTextEntry
              right={<TextInput.Icon icon="eye" />}
            />
          </List.Accordion>
        </List.Section>
      </Card>
      <Card
        style={{
          margin: 20,
          padding: 15,
          borderRadius: 15,
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <MaterialCommunityIcons name="logout" size={27} color="black" />
          <Text style={{ fontSize: 17, fontWeight: 700 }}>Logout</Text>
        </View>
      </Card>
    </>
  );
};

export default Setting;
