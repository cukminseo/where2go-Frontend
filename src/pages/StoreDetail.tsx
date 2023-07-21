import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

const StoreDetail = props => {
  useEffect(() => {
    console.log('매장보기 ', '매장입니다~~~');
  }, []);

  return (
    <View>
      <Text onPress={() => props.setStoreDetail(false)}>매장보기</Text>
    </View>
  );
};

export default StoreDetail;
