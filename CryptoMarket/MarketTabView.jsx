import React, {useCallback, useContext, useState, useEffect} from 'react';
import {View, FlatList, Text, StyleSheet, TextInput} from 'react-native';
import TabHeaderView from './TabHeaderView';
import MarketListRenderItem from './MarketListRenderItem';
import {MarketItemClickContext} from '../App';

const MarketTabView = ({route}) => {
  console.log('Rendering MarketTabView');
  const [suggestions, setSuggestions] = useState(route.params.data);
  const [timeoutToClear, settimeoutToClear] = useState('');

  const debounce = (callback, delay) => {
    return (...args) => {
      clearTimeout(timeoutToClear);
      settimeoutToClear(
        setTimeout(() => {
          callback(...args);
        }, delay),
      );
    };
  };

  const debouncedHandleSearch = debounce(value => {
    console.log('value', value);
    console.log('suggestions', suggestions);
    const filteredData = route.params.data.filter(item => {
      console.log('suggestion', item);
      return item.Market.toLowerCase().includes(value.toLowerCase());
    });
    setSuggestions(filteredData);
    console.log(value);
    console.log(filteredData);
    console.log('Suggestions:', suggestions);
  }, 1000);

  const handleSearch = value => {
    debouncedHandleSearch(value);
  };

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
        data={suggestions}
        renderItem={({item}) => <MarketListRenderItem item={item} />}
        keyExtractor={item => item.Market}
      />
    </View>
  );
};

export default MarketTabView;
