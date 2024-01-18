import React, {useCallback, useContext, useState, useEffect} from 'react';
import {View, FlatList, Text, StyleSheet, TextInput} from 'react-native';
import TabHeaderView from './TabHeaderView';
import MarketListRenderItem from './MarketListRenderItem';
import {MarketItemClickContext} from '../App';

const MarketTabView = ({route}) => {
  console.log('Rendering MarketTabView');
  const [suggestions, setSuggestions] = useState([]);
  const [timeoutToClear, settimeoutToClear] = useState('');

  useEffect(() => {
    setSuggestions(route.params.data);
  }, []);

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
    const filteredData = suggestions.filter(suggestion => {
      console.log('suggestion', suggestion);
      return suggestion.toLowerCase().includes(value.toLowerCase());
    });
    setSuggestions(filteredData);
    console.log(value);
    console.log(filteredData);
    console.log('Suggestions:', suggestions);
  }, 500);

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
