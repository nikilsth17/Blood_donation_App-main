import React from 'react';
import { View, Text } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
// import { setOpen } from '../store/slice/snackbarSlice';

const CustomSnackbar = () => {
  const { open, severity, message } = useSelector((state) => state.snackbar);
  // const dispatch = useDispatch();

  // const onDismissSnackBar = () => {
  //   dispatch(setOpen(false));
  // };

  return (
    <View style={{ flex: 1, 
        justifyContent: 'space-between', }}>
      <Snackbar
        visible={open}
        onDismiss={onDismissSnackBar}
        duration={6000}
        action={{
          label: 'Dismiss',
          onPress: onDismissSnackBar,
        }}
      >
        <Text style={{ color: severity === 'success' ? 'green' : 'red' }}>
          {message}
        </Text>
      </Snackbar>
    </View>
  );
};

export default CustomSnackbar;
