import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Loading from '../components/Loading/Loading';
import HomeUser from '../components/HomeUser/HomeUser';
import { BottomNavigation, Text } from 'react-native-paper';
import Challans from '../components/Challans/Challans';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import { LogBox } from 'react-native';

// LogBox.ignoreLogs([
//   'Warning: A props object containing a "key" prop is being spread into JSX'
// ]);

const UserHomeRoute = ({ navigation }) => {
    const Tab = createBottomTabNavigator();

    
    return (
        <>


            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: '#03045e',
                    tabBarInactiveTintColor: '#b4b8ab',
                    tabBarStyle: {},
                })}
            >
                <Tab.Screen name="Home" component={HomeUser} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                    tabBarLabelStyle: { fontSize: 15, fontFamily: 'Manrope' },
                }} />
                <Tab.Screen name="Challans" component={Challans} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="alert-rhombus" color={color} size={size} />
                    ),
                    tabBarLabelStyle: { fontSize: 15, fontFamily: 'Manrope' },
                }} />

                <Tab.Screen name="Logout" component={Challans} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="logout" color={color} size={size} />
                    ),
                    tabBarLabelStyle: { fontSize: 15, fontFamily: 'Manrope' },
                }} />
            </Tab.Navigator>

        </>
    );
}

const styles = StyleSheet.create({})

export default UserHomeRoute;
