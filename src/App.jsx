import * as React from 'react';
import {SafeAreaView} from 'react-native';
import { DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/HomeScreen';
import NotificationsScreen from './components/NotificationsScreen';
import {DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator()

export default props => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName='Home'
                    screenOptions={{
                        statusBarColor: '#27374D',
                        headerStyle: {
                            backgroundColor: '#526D82',
                        },
                        headerTintColor: '#DDE6ED',
                        headerTitleAlign: 'center',
                    }}
                
                >
                    <Drawer.Screen name='Home' component={HomeScreen}/>
                    <Drawer.Screen name='Notifications' component={NotificationsScreen}/>
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}