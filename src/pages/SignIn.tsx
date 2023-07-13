import React, {useCallback, useState, useRef} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../App';
import {
  Alert,
  Text,
  TextInput,
  View,
  Pressable,
  StyleSheet,
} from 'react-native';
import {typoStyle} from './styles.js';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

function SignIn({navigation}: SignInScreenProps) {
  const goBack = () => {
    navigation.goBack();
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);
  const onChangeEmail = useCallback(text => {
    setEmail(text.trim());
  }, []);
  const onChangePassword = useCallback(text => {
    setPassword(text.trim());
  }, []);
  const existLoginData = email && password;

  const emailOnSubmit = useCallback(() => {
    Alert.alert('로그인', '로그인버튼 클릭 피드백입니다');
  }, []);

  const toSignUp = useCallback(() => {
    //회원가입버튼 콜백
    navigation.navigate('SignUp');
  }, [navigation]);
  const toLoginKakao = useCallback(() => {
    //카카오로그인 콜백
    Alert.alert('카카오로그인', '카카오로그인 클릭 콜백, toLoginKakao');
  }, []);
  const toLoginGoogle = useCallback(() => {
    //구글로그인 콜백
    Alert.alert('구글로그인', '구글로그인 클릭 콜백, toLoginGoogle');
  }, []);
  const toFindId = useCallback(() => {
    //아이디찾기 콜백
    Alert.alert('아이디찾기', '아이디찾기 클릭 콜백, toFindId');
  }, []);

  const toFindPw = useCallback(() => {
    //비밀번호 찾기 콜백
    Alert.alert('비밀번호 찾기', '비밀번호 찾기 클릭 콜백, toFindPw');
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={goBack}>
        <Text style={styles.header__backbuttonText}>
          뒤로가기{'\n'}(사진으로 첨부)
        </Text>
      </Pressable>
      <View>
        <Text style={[typoStyle.title1, styles.mainLogo]}>
          어디가게{'\n'}(사진으로 첨부)
        </Text>
      </View>

      <View style={styles.emailLogin}>
        {/* 이메일입력 */}
        <TextInput
          style={[typoStyle.body2, styles.emailLogin__textInput]}
          placeholder="이메일을 입력해주세요"
          value={email}
          importantForAutofill="yes"
          autoComplete="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={onChangeEmail}
          returnKeyType="next"
          clearButtonMode="while-editing"
          ref={emailRef}
          onSubmitEditing={() => passwordRef.current?.focus()}
          blurOnSubmit={false}
        />
        {/* 비밀번호입력 */}
        <TextInput
          style={[typoStyle.body2, styles.emailLogin__textInput]}
          placeholder="비밀번호를 입력해주세요"
          onChangeText={onChangePassword}
          value={password}
          autoComplete="password"
          textContentType="password"
          secureTextEntry
          returnKeyType="send"
          clearButtonMode="while-editing"
          ref={passwordRef}
          onSubmitEditing={emailOnSubmit}
        />
        <Pressable
          style={
            existLoginData
              ? StyleSheet.compose(
                  styles.emailLogin__loginButton,
                  styles.emailLogin__loginButtonActive,
                )
              : styles.emailLogin__loginButton
          }
          onPress={emailOnSubmit}
          disabled={!existLoginData}>
          <Text style={[typoStyle.btn, styles.emailLogin__loginButtonText]}>
            로그인
          </Text>
        </Pressable>
        <Pressable style={styles.emailLogin__signUpButton} onPress={toSignUp}>
          <Text style={[typoStyle.body2, styles.emailLogin__signUpButtonText]}>
            회원가입
          </Text>
        </Pressable>
      </View>

      <View style={styles.loginSelectHairline}>
        <Text>------또는------(사진으로첨부)</Text>
      </View>

      <View style={styles.socialLoginContainer}>
        <View style={styles.socialLogin}>
          <Pressable style={styles.socialLogin__Button} onPress={toLoginKakao}>
            <Text style={styles.socialLogin__ButtonText}>
              Kakao{'\n'}(사진으로첨부)
            </Text>
          </Pressable>
          <Pressable style={styles.socialLogin__Button} onPress={toLoginGoogle}>
            <Text style={styles.socialLogin__ButtonText}>
              Google{'\n'}(사진으로첨부)
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.findUserContainer}>
        <View style={styles.findUser}>
          <Pressable style={styles.findUser__findButton} onPress={toFindId}>
            <Text style={[typoStyle.body2, styles.findUser__findButtonText]}>
              아이디찾기
            </Text>
          </Pressable>
          <Pressable style={styles.findUser__findButton} onPress={toFindPw}>
            <Text style={[typoStyle.body2, styles.findUser__findButtonText]}>
              비밀번호찾기
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // 흰색으로 변경
  },
  header__backbuttonText: {
    paddingVertical: 30,
  },
  mainLogo: {
    textAlign: 'center',
    paddingVertical: 50,
  },
  emailLogin: {
    marginVertical: 30,
  },
  emailLogin__textInput: {
    backgroundColor: '#F2F2F2', // 배경색
    borderRadius: 12,
    padding: 15,
    marginVertical: 7,
    marginHorizontal: 40,
  },
  emailLogin__ButtonZone: {
    backgroundColor: 'yellow',
    paddingVertical: 7,
  },
  emailLogin__loginButton: {
    backgroundColor: '#DCDCDC',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    marginVertical: 7,
    marginHorizontal: 40,
  },
  emailLogin__loginButtonActive: {
    backgroundColor: '#4E6D5E',
  },
  emailLogin__loginButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  emailLogin__signUpButton: {
    alignItems: 'center',
  },
  emailLogin__signUpButtonText: {},

  loginSelectHairline: {
    alignItems: 'center',
    paddingVertical: 10,
  },

  socialLoginContainer: {
    alignItems: 'center',
  },
  socialLogin: {
    flexDirection: 'row',
    paddingVertical: 30,
  },
  socialLogin__Button: {
    paddingHorizontal: 10,
  },
  socialLogin__ButtonText: {},

  findUserContainer: {
    alignItems: 'center',
  },
  findUser: {
    flexDirection: 'row',
    paddingTop: 50,
  },
  findUser__findButton: {
    paddingHorizontal: 10,
  },
  findUser__findButtonText: {},
});

export default SignIn;
