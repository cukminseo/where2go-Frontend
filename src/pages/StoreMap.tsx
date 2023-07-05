import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {LoggedInParamList} from '../../App';
import {Text, View} from 'react-native';

type StoreMapScreenProps = NativeStackScreenProps<
  LoggedInParamList,
  'StoreMap'
>;
function StoreMap({}: StoreMapScreenProps) {
  return (
    <View>
      <Text>지도</Text>
    </View>
  );
}

export default StoreMap;
