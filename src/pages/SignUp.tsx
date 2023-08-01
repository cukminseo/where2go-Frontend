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

  const canGoNext =
    email && name && password && checkPassword && phoneNumber && nickName;
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
          style={[commonStyles.typoStyle.body2, styles.textInput]}
          onChangeText={onChangeEmail}
          placeholder="이메일을 입력해주세요"
          placeholderTextColor="#666"
          textContentType="emailAddress"
          value={email}
          returnKeyType="next"
          keyboardType="email-address"
          clearButtonMode="while-editing"
          ref={emailRef}
          onSubmitEditing={() => passwordRef.current?.focus()}
          blurOnSubmit={false}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          style={[commonStyles.typoStyle.body2, styles.textInput]}
          placeholder="비밀번호를 입력해주세요(영문,숫자,특수문자)"
          placeholderTextColor="#666"
          onChangeText={onChangePassword}
          value={password}
          keyboardType={Platform.OS === 'android' ? 'default' : 'ascii-capable'}
          textContentType="password"
          secureTextEntry
          returnKeyType="send"
          clearButtonMode="while-editing"
          ref={passwordRef}
          onSubmitEditing={() => checkPasswordRef.current?.focus()}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>비밀번호 확인</Text>
        <TextInput
          style={[commonStyles.typoStyle.body2, styles.textInput]}
          placeholder="비밀번호를 입력해주세요(영문,숫자,특수문자)"
          placeholderTextColor="#666"
          onChangeText={onChangeCheckPassword}
          value={checkPassword}
          keyboardType={Platform.OS === 'android' ? 'default' : 'ascii-capable'}
          textContentType="password"
          secureTextEntry
          returnKeyType="send"
          clearButtonMode="while-editing"
          ref={checkPasswordRef}
          onSubmitEditing={() => nameRef.current?.focus()}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>이름</Text>
        <TextInput
          style={[commonStyles.typoStyle.body2, styles.textInput]}
          placeholder="이름을 입력해주세요."
          placeholderTextColor="#666"
          onChangeText={onChangeName}
          value={name}
          textContentType="name"
          returnKeyType="next"
          clearButtonMode="while-editing"
          ref={nameRef}
          onSubmitEditing={() => phoneNumberRef.current?.focus()}
          blurOnSubmit={false}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>휴대폰 번호</Text>
        <TextInput
          style={[commonStyles.typoStyle.body2, styles.textInput]}
          placeholder="휴대폰번호를 입력해주세요."
          placeholderTextColor="#666"
          onChangeText={onChangePhoneNumber}
          value={phoneNumber}
          keyboardType="numeric"
          textContentType="telephoneNumber"
          returnKeyType="next"
          clearButtonMode="while-editing"
          ref={phoneNumberRef}
          onSubmitEditing={() => nickNameRef.current?.focus()}
          blurOnSubmit={false}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>닉네임</Text>
        <TextInput
          style={[commonStyles.typoStyle.body2, styles.textInput]}
          placeholder="닉네임을 입력해주세요."
          placeholderTextColor="#666"
          onChangeText={onChangeNickName}
          value={nickName}
          textContentType="name"
          returnKeyType="next"
          clearButtonMode="while-editing"
          ref={nickNameRef}
          onSubmitEditing={onSubmit}
          blurOnSubmit={false}
        />
      </View>
      <View style={styles.buttonZone}>
        <Pressable
          style={
            canGoNext
              ? StyleSheet.compose(styles.loginButton, styles.loginButtonActive)
              : styles.loginButton
          }
          disabled={!canGoNext}
          onPress={onSubmit}>
          <Text style={styles.loginButtonText}>회원가입</Text>
        </Pressable>
      </View>
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
    padding: 5,
    color: 'blue',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inputWrapper: {
    padding: 20,
    backgroundColor: 'yellow',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
  },
  buttonZone: {
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonActive: {
    backgroundColor: 'blue',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SignUp;
