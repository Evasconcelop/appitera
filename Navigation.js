import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./Screens/Welcome";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import CreateProfile from "./Screens/CreateProfile";
import Main from "./Screens/Main";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
        />
         <Stack.Screen
          name="CreateProfile"
          component={CreateProfile}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerShown:false
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
