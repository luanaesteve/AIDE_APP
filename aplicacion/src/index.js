import react from 'react';
import {View, Text} from 'react-native';
import {ScreenHome} from './UI/Components/HomeScreen';
import {BottomNavigation} from './UI/Components/Bottom';
import { NavigationContainer } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='welcome'>
              <h1>skjajakjajkjkaakj</h1>
                <Stack.Screen name="welcome"component={WelcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="welcome"component={WelcomeScreen} options={{ title: ', headerShown: false' }} />
            </Stack.Navigator>
        </NavigationContainer>
    ) }