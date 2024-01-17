import React, {createRef} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const ItemDetail = ({navigate, route}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Image
        style={itemDetailsStyleSheet.itemImage}
        source={{uri: route.params.data.image}}
      />
      <Text style={itemDetailsStyleSheet.itemTitle}>
        {route.params.data.title}
      </Text>
      <Text
        style={[
          itemDetailsStyleSheet.itemTitle,
          itemDetailsStyleSheet.itemCategory,
        ]}>
        {route.params.data.category}
      </Text>
      <Text style={itemDetailsStyleSheet.itemTitle}>
        ${route.params.data.price}
      </Text>
      <Text style={itemDetailsStyleSheet.itemDescription}>
        {route.params.data.description}
      </Text>
    </View>
  );
};

export default ItemDetail;

const itemDetailsStyleSheet = StyleSheet.create({
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  itemTitle: {
    fontSize: 16,
    color: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontWeight: 'bold',
  },
  backIcon: {
    width: 20,
    height: 20,
    padding: 20,
  },
  itemCategory: {
    fontSize: 14,
    paddingVertical: 0,
    fontStyle: 'italic',
    color: 'grey',
  },
  itemDescription: {
    color: 'grey',
    paddingHorizontal: 20,
    paddingVertical: 2,
  },
});
