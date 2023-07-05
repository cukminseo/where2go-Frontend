import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {Text, View} from 'react-native';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;
function SignIn({}: SignInScreenProps) {
  return (
    <View>
      <Text>로그인</Text>
    </View>
  );
}

export default SignIn;
