import { View, Text,TouchableOpacity, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/colors';
import Button from '../components/button';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from "expo-checkbox"
import axios from 'axios';
// import { openSuccessSnackbar } from '../store/slice/snackbarSlice';
// import { useDispatch } from 'react-redux';


const Login = ({navigation}) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const dispatch = useDispatch();



    const [responseData,setResponseData]=useState(null);
    const handleLogin=async()=>{
        try {
            const requestData={
                email,
                password,
            };
            const response=await axios.post("http://192.168.18.173:7000/user/login",requestData);
            setResponseData(response?.data);
            navigation.navigate("BottomTabNavigation");
        } catch (error) {
            console.log(error?.message);
        }
    }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        marginVertical: 12,
                        color: COLORS.black,
                        justifyContent:"center",
                        textAlign:"center",
                    }}>
                       Login Form
                    </Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Email address</Text>

               
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

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8
                    }}>Password</Text>

                        <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor={COLORS.black}
                            secureTextEntry={isPasswordShown}
                            style={{
                                width: "100%"
                            }}
                            onChangeText={(text) => setPassword(text)}

                        >
                            
                        </TextInput>
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

                    <Text>Remember Me</Text>
                </View>

                <Button
                    title="Login"
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                    }}
                    onPress={handleLogin}
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
                    <Text style={{ fontSize: 14 }}>Or Login with</Text>
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
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 52,
                }}>
                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                    >
                        <Image
                            source={require("../assets/Image/facebook.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 20
                            }}
                            resizeMode='contain'
                        />
                        
                
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
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
                    </TouchableOpacity>
                        
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: COLORS.black }}>Don't have an account ? </Text>
                    <Pressable
                        onPress={() => navigation.navigate("Register")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.primary,
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Register</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
  )
}

export default Login