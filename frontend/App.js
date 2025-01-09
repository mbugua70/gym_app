import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';


import SignupBusiness from './screens/SignupBusiness';
import SignupCustomer from './screens/SignupCustomer';
import Login from './screens/Login';


const Stack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();


function TopRootNavigator(){
  return (
    <>
   <TopTab.Navigator screenOptions={{

   }}>
     <TopTab.Screen name= 'Business'  component={SignupBusiness}/>
     <TopTab.Screen name='Customer'  component={SignupCustomer}/>
   </TopTab.Navigator>
    </>
  )
}

export default function App() {
  return (
    <>
     <StatusBar style='dark'/>
     <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerTitleAlign: 'left',
        }}>
          <Stack.Screen name="Login"  component={Login} options={{
            headerShown: false,
            contentStyle: {
              backgroundColor: "#fff",
            }
          }}/>
          <Stack.Screen name='Register' component={TopRootNavigator} options={{
            headerShadowVisible: false,
            headerTitle: "Rigister"
          }}/>

        </Stack.Navigator>
     </NavigationContainer>
    </>
  );
}
