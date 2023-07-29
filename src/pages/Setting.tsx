import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {LoggedInParamList} from '../../App';
import {Text, View} from 'react-native';

/*
 * 하단 네비게이션 화면 중 하나로 아직 구현되지 않았음.
 * [주의] 마이페이지를 누르면 해당 페이지에서 네비게이션 바는 안 보이도록 해야 함.
 */

type SettingScreenProps = NativeStackScreenProps<LoggedInParamList, 'Setting'>;
function Setting({}: SettingScreenProps) {
  return (
    <View>
      <Text>마이페이지</Text>
    </View>
  );
}

export default Setting;
