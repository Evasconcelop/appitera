import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

// Importar tus pantallas
import Home from "./Screens/Home";
import Settings from "./Screens/Settings";
import Stack from "./Screens/Stack";

// Crear el componente de navegación inferior
const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator
        initialRouteName="Home"
        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Settings" component={Settings}/>
        </Tab.Navigator>
    );
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs />
            </NavigationContainer>
    );
}
