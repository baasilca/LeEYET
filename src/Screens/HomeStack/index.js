import React from 'react';
import { LogBox } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../PostAuth/HomeScreen'
import Login from '../PreAuth/Login'
import SignUp from '../PreAuth/SignUp'
import { useTheme } from 'react-native-paper';

const Stack = createNativeStackNavigator();

function App(props) {

  const theme = useTheme()
  
  LogBox.ignoreAllLogs();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator >
  );
}

export default App;
