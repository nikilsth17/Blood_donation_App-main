import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button, Card, IconButton, Dialog, Portal } from 'react-native-paper';
import FilterDonor from '../components/filterDonor';
import { ApiBaseUrl } from '../lib/axios';

const DonorList = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredData, setFilteredData] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleOpenFilter = () => {
    setOpen(true);
  };

  const handleFilter = async (filterCriteria) => {
    try {
      const response = await fetch(`${ApiBaseUrl}/api/filterDonors`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filterCriteria),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setFilteredData(data);
      setOpen(false);
    } catch (error) {
      console.error('Error fetching filtered data:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${ApiBaseUrl}/user/all`);
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

  // Show either filteredData or userData
  const displayData = filteredData || userData;

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
        <Text style={{ fontSize: 23, color: "white", paddingTop: 30 }}>Donor List</Text>
      </View>

      <View>
        <Button onPress={handleOpenFilter}>Open filter</Button>
        {open && (
          <Portal>
            <Dialog visible={open} onDismiss={() => setOpen(false)}>
              <Dialog.Content>
                <FilterDonor onFilter={handleFilter} />
              </Dialog.Content>
            </Dialog>
          </Portal>
        )}
      </View>

      <ScrollView>
        <View style={{ paddingVertical: 5, gap: 5 }}>
          {(displayData || []).map((item) => (
            <Card key={item._id} style={{
              justifyContent: "space-between",
              flexDirection: "row",
              marginLeft: 15,
              marginRight: 15,
            }}>
              <Card.Title
                title={item.fullName}
                subtitle={
                  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ marginLeft: 20 }}>
                      <Text>Blood Type:{`\n ${item.bloodType}`}</Text>
                    </View>
                    <View style={{ marginLeft: 50, paddingLeft: 50 }}>
                      <Text>Contact No: {`\n${item.phoneNumber}`}</Text>
                    </View>
                  </View>
                }
                subtitleStyle={{ width: 500, gap: 10, paddingTop: 5 }}
                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => { }} />}
              />
              <Text style={{ textAlign: "center" }}>Location:{item.location}</Text>
              <View style={{ paddingTop: 5, marginBottom: 10, flexDirection: "row", justifyContent: "space-around" }}>
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
      </ScrollView>

      {/* Footer */}
      <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#DC143C", justifyContent: "space-between", marginTop: -20 }}>
        <Text style={{ fontSize: 20, marginLeft: 20, color: "white" }}>Locate your</Text>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#EDF1F4",
            width: 60,
            height: 60,
            marginLeft: 10,
            borderRadius: 30,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Entypo name="location" size={34} color="black" marginLeft={15} onPress={() => navigation.navigate("MapShow")} />
        </View>
        <Text marginRight={50} style={{ fontSize: 20, color: "white" }}>Donor</Text>

      </View>
    </SafeAreaView>
  );
}

export default DonorList;
