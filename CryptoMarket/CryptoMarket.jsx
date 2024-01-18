import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import CurrentBalance from './CurrentBalance';
import TopTab from './TopTab';
import {MarketItemClickContext} from '../App';

const CryptoMarket = () => {
  const [clickedItem, setClickedItem] = useState(0);
  console.log('Rendering CryptoMarket');
  return (
    <MarketItemClickContext.Provider value={{clickedItem, setClickedItem}}>
      <View style={cryptoStyle.baseView}>
        <CurrentBalance />
        <TopTab />
      </View>
    </MarketItemClickContext.Provider>
  );
};

export default CryptoMarket;

const cryptoStyle = StyleSheet.create({
  baseView: {
    backgroundColor: '#f8f9fa',
    flex: 1,
  },
  tabNavigatorContainer: {
    flex: 1,
    top: 15,
    paddingBottom: 40,
  },
});
