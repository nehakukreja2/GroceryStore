import {Text, TouchableOpacity, View, Image} from 'react-native';
import React, {createContext, useState} from 'react';
import GroceryStore from './GroceryStore';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import ItemDetail from './ItemDetail';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import LineGraph from './GraphLineChart';
import VictoryLineGraph from './VictoryLineGraph';
import CryptoMarket from './CryptoMarket/CryptoMarket';

export const MarketItemClickContext = createContext(null);

const App = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const Article = () => {
    return (
      <View>
        <Text>Article</Text>
      </View>
    );
  };

  const HomeScreenStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="GroceryStore"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="GroceryStore"
          component={GroceryStore}
          options={{headerShown: false}}
        />
        <Stack.Screen name="ItemDetail" component={ItemDetail} />
      </Stack.Navigator>
    );
  };

  // const MyStack = () => {
  //   return (
  //     <MarketItemClickContext.Provider value={{clickedItem, setClickedItem}}>
  //       <NavigationContainer>
  //         <Drawer.Navigator initialRouteName="CryptoMarket">
  //           <Drawer.Screen
  //             name="CryptoMarket"
  //             component={CryptoMarket}
  //             options={({navigation}) => ({
  //               headerTitle: '',
  //               headerLeft: () => {
  //                 return (
  //                   <View style={{paddingLeft: 20}}>
  //                     <TouchableOpacity
  //                       onPress={() => {
  //                         navigation.openDrawer();
  //                       }}
  //                       activeOpacity={0.8}
  //                       style={{
  //                         borderRadius: 20,
  //                         height: 40,
  //                         width: 40,
  //                         backgroundColor: '#6272eb',
  //                         alignItems: 'center',
  //                         justifyContent: 'center',
  //                       }}>
  //                       <Image
  //                         style={{
  //                           height: 15,
  //                           width: 15,
  //                           tintColor: 'white',
  //                         }}
  //                         src="https://www.seekpng.com/png/full/116-1160198_four-dots-squared-comments-4-dots-icon-png.png"
  //                       />
  //                     </TouchableOpacity>
  //                   </View>
  //                 );
  //               },
  //               headerRight: () => (
  //                 <View
  //                   style={{
  //                     flexDirection: 'row',
  //                     alignItems: 'center',
  //                     justifyContent: 'space-between',
  //                     marginRight: 20,
  //                   }}>
  //                   <TouchableOpacity
  //                     style={{
  //                       borderRadius: 17.5,
  //                       height: 35,
  //                       width: 35,
  //                       alignItems: 'center',
  //                       justifyContent: 'center',
  //                       backgroundColor: '#e9ebfe',
  //                       marginRight: 8,
  //                     }}>
  //                     <Image
  //                       style={{
  //                         borderRadius: 10,
  //                         height: 20,
  //                         width: 20,
  //                         tintColor: '#6272eb',
  //                       }}
  //                       source={{
  //                         uri: 'https://cdn.icon-icons.com/icons2/834/PNG/512/plus_icon-icons.com_66718.png',
  //                       }}
  //                     />
  //                   </TouchableOpacity>
  //                   <TouchableOpacity
  //                     style={{
  //                       borderRadius: 17.5,
  //                       height: 35,
  //                       width: 35,
  //                       borderWidth: 1,
  //                       borderColor: '#b7b7b7',
  //                       alignItems: 'center',
  //                       justifyContent: 'center',
  //                       marginRight: 8,
  //                     }}>
  //                     <Image
  //                       style={{borderRadius: 10, height: 20, width: 20}}
  //                       source={{
  //                         uri: 'https://cdn-icons-png.flaticon.com/512/3119/3119338.png',
  //                       }}
  //                     />
  //                   </TouchableOpacity>
  //                   <Image
  //                     style={{borderRadius: 20, height: 40, width: 40}}
  //                     source={{
  //                       uri: 'https://pics.craiyon.com/2023-07-24/411db1840f5341a0869b56bc56f6700e.webp',
  //                     }}
  //                   />
  //                 </View>
  //               ),
  //             })}
  //           />
  //           <Drawer.Screen
  //             name="Home"
  //             component={HomeScreenStack}
  //             options={{headerShown: false}}
  //           />
  //           <Drawer.Screen
  //             name="LineGraph"
  //             component={LineGraph}
  //             options={{headerShown: false}}
  //           />
  //           <Drawer.Screen
  //             name="Article"
  //             component={VictoryLineGraph}
  //             options={{headerShown: false}}
  //           />
  //         </Drawer.Navigator>
  //       </NavigationContainer>
  //     </MarketItemClickContext.Provider>
  //   );
  // };

  const MyStack = () => {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="CryptoMarket">
          <Drawer.Screen
            name="CryptoMarket"
            component={CryptoMarket}
            options={({navigation}) => ({
              headerTitle: '',
              headerLeft: () => {
                return (
                  <View style={{paddingLeft: 20}}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.openDrawer();
                      }}
                      activeOpacity={0.8}
                      style={{
                        borderRadius: 20,
                        height: 40,
                        width: 40,
                        backgroundColor: '#6272eb',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        style={{
                          height: 15,
                          width: 15,
                          tintColor: 'white',
                        }}
                        src="https://www.seekpng.com/png/full/116-1160198_four-dots-squared-comments-4-dots-icon-png.png"
                      />
                    </TouchableOpacity>
                  </View>
                );
              },
              headerRight: () => (
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginRight: 20,
                  }}>
                  <TouchableOpacity
                    style={{
                      borderRadius: 17.5,
                      height: 35,
                      width: 35,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#e9ebfe',
                      marginRight: 8,
                    }}>
                    <Image
                      style={{
                        borderRadius: 10,
                        height: 20,
                        width: 20,
                        tintColor: '#6272eb',
                      }}
                      source={{
                        uri: 'https://cdn.icon-icons.com/icons2/834/PNG/512/plus_icon-icons.com_66718.png',
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      borderRadius: 17.5,
                      height: 35,
                      width: 35,
                      borderWidth: 1,
                      borderColor: '#b7b7b7',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: 8,
                    }}>
                    <Image
                      style={{borderRadius: 10, height: 20, width: 20}}
                      source={{
                        uri: 'https://cdn-icons-png.flaticon.com/512/3119/3119338.png',
                      }}
                    />
                  </TouchableOpacity>
                  <Image
                    style={{borderRadius: 20, height: 40, width: 40}}
                    source={{
                      uri: 'https://pics.craiyon.com/2023-07-24/411db1840f5341a0869b56bc56f6700e.webp',
                    }}
                  />
                </View>
              ),
            })}
          />
          <Drawer.Screen
            name="Home"
            component={HomeScreenStack}
            options={{headerShown: false}}
          />
          <Drawer.Screen
            name="LineGraph"
            component={LineGraph}
            options={{headerShown: false}}
          />
          <Drawer.Screen
            name="Article"
            component={VictoryLineGraph}
            options={{headerShown: false}}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  };

  return <MyStack />;
};

export default App;
