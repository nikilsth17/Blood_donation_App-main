import { View,FlatList, Text, Image, Pressable, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native'
import React, { useState,useEffect } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../components/button';
import axios from "axios";

const Register =({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const options = ['male', 'female', 'other'];
    const [gender, setGender] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [location, setLocation] = useState('');
    const [responseData, setResponseData] = useState(null);
  
    const handleRegister = async () => {
      try {
        const requestData = {
          fullName,
          email,
          phoneNumber,
          password,
          bloodType,
          location,
          gender,
        };
        console.log('Request Data:', requestData);
        const response = await axios.post("http://192.168.18.173:7000/user/register", requestData);
        setResponseData(response.data);
        navigation.navigate("Login");
      } catch (error) {
        if (error.response) {
           
            console.error("Server responded with an error:", error.response.data);
          } else if (error.request) {
            console.error("No response received:", error.request);
          } else {
            console.error("Error setting up the request:", error.message);
          }
      }
    };
  
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <KeyboardAvoidingView>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.black
                    }}>
                        Create Account
                    </Text>

                    <Text style={{
                        fontSize: 16,
                        color: COLORS.black
                    }}>Connect with your friend today!</Text>
                </View>
                
                <View style={{marginBottom:12}}>
                    <Text style={{
                        fontSize:16,
                        fontWeight:400,
                        marginVertical:8
                    }}>
                    Full Name
                    </Text>
                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your full name'
                            placeholderTextColor={COLORS.black}
                            keyboardType="default"
                            style={{
                                width: "100%"
                            }}
                            onChangeText={(text) => setFullName(text)}
                        />
                    </View>
                </View>
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Email address</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your email address'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                            onChangeText={(text) => setEmail(text)}

                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Mobile Number</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingLeft: 22,
                        
                    }}>
                        <TextInput
                            placeholder='Enter your phone number'
                            placeholderTextColor={COLORS.black}
                            keyboardType='numeric'
                            style={{
                                width: "80%",
                                
                            }}
                            onChangeText={(text) => setPhoneNumber(text)}

                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Password</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%"
                            }}
                            onChangeText={(text) => setPassword(text)}

                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={COLORS.black} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={COLORS.black} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={{marginBottom:12}}>
                    <Text style={{
                        fontSize:16,
                        fontWeight:400,
                        marginVertical:8
                    }}>
                    Blood type
                    </Text>
                    <View style={{
                        width: "50%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your blood type'
                            placeholderTextColor={COLORS.black}
                            keyboardType="default"
                            style={{
                                width: "100%"
                            }}
                            onChangeText={(text) => setBloodType(text)}

                        />
                    </View>
            
                    <Text style={{
                        fontSize:16,
                        fontWeight:400,
                        marginVertical:8
                    }}>
                    Gender
                    </Text>
                    <View style={{flexDirection:"row"}}>
                    {options.map(option => (
                        <TouchableOpacity
                            key={option}
                            style={styles.singleOptionContainer}
                            onPress={() => setGender(option)}
                                >
                            <View style={styles.outerCircle}>
                                {gender === option ? (
                                    <View style={styles.innerCircle} />
                                ) : null}
                            </View>
                            <Text>{option}</Text>
                        </TouchableOpacity>
                    ))}

                        
                   
                    </View>
                 
                    
                        
                </View>
                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Location</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter your location'
                            placeholderTextColor={COLORS.black}
                            keyboardType="default"
                            style={{
                                width: "100%"
                            }}
                            onChangeText={(text)=>setLocation(text)}
                        />
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginVertical: 6
                }}>
                    <Checkbox
                        style={{ marginRight: 8 }}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? COLORS.primary : undefined}
                    />

                    <Text>I aggree to the terms and conditions</Text>
                </View>

                <Button
                    title="Register"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                    onPress={handleRegister}
                
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                    />
                    <Text style={{ fontSize: 14 }}>Or Sign up with</Text>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.grey,
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={require("../assets/Image/facebook.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.grey,
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={require("../assets/Image/google.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text>Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>Already have an account</Text>
                    <Pressable
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.primary,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Login</Text>
                    </Pressable>
                </View>
            </View>
                </ScrollView>
            </KeyboardAvoidingView>
          
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    singleOptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
        margin: 5,
      },
      outerCircle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      innerCircle: {
        width: 22,
        height: 22,
        borderRadius: 11,
        backgroundColor: 'red',
      },
})
export default Register