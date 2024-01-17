import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import groceryStyleSheet from './styles';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

const GroceryStore = ({navigation}) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [grocery, setGrocery] = useState<Array<GroceryItem>>([]);

  const getGroceries = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const json = await response.json();
      setGrocery(
        json?.map((item: GroceryItem) => ({
          ...item,
          count: 0,
        })),
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getGroceries();
  }, []);

  type Category = {
    Electronics: string;
    Jewelery: string;
    MenClothing: string;
    WomenClothing: string;
  };

  type Rating = {
    rate: number;
    count: number;
  };

  type GroceryItem = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: Category;
    image: string;
    rating: Rating;
    count: number;
  };

  const calculatedTotalPrice = useCallback(() => {
    const priceArr = grocery.map(item => {
      return item.price * item.count;
    });
    const totalSum = priceArr.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    return totalSum;
  }, [grocery]);

  const totalItems = useMemo(() => {
    let sum = 0;
    grocery.map(item => {
      if (item.count > 0) sum += 1;
    });
    return sum;
  }, [grocery]);

  const handleEmpty = () => {
    return <Text style={groceryStyleSheet.text}> No data present!</Text>;
  };

  const ListItem = ({item, index}: {item: GroceryItem; index: number}) => {
    return (
      <View
        style={[
          groceryStyleSheet.listItemView,
          index !== grocery?.length - 1 && {
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
          },
        ]}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('ItemDetail', {data: item});
          }}>
          <View>
            <View style={groceryStyleSheet.addbuttonView}>
              {item?.count === 0 ? (
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={groceryStyleSheet.addButton}
                  onPress={() => {
                    if (grocery?.includes(item)) {
                      item.count++;
                      setGrocery([...grocery]);
                    }
                  }}>
                  <Text style={groceryStyleSheet.addButtonText}> Add</Text>
                </TouchableOpacity>
              ) : (
                <View style={groceryStyleSheet.touchableOpacityView}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      item.count--;
                      setGrocery([...grocery]);
                    }}
                    style={groceryStyleSheet.addMinusButton}>
                    <Text style={groceryStyleSheet.addButtonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={groceryStyleSheet.counterText}>
                    {item?.count}
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      item.count++;
                      setGrocery([...grocery]);
                    }}
                    style={groceryStyleSheet.addMinusButton}>
                    <Text style={groceryStyleSheet.addButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              )}
              <Image
                style={groceryStyleSheet.image}
                source={{uri: item.image}}
              />
              <View>
                <Text numberOfLines={1} style={groceryStyleSheet.text}>
                  {item.title}
                </Text>
                <View style={groceryStyleSheet.detailWrapper}>
                  <View>
                    <Text style={groceryStyleSheet.smallText}>UOM</Text>
                    <Text style={groceryStyleSheet.smallText}>02</Text>
                  </View>
                  <View>
                    <Text style={groceryStyleSheet.smallText}>PACK SIZE</Text>
                    <Text style={groceryStyleSheet.smallText}>02</Text>
                  </View>
                  <View>
                    <Text style={groceryStyleSheet.smallText}>PER UNIT</Text>
                    <Text style={groceryStyleSheet.smallText}>
                      $ {item.price}
                    </Text>
                  </View>
                  <View>
                    <Text style={groceryStyleSheet.smallText}>TOTAL</Text>
                    <Text style={groceryStyleSheet.smallText}>
                      $ {(item.price * item.count)?.toFixed(2)}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={groceryStyleSheet.safeAreaView}>
        <View style={groceryStyleSheet.container}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.openDrawer();
            }}
            style={groceryStyleSheet.arrowStyle}>
            <Image
              style={groceryStyleSheet.moreIconImg}
              source={require('./Images/moreicon.jpeg')}
            />
          </TouchableOpacity>
          <Text style={groceryStyleSheet.textStyle}>
            Golden Coral - Addison
          </Text>
          <Image
            style={groceryStyleSheet.filterStyle}
            source={require('./Images/filter.png')}
          />
          <Image
            style={groceryStyleSheet.searchIconStyle}
            source={require('./Images/searchIcon.png')}
          />
        </View>
        <View style={groceryStyleSheet.flatListWrapper}>
          {!grocery && <Text> Loading</Text>}
          {grocery && (
            <FlatList
              ListEmptyComponent={handleEmpty}
              data={grocery}
              onRefresh={() => console.log('refreshing')}
              refreshing={false}
              renderItem={({item, index}) => (
                <ListItem item={item} index={index} />
              )}
              contentContainerStyle={groceryStyleSheet.flatListContainerStyle}
            />
          )}
        </View>
      </SafeAreaView>
      <View style={groceryStyleSheet.footerStyle}>
        <View style={groceryStyleSheet.totalAmountTextView}>
          <Text style={groceryStyleSheet.amountTextStyle}>
            $ {calculatedTotalPrice()?.toFixed(2)}
          </Text>
        </View>
        <View style={groceryStyleSheet.viewCart}>
          <Text style={groceryStyleSheet.viewCartTextStyle}>
            VIEW CART ({totalItems})
          </Text>
          <Image
            style={groceryStyleSheet.rightArrowStyle}
            source={require('./Images/rightArrow.png')}
          />
        </View>
      </View>
    </>
  );
};

export default GroceryStore;
