import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Button, Card, Dialog, IconButton, Portal, Searchbar } from 'react-native-paper';
import FilterDonor from '../components/filterDonor';

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
      const response = await fetch('http://192.168.18.173:7000/api/filterDonors', {
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
        const response = await fetch('http://192.168.18.173:7000/user/all');
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
  //show if the filteredData or userData
    const displayData = filteredData || userData;

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
        <Text style={{ fontSize: 23, color: "white", paddingTop: 30 }}>Donor List</Text>
      </View>
{/* ========================filter for the donor list =========================== */}
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
{/*=============================================================================================  */}
      
      <View style={{ paddingVertical: 15, rowGap: 10 }}>
        {(displayData ||[]).map((item) => (
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
              subtitleStyle={{ width: 500, paddingTop: 5 }}
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
    </>
  );
}

export default DonorList;
