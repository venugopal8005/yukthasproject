import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landingpage from './componenets/Landingpage';
import NextScreen from './componenets/NextScreen.js'; // Replace with your next screen component
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Landingpage}
          options={{ headerShown: false }} // Hide header for splash screen
        />
        <Stack.Screen
          name="NextScreen"
          component={NextScreen}
          options={{ title: 'Next Screen' }} // Customize header title
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;