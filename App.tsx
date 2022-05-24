import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Navigator from './src/screens/navigator';
import ItemScreen from "./src/screens/item";
import EditarItem from './src/screens/editarItem';

const app: React.FC = () => {
  return(
   <Navigator/>
  );
}

export default app;