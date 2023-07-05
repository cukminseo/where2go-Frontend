import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {Text, View} from 'react-native';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
function SignUp({}: SignInScreenProps) {
  return (
    <View>
      <Text>회원가입</Text>
    </View>
  );
}

export default SignUp;
