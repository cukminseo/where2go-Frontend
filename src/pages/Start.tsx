/*
필요 구현 내용
이용자, 사장님 모두 signIn으로 이동, 리덕스로 클릭항목 저장하여
signIn 페이지에서 활용
*/
import React, {useCallback} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useAppDispatch} from '../store';
import {RootStackParamList} from '../../App';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View, Pressable, StyleSheet} from 'react-native';
import {typoStyle} from './styles.js';

type StartScreenProps = NativeStackScreenProps<RootStackParamList, 'Start'>;

function Start({navigation}: StartScreenProps) {
  const dispatch = useAppDispatch();
  const userSignIn = useCallback(() => {
    //사용자 로그인 setting
    navigation.navigate('SignIn');
  }, [navigation]);
  const ownersSignIn = useCallback(() => {
    //사장님 로그인 setting
    navigation.navigate('SignIn');
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={typoStyle.title2}>
        가게를 찾을땐 역시 어디가게{'\n'}가게를 찾을땐 역시 어디가게{'\n'}가게를
        찾을땐 역시 어디가게
      </Text>
      <View style={styles.selectButtonContainer}>
        <Pressable style={styles.selectButton} onPress={userSignIn}>
          <Text style={[typoStyle.btn, styles.selectButtonText]}>
            이용자로 시작
          </Text>
        </Pressable>
        <Pressable style={styles.selectButton} onPress={ownersSignIn}>
          <Text style={[typoStyle.btn, styles.selectButtonText]}>
            사장님으로 시작
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // 흰색으로 변경
    padding: 40,
  },
  selectButtonContainer: {
    marginTop: 100,
  },
  selectButton: {
    backgroundColor: '#4E6D5E',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    marginVertical: 7,
    marginHorizontal: 40,
  },
  selectButtonText: {
    textAlign: 'center',
    color: 'white',
  },
});

export default Start;
