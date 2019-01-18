import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export const AppContainer = createAppContainer(RootStack);