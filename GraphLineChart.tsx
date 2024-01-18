import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import {flingGestureHandlerProps} from 'react-native-gesture-handler/lib/typescript/handlers/FlingGestureHandler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LineChart} from 'react-native-gifted-charts';

const LineGraph = () => {
  const customLabel = val => {
    return (
      <View style={{width: 70, marginLeft: 7}}>
        <Text style={{color: 'black', fontWeight: 'bold'}}>{val}</Text>
      </View>
    );
  };

  const lineData = [
    {
      label: '12am',
      value: 0,
      food: 'orange',
    },
    {
      label: '12am',
      value: 0,
    },
    {
      label: '12am',
      value: 280,
    },
    {
      label: '12am',
      value: 400,
      food: 'Oats',
    },
    {label: '12am', value: 360},
    {label: '12am', value: 600},
    {label: '12am', value: 540},
    {label: '12am', value: 850, food: 'Daal'},
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f1f5f4'}}>
      <View>
        <Text style={lineGraphStyle.headingText}> Glucose</Text>
        <View style={lineGraphStyle.graphView}>
          <Text style={lineGraphStyle.subheadingStyle}> Glucose Levels</Text>
          <Text style={lineGraphStyle.textStyle}> 11 Jan 2024</Text>
          <View style={lineGraphStyle.dropDownBox}>
            <Text style={lineGraphStyle.dropDownSelected}> Day</Text>
            <TouchableOpacity>
              <Image
                style={lineGraphStyle.dropDownIcon}
                source={require('./Images/arrowIcon.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={lineGraphStyle.listBox}>
            <TouchableOpacity>
              <Image
                style={lineGraphStyle.listIcon}
                source={require('./Images/listIcon.png')}
              />
            </TouchableOpacity>
            <Text style={lineGraphStyle.listTitle}>List</Text>
          </View>
          <View style={{height: 320, paddingLeft: 20, paddingTop: 30}}>
            <LineChart
              data={lineData}
              color={'#149e53'}
              thickness={4}
              dataPointsRadius={8}
              dataPointsColor={'#149e53'}
              yAxisThickness={0}
              scrollToEnd
              xAxisThickness={0}
              hideRules
              stepValue={100}
              height={300}
              maxValue={1000}
              focusEnabled={true}
              onPress={(item, index) => {
                console.log('press', item, index);
              }}
              xAxisLabelTextStyle={{
                fontSize: 8,
                top: 12,
                color: 'black',
              }}
              yAxisTextStyle={{
                textAlign: 'left',
                fontSize: 8,
                color: 'black',
              }}></LineChart>
            {/* <View
              style={{
                backgroundColor: 'white',
                position: 'absolute',
                borderColor: '#f7f7f7',
                borderRadius: 20,
                borderWidth: 2,
                width: 150,
                height: 80,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text>120 mg/dL</Text>
              <Text>Fasting 10:30 am</Text>
            </View> */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const lineGraphStyle = StyleSheet.create({
  headingText: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 20,
    color: 'black',
  },
  graphView: {
    backgroundColor: 'white',
    borderRadius: 15,
    height: 450,
    margin: 20,
  },
  subheadingStyle: {
    color: 'black',
    paddingLeft: 20,
    paddingTop: 20,
    fontWeight: 'bold',
  },
  textStyle: {
    fontSize: 10,
    paddingLeft: 20,
    fontWeight: 'bold',
    paddingVertical: 5,
    color: '#b8b8b8',
  },
  dropDownBox: {
    height: 40,
    width: 60,
    backgroundColor: '#fafafa',
    borderWidth: 2,
    borderColor: '#f7f7f7',
    borderRadius: 10,
    position: 'absolute',
    right: 90,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    top: 15,
  },
  dropDownSelected: {
    color: '#06057c',
    fontWeight: 'bold',
  },
  dropDownIcon: {
    width: 15,
    height: 15,
    tintColor: '#06057c',
  },
  listBox: {
    height: 40,
    width: 60,
    borderWidth: 2,
    borderColor: '#f7f7f7',
    borderRadius: 10,
    position: 'absolute',
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    top: 15,
  },
  listTitle: {
    color: 'black',
    fontWeight: 'bold',
    paddingLeft: 4,
  },
  listIcon: {
    width: 15,
    height: 15,
    tintColor: '#f705a3',
  },
  yaxisText: {
    fontSize: 9,
  },
});
export default LineGraph;
