
import Login from './src/screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import { Provider } from 'react-redux';
import reduxStore from "./src/store";
import BottomTabNavigation from './src/Navigation/BottomTabNavigation';
import Notifications from './src/screens/Notifications';
import DonorList from './src/screens/DonorList';
import { QueryClient, QueryClientProvider } from 'react-query';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
            <Provider store={reduxStore}>
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
             
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    </QueryClientProvider>

    
  );
};


