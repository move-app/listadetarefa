import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppList from './AppList';
import AppForm from './AppForm';
import * as Icon from 'react-native-feather';
const {Navigator, Screen} = createBottomTabNavigator();
export default function AppTab(){
    return(
        <NavigationContainer>
            <Navigator
            
             screenOptions={{ 
                
                headerStyle: 
                { elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabBarStyle: {
                    flexDirection:'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                tabBarLabelStyle: {
                    fontSize: 13,
                    marginLeft: 16
                },
                tabBarInactiveBackgroundColor:'#fafafc',
                tabBarActiveBackgroundColor: '#ebebf5',
                tabBarInactiveTintColor: '#c1bccc',
                tabBarActiveTintColor:'#32264d'
 }
 
}
 >
    <Screen name="AppList" 
component={AppList} options={{ 
tabBarLabel: "Tarefas" }} />
 <Screen name="AppForm" 
component={AppForm} options={{ 
tabBarLabel: "Adicionar" }} />
 </Navigator>
 </NavigationContainer>
    );
}
