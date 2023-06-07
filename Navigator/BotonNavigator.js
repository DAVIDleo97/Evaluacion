import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import { View, Text } from 'react-native'
import React from 'react'

import Licores from '../Screens/Licores';
import Comida from '../Screens/Comida';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Licores" component={Licores} 
        options={{tabBarIcon: ({color, size})=>
        <AntDesign name="filter" size={24} color="black" />
        }}/>
        
        <Tab.Screen name="Comida" component={Comida} 
        options={{tabBarIcon: ({color, size})=>
        <AntDesign name="edit" size={24} color="black" />
        }}/>
      </Tab.Navigator>
    );
  }
  
export default function BottonTab(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}