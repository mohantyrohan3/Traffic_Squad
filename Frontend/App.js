import React from 'react';
// import {
//   SafeAreaView,
//   Text,
//   View,
// } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginRoute from './routes/LoginRoute';
import RegisterRoute from './routes/RegisterRoute';
import PoliceHomeRoute from './routes/PoliceHomeRoute';
import UserHomeRoute from './routes/UserHomeRoute';
import ChallanUserRoute from './routes/ChallanUserRoute';
import FirstScreenRoute from './routes/FirstScreenRoute';
import PoliceLoginRoute from './routes/PoliceLoginRoute';
import Logout from './components/Logout/Logout';

const App = () => {
  const Stack = createNativeStackNavigator();
  const auth = true;
  const user = "user";

  return (
    <PaperProvider>
      {/* <Login /> */}
      <NavigationContainer>
        {!auth ?

          (<Stack.Navigator>
            <Stack.Screen name="FirstScreen" component={FirstScreenRoute} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginRoute} options={{ headerShown: false }} />
            <Stack.Screen name="PoliceLogin" component={PoliceLoginRoute} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterRoute} options={{ headerShown: false }} />
          </Stack.Navigator>)
          :

          user === "police" ?
            (<Stack.Navigator>
              <Stack.Screen name="PoliceUser" component={PoliceHomeRoute} options={{ headerShown: false }} />
              <Stack.Screen name="logout" component={Logout} options={{ headerShown: false }} />
              
            </Stack.Navigator>
            ) :
            (<Stack.Navigator>
              <Stack.Screen name="HomeUser" component={UserHomeRoute} options={{ headerShown: false }} />
              <Stack.Screen name="ChallanUser" component={ChallanUserRoute} options={{ headerShown: false }} />
            </Stack.Navigator>)
        }

      </NavigationContainer>
    </PaperProvider>
  );
}


export default App;
