import React, {useCallback, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {MarketItemClickContext} from '../App';

const MarketListRenderItem = ({item}) => {
  const {setClickedItem} = useContext(MarketItemClickContext);

  const handleClick = useCallback(() => {
    setClickedItem(item.Price);
  }, [item.Price]);

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handleClick}>
      <View style={marketTabStyle.marketListItemView}>
        {Object.keys(item).map(key => (
          <Text
            key={key}
            style={[
              marketTabStyle.listItemText,
              key === 'Change' && item.Change > 0
                ? marketTabStyle.positiveChangeTxtColor
                : key === 'Change' && item.Change < 0
                ? marketTabStyle.negativeChangeTxtColor
                : null,
            ]}>
            {item[key]}
          </Text>
        ))}
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(MarketListRenderItem);

const marketTabStyle = StyleSheet.create({
  positiveChangeTxtColor: {
    color: '#8bce9e',
  },
  negativeChangeTxtColor: {
    color: '#ff8691',
  },
  marketListItemView: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 30,
    marginRight: 20,
  },
  listItemText: {
    textAlign: 'left',
    color: 'black',
    fontWeight: 'bold',
    width: Dimensions.get('window').width / 4,
  },
});
