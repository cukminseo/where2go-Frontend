import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {LoggedInParamList} from '../../App';
import {Text, View} from 'react-native';

type SettingScreenProps = NativeStackScreenProps<LoggedInParamList, 'Setting'>;
function Setting({}: SettingScreenProps) {
  return (
    <View>
      <Text>마이페이지</Text>
    </View>
  );
}

export default Setting;
