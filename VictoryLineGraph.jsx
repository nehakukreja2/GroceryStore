import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryScatter,
  VictoryTooltip,
} from 'victory-native';

const VictoryLineGraph = () => {
  const [tooltipData, setTooltipData] = useState(null);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handlePointClick = datum => {
    setTooltipData(datum);
    setTooltipVisible(true);
  };

  const data = [
    {x: 1, y: 2},
    {x: 2, y: 3},
    {x: 3, y: 5},
    {x: 4, y: 7},
    {x: 5, y: 11},
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
          <View>
            <VictoryChart theme={VictoryTheme.material}>
              <VictoryLine
                data={data}
                style={{data: {stroke: 'green', strokeWidth: 4}}}
              />
              <VictoryScatter
                data={data}
                size={8}
                style={{data: {fill: 'green'}}}
                labels={({datum}) => `y: ${datum.y}`}
                labelComponent={
                  <VictoryTooltip
                    center={{y: 50}}
                    flyoutHeight={60}
                    pointerLength={0}
                    flyoutWidth={150}
                  />
                }
                events={[
                  {
                    target: 'data',
                    eventHandlers: {
                      onPress: (_, eventData) => {
                        console.log('onPress');
                        handlePointClick(eventData.datum);
                        return [
                          {target: 'data', mutation: () => ({active: true})},
                        ];
                      },
                    },
                  },
                ]}
              />
            </VictoryChart>
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
export default VictoryLineGraph;
