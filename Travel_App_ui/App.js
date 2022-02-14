/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoardScreen from './src/screens/OnBoardScreen';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import React from 'react';
const Stack = createStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name='OnBoardScreen' component={OnBoardScreen}/>
                <Stack.Screen name='HomeScreen' component={HomeScreen}/>
                <Stack.Screen name='DetailsScreen' component={DetailsScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
