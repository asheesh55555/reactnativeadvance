import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import FetchExample from './FetchExample';
import DisplayMenuScreen from './DisplayMenuScreen';
import DisplaydishesScreen from './DisplaydishesScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    ApiCall: FetchExample,
    DisplayMenu: DisplayMenuScreen,
    Displaydishes: DisplaydishesScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export  const AppContainer = createAppContainer(RootStack);