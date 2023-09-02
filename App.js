import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from '././src/Screens/HomeStack'
import { StatusBar } from 'react-native'
import { PaperProvider,DefaultTheme } from 'react-native-paper';

export default Main = () => {
  
const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000',
    secondary:"#fff"
  },
};


  const Stack = createNativeStackNavigator();
  return (
      <PaperProvider theme={customTheme}>
        <StatusBar backgroundColor={"#000"} />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
  )
}
