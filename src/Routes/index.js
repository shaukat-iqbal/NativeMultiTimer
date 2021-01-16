import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StartScreen,
    TimerList,
    AddTimer,
    EditTimer,
  MainPage
} from '../Pages';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);


  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="TimerList" component={TimerList} />
        <Stack.Screen name="MainPage" component={MainPage} />
        {/*<Stack.Screen name="GroupsList" component={GroupsList} />*/}
        <Stack.Screen name="AddTimer" component={AddTimer} />
        <Stack.Screen name="EditTimer" component={EditTimer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
