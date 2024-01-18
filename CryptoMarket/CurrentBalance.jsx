import React, {useContext, useMemo} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import {MarketItemClickContext} from '../App';
// import BarGraph from './BarGraph';

const CurrentBalance = () => {
  console.log('Rendering CurrentBalance');
  const {clickedItem} = useContext(MarketItemClickContext);

  return (
    <View style={currentBalStyles.baseView}>
      <View style={currentBalStyles.balanceView}>
        <View>
          <Text>Current Balance (USD)</Text>
          <View style={{top: 8}}>
            <Text style={currentBalStyles.balanceText}>${clickedItem}</Text>
            <Text style={currentBalStyles.lightGreyText}>
              Last update yesterday
            </Text>
          </View>
        </View>
        <View style={currentBalStyles.dropDownView}>
          <Text style={currentBalStyles.lightGreyText}> USD</Text>
          <TouchableOpacity>
            <Image
              style={currentBalStyles.downArrow}
              source={require('../Images/arrowIcon.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <BarGraph />
      <View style={currentBalStyles.categoriesView}>
        <Text> All</Text>
        <Text> 4h</Text>
        <Text> 16h</Text>
        <Text> 1d</Text>
        <Text> 7d</Text>
        <Text> 30d</Text>
      </View>
    </View>
  );
};

const BarGraph = () => {
  console.log('render Map');
  const barChartData = [
    {value: 25, frontColor: '#f78f1a'},
    {value: 50, frontColor: '#2773c9'},
    {value: 74, frontColor: '#35ab56'},
    {value: 32, frontColor: '#f78f1a'},
    {value: 60, frontColor: '#2773c9'},
    {value: 25, frontColor: '#35ab56'},
    {value: 30, frontColor: '#f78f1a'},
    {value: 30, frontColor: '#2773c9'},
    {value: 30, frontColor: '#35ab56'},
    {value: 50, frontColor: '#35ab56'},
    {value: 26, frontColor: '#f78f1a'},
    {value: 39, frontColor: '#2773c9'},
  ];

  return (
    <View>
      <BarChart
        data={barChartData}
        hideYAxisText
        height={150}
        barWidth={15}
        withCustomBarColorFromData={true}
        flatColor={true}
        hideRules
        yAxisThickness={0}
        xAxisThickness={0}
        barBorderTopLeftRadius={15}
        barBorderTopRightRadius={15}
        spacing={11.5}
        disableScroll
      />
    </View>
  );
};

export default CurrentBalance;

const currentBalStyles = StyleSheet.create({
  baseView: {
    backgroundColor: 'white',
    height: 310,
    marginTop: 20,
    marginHorizontal: 20,
    borderWidth: 2,
    borderColor: '#ebecf0',
    borderRadius: 10,
  },
  balanceView: {
    paddingLeft: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceText: {
    fontWeight: 'bold',
    fontSize: 35,
  },
  lightGreyText: {color: '#9ba0ba'},
  dropDownView: {
    flexDirection: 'row',
    right: 20,
  },
  downArrow: {
    width: 20,
    height: 20,
    tintColor: '#9ba0ba',
  },
  categoriesView: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
});
