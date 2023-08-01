import React, {useCallback, useRef, useState} from 'react';
import {
  Alert,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import DismissKeyBoardView from '../components/DismissKeyBoardView';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as commonStyles from './styles.js';

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

function SignUp({navigation}: SignUpScreenProps) {
  const iconBack = require('../assets/iconBack.png');
  const goBack = () => {
    navigation.goBack();
  };
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nickName, setNickName] = useState('');
  const emailRef = useRef<TextInput | null>(null);
  const nameRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);
  const checkPasswordRef = useRef<TextInput | null>(null);
  const phoneNumberRef = useRef<TextInput | null>(null);
  const nickNameRef = useRef<TextInput | null>(null);

  /* 각 input box들의 focus 상태 관리*/
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isCheckPasswordFocused, setIsCheckPasswordFocused] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isPhoneNumberFocused, setIsPhoneNumberFocused] = useState(false);
  const [isNickNameFocused, setIsNickNameFocused] = useState(false);

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

  const handleCheckPasswordFocus = () => {
    setIsCheckPasswordFocused(true);
  };

  const handleCheckPasswordBlur = () => {
    setIsCheckPasswordFocused(false);
  };

  const handleNameFocus = () => {
    setIsNameFocused(true);
  };

  const handleNameBlur = () => {
    setIsNameFocused(false);
  };

  const handlePhoneNumberFocus = () => {
    setIsPhoneNumberFocused(true);
  };

  const handlePhoneNumberBlur = () => {
    setIsPhoneNumberFocused(false);
  };

  const handleNickNameFocus = () => {
    setIsNickNameFocused(true);
  };

  const handleNickNameBlur = () => {
    setIsNickNameFocused(false);
  };
  /*----------------------------------여기까지..*/

  const onChangeEmail = useCallback(text => {
    setEmail(text.trim());
  }, []);
  const onChangeName = useCallback(text => {
    setName(text.trim());
  }, []);
  const onChangePassword = useCallback(text => {
    setPassword(text.trim());
  }, []);
  const onChangeCheckPassword = useCallback(text => {
    setCheckPassword(text.trim());
  }, []);
  // const onChangePhoneNumber = useCallback(text => {
  //   setPhoneNumber(text.trim());
  // }, []);
  const onChangePhoneNumber = useCallback(text => {
    const formattedText = formatPhoneNumber(text);
    setPhoneNumber(formattedText);
  }, []);
  const onChangeNickName = useCallback(text => {
    setNickName(text.trim());
  }, []);
  const onSubmit = useCallback(() => {
    if (!email || !email.trim()) {
      return Alert.alert('알림', '이메일을 입력해주세요.');
    }
    if (!name || !name.trim()) {
      return Alert.alert('알림', '이름을 입력해주세요.');
    }
    if (!password || !password.trim()) {
      return Alert.alert('알림', '비밀번호를 입력해주세요.');
    }
    if (
      !/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(
        email,
      )
    ) {
      return Alert.alert('알림', '올바른 이메일 주소가 아닙니다.');
    }
    if (!/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@^!%*#?&]).{8,50}$/.test(password)) {
      return Alert.alert(
        '알림',
        '비밀번호는 영문,숫자,특수문자($@^!%*#?&)를 모두 포함하여 8자 이상 입력해야합니다.',
      );
    }
    console.log(email, name, password, checkPassword, phoneNumber, nickName);
    Alert.alert('알림', '회원가입 되었습니다.');
  }, [email, name, password, checkPassword, phoneNumber, nickName]);

  const formatPhoneNumber = text => {
    const numericText = text.replace(/\D/g, '');
    let formattedPhoneNumber = '';

    if (numericText.length > 3) {
      formattedPhoneNumber += numericText.slice(0, 3) + '-';
      if (numericText.length > 7) {
        formattedPhoneNumber += numericText.slice(3, 7) + '-';
        formattedPhoneNumber += numericText.slice(7, 11);
      } else {
        formattedPhoneNumber += numericText.slice(3, 7);
      }
    } else {
      formattedPhoneNumber = numericText;
    }

    return formattedPhoneNumber;
  };

  const existSignUpData =
    email && name && password && checkPassword && phoneNumber && nickName;

  // const placeHolderStyle = [commonStyles.typoStyle.body2, styles.textInput];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.header__backbutton} onPress={goBack}>
          <Image style={styles.header__backbuttonImg} source={iconBack} />
        </Pressable>
        <Text style={[commonStyles.typoStyle.menu2, styles.header__text]}>
          회원가입
        </Text>
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>이메일</Text>
        <TextInput
          style={[
            commonStyles.typoStyle.body2,
            styles.textInput,
            isEmailFocused
              ? {borderWidth: StyleSheet.hairlineWidth, borderColor: 'green'}
              : {},
          ]}
          onChangeText={onChangeEmail}
          placeholder="이메일을 입력해주세요"
          placeholderTextColor={commonStyles.PLACEHOLDER}
          textContentType="emailAddress"
          value={email}
          returnKeyType="next"
          keyboardType="email-address"
          clearButtonMode="while-editing"
          ref={emailRef}
          onSubmitEditing={() => passwordRef.current?.focus()}
          onFocus={handleEmailFocus}
          onBlur={handleEmailBlur}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          style={[
            commonStyles.typoStyle.body2,
            styles.textInput,
            isPasswordFocused
              ? {borderWidth: StyleSheet.hairlineWidth, borderColor: 'green'}
              : {},
          ]}
          placeholder="비밀번호를 입력해주세요(영문,숫자,특수문자)"
          placeholderTextColor={commonStyles.PLACEHOLDER}
          onChangeText={onChangePassword}
          value={password}
          keyboardType={Platform.OS === 'android' ? 'default' : 'ascii-capable'}
          textContentType="password"
          secureTextEntry
          returnKeyType="next"
          clearButtonMode="while-editing"
          ref={passwordRef}
          onSubmitEditing={() => checkPasswordRef.current?.focus()}
          onFocus={handlePasswordFocus}
          onBlur={handlePasswordBlur}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>비밀번호 확인</Text>
        <TextInput
          style={[
            commonStyles.typoStyle.body2,
            styles.textInput,
            isCheckPasswordFocused
              ? {borderWidth: StyleSheet.hairlineWidth, borderColor: 'green'}
              : {},
          ]}
          placeholder="비밀번호를 입력해주세요(영문,숫자,특수문자)"
          placeholderTextColor={commonStyles.PLACEHOLDER}
          onChangeText={onChangeCheckPassword}
          value={checkPassword}
          keyboardType={Platform.OS === 'android' ? 'default' : 'ascii-capable'}
          textContentType="password"
          secureTextEntry
          returnKeyType="next"
          clearButtonMode="while-editing"
          ref={checkPasswordRef}
          onSubmitEditing={() => nameRef.current?.focus()}
          onFocus={handleCheckPasswordFocus}
          onBlur={handleCheckPasswordBlur}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>이름</Text>
        <TextInput
          style={[
            commonStyles.typoStyle.body2,
            styles.textInput,
            isNameFocused
              ? {borderWidth: StyleSheet.hairlineWidth, borderColor: 'green'}
              : {},
          ]}
          placeholder="이름을 입력해주세요."
          placeholderTextColor={commonStyles.PLACEHOLDER}
          onChangeText={onChangeName}
          value={name}
          textContentType="name"
          returnKeyType="next"
          clearButtonMode="while-editing"
          ref={nameRef}
          onSubmitEditing={() => phoneNumberRef.current?.focus()}
          onFocus={handleNameFocus}
          onBlur={handleNameBlur}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>휴대폰 번호</Text>
        <TextInput
          style={[
            commonStyles.typoStyle.body2,
            styles.textInput,
            isPhoneNumberFocused
              ? {borderWidth: StyleSheet.hairlineWidth, borderColor: 'green'}
              : {},
          ]}
          placeholder="휴대폰번호를 입력해주세요."
          placeholderTextColor={commonStyles.PLACEHOLDER}
          onChangeText={onChangePhoneNumber}
          value={phoneNumber}
          keyboardType="numeric"
          textContentType="telephoneNumber"
          returnKeyType="next"
          clearButtonMode="while-editing"
          ref={phoneNumberRef}
          onSubmitEditing={() => nickNameRef.current?.focus()}
          onFocus={handlePhoneNumberFocus}
          onBlur={handlePhoneNumberBlur}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>닉네임</Text>
        <TextInput
          style={[
            commonStyles.typoStyle.body2,
            styles.textInput,
            isNickNameFocused
              ? {borderWidth: StyleSheet.hairlineWidth, borderColor: 'green'}
              : {},
          ]}
          placeholder="닉네임을 입력해주세요."
          placeholderTextColor={commonStyles.PLACEHOLDER}
          onChangeText={onChangeNickName}
          value={nickName}
          textContentType="name"
          returnKeyType="send"
          clearButtonMode="while-editing"
          ref={nickNameRef}
          onSubmitEditing={onSubmit}
          blurOnSubmit={false}
          onFocus={handleNickNameFocus}
          onBlur={handleNickNameBlur}
        />
      </View>
      <Pressable
        style={
          existSignUpData
            ? StyleSheet.compose(styles.signUpButton, styles.signUpButtonActive)
            : styles.signUpButton
        }
        disabled={!existSignUpData}
        onPress={onSubmit}>
        <Text style={[commonStyles.typoStyle.btn, styles.signUpButtonText]}>
          회원가입
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // 흰색으로 변경
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  header__backbutton: {
    width: 30,
    height: 30,
  },
  header__backbuttonImg: {
    width: '100%',
    height: '100%',
  },
  header__text: {
    paddingHorizontal: 10,
  },
  textInput: {
    padding: 15,
    borderRadius: 12,
    backgroundColor: commonStyles.COLOR_GR4,

    // borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inputWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'yellow',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 15,
  },
  signUpButton: {
    backgroundColor: commonStyles.COLOR_GR3,
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    marginVertical: 7,
    marginHorizontal: 20,
  },
  signUpButtonActive: {
    backgroundColor: commonStyles.COLOR_GREEN0,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  signUpButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default SignUp;
