import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {Text, View} from 'react-native';

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
function SignUp({}: SignUpScreenProps) {
  return (
    <View>
      <Text>회원가입</Text>
    </View>
  );
}

export default SignUp;
