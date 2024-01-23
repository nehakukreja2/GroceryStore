import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const TabHeaderView = props => {
  console.log('Rendering TabHeaderView');
  const headers = ['Market', 'Price', 'Change', 'Market cap'];
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

  const optimizedFn = useCallback(props.onChildElementClick, []);

  return (
    <View>
      <View style={headerView.headerContainer}>
        <View>
          <Text style={headerView.titleText}>{props.title}</Text>
          <Text style={headerView.subtitleText}>{props.subtitle}</Text>
        </View>
        <View style={headerView.headerIcons}>
          <TouchableOpacity style={headerView.iconView}>
            <Image
              style={headerView.iconImgStyle}
              source={require('../Images/searchIcon.png')}
            />
          </TouchableOpacity>
          <View style={[headerView.iconView, {marginLeft: 10}]}>
            <Image
              style={headerView.iconImgStyle}
              source={{
                uri: 'https://static.thenounproject.com/png/384290-200.png',
              }}
            />
          </View>
        </View>
      </View>
      <TextInput
        placeholder="Search"
        onChangeText={value => {
          optimizedFn(value);
        }}
        style={headerView.searchTextInput}></TextInput>
      <View style={headerView.listheadersText}>
        {headers.map((header, index) => (
          <Text
            key={index}
            style={[
              headerView.headerText,
              index == headers.length - 1 && headerView.marketCapMargin,
            ]}>
            {header}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default React.memo(TabHeaderView);

const headerView = StyleSheet.create({
  headerContainer: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: 'black',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  subtitleText: {color: '#9ba0ba'},
  iconView: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#ebecf0',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImgStyle: {
    width: 20,
    height: 20,
    tintColor: '#a4a8c1',
  },
  headerIcons: {flexDirection: 'row'},
  marketCapMargin: {
    // marginRight: 100,
  },
  listheadersText: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    top: 10,
    paddingBottom: 10,
    justifyContent: 'space-between',
  },
  searchTextInput: {
    height: 40,
    paddingLeft: 10,
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 20,
    borderColor: '#ebecf0',
  },
});
