
import Login from './src/screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import BottomTabNavigation from './src/Navigation/BottomTabNavigation';
import Notifications from './src/screens/Notifications';
import DonorList from './src/screens/DonorList';
import { QueryClient, QueryClientProvider } from 'react-query';
import { DefaultTheme,Provider as PaperProvider } from 'react-native-paper';
import FilterDonor from './src/components/filterDonor';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();
const theme={
  ...DefaultTheme,
}
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <PaperProvider>
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Welcome'>
      
        
      <Stack.Screen 
        name='Login'
        component={Login}
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen
          name='Register'
          component={Register}
          options={{
            headerShown:false
          }}/>
          <Stack.Screen
        name='BottomTabNavigation'
        component={BottomTabNavigation}
        options={{
          headerShown:false,
        }}/>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown:false,
            }}/>
             <Stack.Screen
            name="Notifications"
            component={Notifications}
            options={{
              headerShown:false,
            }}/>
             <Stack.Screen
            name="DonorList"
            component={DonorList}
            options={{
              headerShown:false,
            }}/>
               <Stack.Screen
            name="filterDonor"
            component={FilterDonor}
            options={{
              headerShown:false,
            }}/>
           
    </Stack.Navigator>
  </NavigationContainer>
    </PaperProvider>
        
    </QueryClientProvider>

    
  );
};


