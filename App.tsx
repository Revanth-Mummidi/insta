import { View, Text, StatusBar } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import PostScreen from './src/screens/PostScreen';
import ReelsScreen from './src/screens/ReelsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import MyTabBar from './src/components/MyTabBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppBar from './src/components/AppBar';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    // <SafeAreaView>
    // <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content"  />
   
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} options={({ navigation }) => { return { headerShown: false } }} />
        <Tab.Screen name="Search" component={SearchScreen} options={({ navigation }) => { return { headerShown: false } }} />
        <Tab.Screen name="Post" component={PostScreen} options={({ navigation }) => { return { headerShown: false } }} />
        <Tab.Screen name="Reels" component={ReelsScreen} options={({ navigation }) => { return { headerShown: false } }} />
        <Tab.Screen name="Profile" component={ProfileScreen}  options={({ navigation }) => { return { headerShown: false } }}/>
      </Tab.Navigator>
      
    </NavigationContainer>
    // </SafeAreaView>
  );
}

export default App



