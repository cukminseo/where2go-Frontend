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
  KeyboardAvoidingView,
  Image,
  Dimensions,
} from 'react-native';
import * as commonStyles from './styles.js';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

function SignIn({navigation}: SignInScreenProps) {
  const mainLogo = require('../assets/biType01ColorPositive.png');
  const iconBack = require('../assets/iconBack.png');
  const loginOrBar = require('../assets/loginImages/loginOrBar.png');
  const bi_google = require('../assets/loginImages/bi_google.png');
  const bi_kakao = require('../assets/loginImages/bi_kakao.png');
  const idFindPwFindBar = require('../assets/loginImages/idFindPwFindBar.png');
  const goBack = () => {
    navigation.goBack();
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);

  /* 각 input box들의 focus 상태 관리*/
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const handleEmailFocus = () => {
    setIsEmailFocused(true);
  };

  const handleEmailBlur = () => {
    setIsEmailFocused(false);
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };
  /*----------------------------------여기까지..*/

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
    navigation.navigate('Agreement');
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
      {/* <KeyboardAvoidingView behavior="position"> */}
      <Pressable style={styles.header__backbutton} onPress={goBack}>
        <Image style={styles.header__backbuttonImg} source={iconBack} />
      </Pressable>
      <View style={styles.mainLogoContainer}>
        <Image style={styles.mainLogo} source={mainLogo} />
      </View>

      <View style={styles.emailLogin}>
        {/* 이메일입력 */}
        <TextInput
          style={[
            commonStyles.typoStyle.body2,
            styles.emailLogin__textInput,
            isEmailFocused
              ? {borderWidth: StyleSheet.hairlineWidth, borderColor: 'green'}
              : {},
          ]}
          placeholder="이메일을 입력해주세요"
          placeholderTextColor={commonStyles.PLACEHOLDER}
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
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
        />
        {/* 비밀번호입력 */}
        <TextInput
          style={[
            commonStyles.typoStyle.body2,
            styles.emailLogin__textInput,
            isPasswordFocused
              ? {borderWidth: StyleSheet.hairlineWidth, borderColor: 'green'}
              : {},
          ]}
          placeholder="비밀번호를 입력해주세요"
          placeholderTextColor={commonStyles.PLACEHOLDER}
          onChangeText={onChangePassword}
          value={password}
          autoComplete="password"
          textContentType="password"
          secureTextEntry
          returnKeyType="send"
          clearButtonMode="while-editing"
          ref={passwordRef}
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
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
          <Text
            style={[
              commonStyles.typoStyle.btn,
              styles.emailLogin__loginButtonText,
            ]}>
            로그인
          </Text>
        </Pressable>
        <Pressable style={styles.emailLogin__signUpButton} onPress={toSignUp}>
          <Text
            style={[
              commonStyles.typoStyle.body2,
              styles.emailLogin__signUpButtonText,
            ]}>
            회원가입
          </Text>
        </Pressable>
      </View>

      <View style={styles.loginSelectHairline}>
        <Image style={styles.loginSelectHairline__img} source={loginOrBar} />
      </View>

      <View style={styles.socialLoginContainer}>
        <View style={styles.socialLogin}>
          <Pressable style={styles.socialLogin__Button} onPress={toLoginKakao}>
            <Image style={styles.socialLogin__ButtonImg} source={bi_kakao} />
          </Pressable>
          <Pressable style={styles.socialLogin__Button} onPress={toLoginGoogle}>
            <Image style={styles.socialLogin__ButtonImg} source={bi_google} />
          </Pressable>
        </View>
      </View>

      <View style={styles.findUserContainer}>
        <View style={styles.findUser}>
          <Pressable style={styles.findUser__findButton} onPress={toFindId}>
            <Text
              style={[
                commonStyles.typoStyle.body2,
                styles.findUser__findButtonText,
              ]}>
              아이디찾기
            </Text>
          </Pressable>
          <Image
            style={styles.findUser__idFindPwFindBarImg}
            source={idFindPwFindBar}
          />
          <Pressable style={styles.findUser__findButton} onPress={toFindPw}>
            <Text
              style={[
                commonStyles.typoStyle.body2,
                styles.findUser__findButtonText,
              ]}>
              비밀번호찾기
            </Text>
          </Pressable>
        </View>
      </View>
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // 흰색으로 변경
  },
  header__backbutton: {
    marginVertical: 10,
    width: 30,
    height: 30,
  },
  header__backbuttonImg: {
    width: '100%',
    height: '100%',
  },
  mainLogoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  mainLogo: {
    width: 200,
    height: 200,
  },
  emailLogin: {
    paddingTop: 20,
    paddingBottom: 10,
  },
  emailLogin__textInput: {
    backgroundColor: '#F2F2F2', // 배경색
    borderRadius: 12,
    padding: 15,
    marginVertical: 7,
    marginHorizontal: 40,
  },
  emailLogin__ButtonZone: {
    paddingVertical: 7,
  },
  emailLogin__loginButton: {
    backgroundColor: commonStyles.COLOR_GR3,
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    marginVertical: 7,
    marginHorizontal: 40,
  },
  emailLogin__loginButtonActive: {
    backgroundColor: commonStyles.COLOR_GREEN0,
  },
  emailLogin__loginButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  emailLogin__signUpButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailLogin__signUpButtonText: {},

  loginSelectHairline: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    height: 40,
  },
  loginSelectHairline__img: {
    width: '80%',
    height: '80%',
  },

  socialLoginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialLogin: {
    flexDirection: 'row',
  },
  socialLogin__Button: {
    marginHorizontal: 10,
    height: 45,
    width: 45,
    //backgroundColor: 'yellow',
  },
  socialLogin__ButtonImg: {
    width: '100%',
    height: '100%',
  },

  findUserContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  findUser: {
    flexDirection: 'row',
    paddingTop: 50,
  },
  findUser__findButton: {
    paddingHorizontal: 10,
  },
  findUser__idFindPwFindBarImg: {},
  findUser__findButtonText: {},
});

export default SignIn;
