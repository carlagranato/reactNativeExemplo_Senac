import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./home";
import LoginScreen from "./login";
import ItemScreen from "./item";
import Item from '../models/item';
import EditarItem from "../screens/editarItem";


const Navigator: React.FC = () => {

    const Stack = createNativeStackNavigator()
  
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={LoginScreen}/>
          <Stack.Screen name='Home' component={HomeScreen}/> 
          <Stack.Screen  name='Item' component={ItemScreen}/>
          <Stack.Screen  name='EditaItem' component={EditarItem}/>
        </Stack.Navigator>
      </NavigationContainer>
      
    );
  };  
  
  export type StackParams = {

    Login: undefined,
    Home: undefined,
    Item: {item: Item },
    EditarItem: {item: Item},

  };

  export default Navigator;