import React, {useCallback, useContext, useState} from 'react';
import {View, FlatList, Text, StyleSheet, TextInput} from 'react-native';
import TabHeaderView from './TabHeaderView';
import MarketListRenderItem from './MarketListRenderItem';
import {MarketItemClickContext} from '../App';

const MarketTabView = ({route}) => {
  const {setClickedItem} = useContext(MarketItemClickContext);
  const [suggestions, setSuggestions] = useState('');

  const debounce = func => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleSearch = value => {
    console.log('Fetching suggestions for:', value);
    console.log(filteredData);
    setSuggestions(filteredData);
  };

  const _renderItem = ({item}) => (
    <MarketListRenderItem setClickedItem={setClickedItem} item={item} />
  );

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <TabHeaderView
        onChildElementClick={handleSearch}
        title="Market"
        subtitle="Manage your Crypto Market Active"
      />
      <FlatList
        data={route.params.data}
        renderItem={_renderItem}
        keyExtractor={item => item.Market}
      />
    </View>
  );
};

export default MarketTabView;
