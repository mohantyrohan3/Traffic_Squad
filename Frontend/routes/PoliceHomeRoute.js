import React, { useEffect ,useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Loading from '../components/Loading/Loading';
import PoliceUser from '../components/PoliceUser/PoliceUser';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Logout from '../components/Logout/Logout';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const PoliceHomeRoute = ({navigation}) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
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
                <Tab.Screen name="Home" component={PoliceUser} options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                    tabBarLabelStyle: { fontSize: 15, fontFamily: 'Manrope' },
                }} />

                <Tab.Screen name="Logout" component={Logout} options={{
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

export default PoliceHomeRoute;
