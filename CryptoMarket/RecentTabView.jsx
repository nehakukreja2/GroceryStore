import React, {useContext} from 'react';
import {View, FlatList} from 'react-native';
import TabHeaderView from './TabHeaderView';
import MarketListRenderItem from './MarketListRenderItem';
import {MarketItemClickContext} from '../App';

const RecentTabView = ({route}) => {
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <TabHeaderView
        title="Recent"
        subtitle="Manage your Recent Crypto Market Active"
      />
      <FlatList
        data={route.params.data}
        renderItem={({item}) => <MarketListRenderItem item={item} />}
        keyExtractor={item => item.Market}
      />
    </View>
  );
};

export default RecentTabView;
