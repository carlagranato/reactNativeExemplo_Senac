import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/home";
import LoginScreen from "./src/screens/login";
import ItemScreen from "./src/screens/item";

const app: React.FC = () => {

  const Stack = createNativeStackNavigator()

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Home' component={HomeScreen}/> 
        <Stack.Screen  name='Item' component={ItemScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};  

export default app;