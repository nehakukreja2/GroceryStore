import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import flatListstyles from './styles';
import React, {useCallback, useEffect, useMemo, useState} from 'react';

const GroceryStore = () => {
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

  const ListItem = ({item, index}: {item: GroceryItem; index: number}) => {
    return (
      <View
        style={[
          flatListstyles.listItemView,
          index !== grocery?.length - 1 && {
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
          },
        ]}>
        <View>
          <View style={flatListstyles.addbuttonView}>
            {item?.count === 0 ? (
              <TouchableOpacity
                style={flatListstyles.addButton}
                onPress={() => {
                  if (grocery?.includes(item)) {
                    item.count++;
                    setGrocery([...grocery]);
                  }
                }}>
                <Text style={flatListstyles.addButtonText}> Add</Text>
              </TouchableOpacity>
            ) : (
              <View style={flatListstyles.touchableOpacityView}>
                <TouchableOpacity
                  onPress={() => {
                    item.count--;
                    setGrocery([...grocery]);
                  }}
                  style={flatListstyles.addMinusButton}>
                  <Text style={flatListstyles.addButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={flatListstyles.counterText}>{item?.count}</Text>
                <TouchableOpacity
                  onPress={() => {
                    item.count++;
                    setGrocery([...grocery]);
                  }}
                  style={flatListstyles.addMinusButton}>
                  <Text style={flatListstyles.addButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            )}
            <Image style={flatListstyles.image} source={{uri: item.image}} />
            <View>
              <Text numberOfLines={1} style={flatListstyles.text}>
                {item.title}
              </Text>
              <View style={flatListstyles.detailWrapper}>
                <View>
                  <Text style={flatListstyles.smallText}>UOM</Text>
                  <Text style={flatListstyles.smallText}>02</Text>
                </View>
                <View>
                  <Text style={flatListstyles.smallText}>PACK SIZE</Text>
                  <Text style={flatListstyles.smallText}>02</Text>
                </View>
                <View>
                  <Text style={flatListstyles.smallText}>PER UNIT</Text>
                  <Text style={flatListstyles.smallText}>$ {item.price}</Text>
                </View>
                <View>
                  <Text style={flatListstyles.smallText}>TOTAL</Text>
                  <Text style={flatListstyles.smallText}>
                    $ {(item.price * item.count)?.toFixed(2)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={flatListstyles.safeAreaView}>
        <View style={flatListstyles.container}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {}}
            style={flatListstyles.arrowStyle}>
            <Image
              style={flatListstyles.moreIconImg}
              source={require('./Images/moreicon.jpeg')}
            />
          </TouchableOpacity>
          <Text style={flatListstyles.textStyle}>Golden Coral - Addison</Text>
          <Image
            style={flatListstyles.filterStyle}
            source={require('./Images/filter.png')}
          />
          <Image
            style={flatListstyles.searchIconStyle}
            source={require('./Images/searchIcon.png')}
          />
        </View>
        <View style={flatListstyles.flatListWrapper}>
          <FlatList
            data={grocery}
            renderItem={({item, index}) => (
              <ListItem item={item} index={index} />
            )}
            contentContainerStyle={flatListstyles.flatListContainerStyle}
          />
        </View>
      </SafeAreaView>
      <View style={flatListstyles.footerStyle}>
        <View style={flatListstyles.totalAmountTextView}>
          <Text style={flatListstyles.amountTextStyle}>
            $ {calculatedTotalPrice()?.toFixed(2)}
          </Text>
        </View>
        <View style={flatListstyles.viewCart}>
          <Text style={flatListstyles.viewCartTextStyle}>
            VIEW CART ({totalItems})
          </Text>
          <Image
            style={flatListstyles.rightArrowStyle}
            source={require('./Images/rightArrow.png')}
          />
        </View>
      </View>
    </>
  );
};

export default GroceryStore;
