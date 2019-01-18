import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import FetchExample from '../screens/FetchExample';
import DisplayMenuScreen from '../screens/DisplayMenuScreen';
import DisplaydishesScreen from '../screens/DisplaydishesScreen';
import AddonsScreen from '../screens/AddonsScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    ApiCall: FetchExample,
    DisplayMenu: DisplayMenuScreen,
    Displaydishes: DisplaydishesScreen,
    Addons: AddonsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export  const AppContainer = createAppContainer(RootStack);