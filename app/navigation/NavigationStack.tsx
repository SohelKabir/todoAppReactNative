import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { navigationRef } from './NavigationService';

import Login from 'app/screens/Login';
import Home from 'app/screens/Home';
import ForgotPassword from 'app/screens/ForgotPassword';

import ThemeController from '../components/ThemeController';
import { StatusBar } from 'react-native';
import { ILoginState } from 'app/models/reducers/login';
import TodoDetails from '../screens/Todo/todoDetails';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const LoggedInStack = createStackNavigator();

const homeOptions = {
  title: 'Todo App',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerRight: () => <ThemeController />,
};
const todoDetailsOptions = {
  title: 'Todo Details',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  // headerRight: () => <ThemeController />,
};

interface IState {
  loginReducer: ILoginState;
}

interface IProps {
  theme: Theme;
}

const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;
  // const isLoggedIn = useSelector(
  //   (state: IState) => state.loginReducer.isLoggedIn,
  // );

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />

      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={homeOptions} />
        <Stack.Screen
          name="TodoDetails"
          component={TodoDetails}
          options={todoDetailsOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
