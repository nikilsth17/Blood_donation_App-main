import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {  Ionicons } from '@expo/vector-icons'
import { Row, Rows, Table } from 'react-native-table-component'
import { useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


const BloodCompatibilityChart = () => {
  const screenOptions = {
    tabBarShowLabel:false,
    headerShown:false,
    tabBarStyle:{
      position: "absolute",
      elevation: 0,
      height: 60,
      backgroundColor:"#DC143C",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
  
    }
  }
  const Tab = createBottomTabNavigator();

    const navigation= useNavigation();
          tableHead= ['Blood Type', 'Gives', 'Receives'],
          tableData=[
            ['A+', 'A+,AB+', 'A+,A-,O+,O-'],
            ['O+', 'O+,A+,B+,AB+', 'O+,O-'],
            ['B+','B+,AB+','B+,B-,O+,O-'],
            ['AB+','AB+','Everyone'],
            ['A-','A+,A-,AB+,AB-','A-,O-'],
            ['O-','Everyone','O-'],
            ['B-','B+,B-,AB+,AB-','B-,O-'],
            ['AB-','AB+,AB-','AB-,A-,B-,O-']
          ]
 
  return (
    <>
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
      <Text style={{ fontSize: 20, color: "white", paddingTop: 30 }}>Blood compatibility chart</Text>
    </View>
    <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1, borderColor: 'black'}}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={tableData} textStyle={styles.text}/>
        </Table>
    </View>


    
    </>
   
  )
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#F6BDC0' },
    text: { margin: 6 }
  });

export default BloodCompatibilityChart