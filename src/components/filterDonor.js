// FilterDonor.js
import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const FilterDonor = ({ onFilter }) => {
  const [fullName, setFullName] = useState('');
  const [bloodType, setBloodType] = useState('true');
  const [location, setLocation] = useState("true");

  const handleFilter = () => {
    // Make the API call and pass the filter criteria to the parent component
    onFilter({ fullName, bloodType, location });
  };

  return (
    <>
      <View>
        <Text>FullName</Text>
        <TextInput
          placeholder="fullname"
          keyboardType="default"
          onChangeText={(text) => setFullName(text)}
        />
      </View>
      <View>
        <Text>Blood Type</Text>
        <TextInput
          placeholder="bloodType"
          keyboardType="default"
          onChangeText={(text) => setBloodType(text)}
        />
      </View>
      <View>
        <Text>Location</Text>
        <TextInput
          placeholder="location"
          keyboardType="default"
          onChangeText={(text) => setLocation(text)}
        />
      </View>
      <Button onPress={handleFilter} title="Filter" />
    </>
  );
};

export default FilterDonor;
