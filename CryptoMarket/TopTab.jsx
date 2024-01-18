import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import RecentTabView from './RecentTabView';
import MarketTabView from './MarketTabView';

const Tab = createMaterialTopTabNavigator();
const data = [
  {Market: 'AAPL', Price: 150.25, Change: 1.5, MarketCap: 2.5e6},
  {Market: 'GOOGL', Price: 2800.75, Change: -0.25, MarketCap: 1.9e6},
  {Market: 'MSFT', Price: 300.5, Change: 2.75, MarketCap: 2.8e9},
  {Market: 'AMZN', Price: 3500.0, Change: -1.2, MarketCap: 1.7e8},
  {Market: 'TSLA', Price: 750.8, Change: 5.6, MarketCap: 1.5e7},
  {Market: 'FB', Price: 325.4, Change: 0.8, MarketCap: 950e7},
  {Market: 'NFLX', Price: 550.6, Change: -2.3, MarketCap: 40e6},
  {Market: 'GOOG', Price: 2700.9, Change: 1.2, MarketCap: 1.8e5},
  {Market: 'IBM', Price: 120.3, Change: -0.5, MarketCap: 60e6},
  {Market: 'INTC', Price: 55.75, Change: 0.9, MarketCap: 2e9},
];

function TopTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Market"
        component={MarketTabView}
        initialParams={{data: data}}
      />
      <Tab.Screen
        name="Recent"
        component={RecentTabView}
        initialParams={{data: data}}
      />
    </Tab.Navigator>
  );
}

export default TopTab;
