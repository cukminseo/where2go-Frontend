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
  Modal,
} from 'react-native';
import {typoStyle} from './styles.js';
import {CheckBox} from '@rneui/themed';
import AgreementEssential1 from '../components/agreementEssential1';
import AgreementEssential2 from '../components/agreementEssential2';
import AgreementEssential3 from '../components/agreementEssential3';
import AgreementOptional1 from '../components/agreementOptional1';

type AgreementScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Agreement'
>;

function Agreement({navigation}: AgreementScreenProps) {
  const iconBack = require('../assets/iconBack.png');
  const goBack = () => {
    navigation.goBack();
  };

  const checkOn = require('../assets/checkIcons/checkOn.png');
  const checkOff = require('../assets/checkIcons/checkOff.png');

  const toSignUp = useCallback(() => {
    //회원가입버튼 콜백
    navigation.navigate('SignUp');
  }, [navigation]);
  const [checkAll, setCheckAll] = useState(false);
  const [essentialCheck1, setEssentialCheck1] = useState(false);
  const [essentialCheck2, setEssentialCheck2] = useState(false);
  const [essentialCheck3, setEssentialCheck3] = useState(false);
  const [optionalCheck1, setOptionalCheck1] = useState(false);

  const [essential1Visible, setEssential1Visible] = useState(false);
  const [essential2Visible, setEssential2Visible] = useState(false);
  const [essential3Visible, setEssential3Visible] = useState(false);
  const [optional1Visible, setOptional1Visible] = useState(false);

  const agreeEssential = essentialCheck1 && essentialCheck2 && essentialCheck3;
  const handleCheckAll = () => {
    setCheckAll(!checkAll);
    setEssentialCheck1(!checkAll);
    setEssentialCheck2(!checkAll);
    setEssentialCheck3(!checkAll);
    setOptionalCheck1(!checkAll);
  };
  const handleAgree = () => {
    if (agreeEssential) {
      navigation.navigate('SignUp'); // 회원가입 화면으로 이동
    } else {
      Alert.alert('약관에 동의해야 합니다.');
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.header__backbutton} onPress={goBack}>
        <Image style={styles.header__backbuttonImg} source={iconBack} />
      </Pressable>
      <Text style={[typoStyle.subHeader, styles.title]}>
        반가워요!{'\n'}회원가입하려면 약관동의가 필요해요!
      </Text>

      <View
        style={
          checkAll
            ? [styles.allCheckContainer, styles.allCheckContainerActive]
            : styles.allCheckContainer
        }>
        <CheckBox
          title="  전체 동의하기"
          titleProps={{
            style: [typoStyle.subHeader, styles.allCheck__checkboxTitle],
          }}
          checkedIcon={
            <Image source={checkOn} style={styles.allCheck__checkbox} />
          }
          uncheckedIcon={
            <Image source={checkOff} style={styles.allCheck__checkbox} />
          }
          checked={checkAll}
          onPress={handleCheckAll}
        />
      </View>

      <View style={styles.checkContainer}>
        <View style={styles.check__checkboxConatainer}>
          <CheckBox
            title="  [필수] 어디가게 이용약관 1"
            titleProps={{
              style: [typoStyle.body1, styles.check__checkboxTitle],
            }}
            checkedIcon={
              <Image source={checkOn} style={styles.check__checkboxIcon} />
            }
            uncheckedIcon={
              <Image source={checkOff} style={styles.check__checkboxIcon} />
            }
            checked={essentialCheck1}
            onPress={() => {
              setEssentialCheck1(!essentialCheck1);
              checkAll ? setCheckAll(!checkAll) : null;
              !essentialCheck1 &&
              essentialCheck2 &&
              essentialCheck3 &&
              optionalCheck1
                ? setCheckAll(!checkAll)
                : null;
            }}
          />
          <Pressable
            style={styles.check__agreementButton}
            onPress={() => setEssential1Visible(true)}>
            <Text style={[typoStyle.body1, styles.check__agreementText]}>
              상세
            </Text>
          </Pressable>
          <Modal visible={essential1Visible} transparent statusBarTranslucent>
            <AgreementEssential1 setEssential1Visible={setEssential1Visible} />
          </Modal>
        </View>

        <View style={styles.check__checkboxConatainer}>
          <CheckBox
            title="  [필수] 어디가게 이용약관 2"
            titleProps={{
              style: [typoStyle.body1, styles.check__checkboxTitle],
            }}
            checkedIcon={
              <Image source={checkOn} style={styles.check__checkboxIcon} />
            }
            uncheckedIcon={
              <Image source={checkOff} style={styles.check__checkboxIcon} />
            }
            checked={essentialCheck2}
            onPress={() => {
              setEssentialCheck2(!essentialCheck2);
              checkAll ? setCheckAll(!checkAll) : null;
              essentialCheck1 &&
              !essentialCheck2 &&
              essentialCheck3 &&
              optionalCheck1
                ? setCheckAll(!checkAll)
                : null;
            }}
          />
          <Pressable
            style={styles.check__agreementButton}
            onPress={() => setEssential2Visible(true)}>
            <Text style={[typoStyle.body1, styles.check__agreementText]}>
              상세
            </Text>
          </Pressable>
          <Modal visible={essential2Visible} transparent statusBarTranslucent>
            <AgreementEssential2 setEssential2Visible={setEssential2Visible} />
          </Modal>
        </View>

        <View style={styles.check__checkboxConatainer}>
          <CheckBox
            title="  [필수] 어디가게 이용약관 3"
            titleProps={{
              style: [typoStyle.body1, styles.check__checkboxTitle],
            }}
            checkedIcon={
              <Image source={checkOn} style={styles.check__checkboxIcon} />
            }
            uncheckedIcon={
              <Image source={checkOff} style={styles.check__checkboxIcon} />
            }
            checked={essentialCheck3}
            onPress={() => {
              setEssentialCheck3(!essentialCheck3);
              checkAll ? setCheckAll(!checkAll) : null;
              essentialCheck1 &&
              essentialCheck2 &&
              !essentialCheck3 &&
              optionalCheck1
                ? setCheckAll(!checkAll)
                : null;
            }}
          />
          <Pressable
            style={styles.check__agreementButton}
            onPress={() => setEssential3Visible(true)}>
            <Text style={[typoStyle.body1, styles.check__agreementText]}>
              상세
            </Text>
          </Pressable>
          <Modal visible={essential3Visible} transparent statusBarTranslucent>
            <AgreementEssential3 setEssential3Visible={setEssential3Visible} />
          </Modal>
        </View>

        <View style={styles.check__checkboxConatainer}>
          <CheckBox
            title="  [선택] 어디가게 이용약관 4"
            titleProps={{
              style: [typoStyle.body1, styles.check__checkboxTitle],
            }}
            checkedIcon={
              <Image source={checkOn} style={styles.check__checkboxIcon} />
            }
            uncheckedIcon={
              <Image source={checkOff} style={styles.check__checkboxIcon} />
            }
            checked={optionalCheck1}
            onPress={() => {
              setOptionalCheck1(!optionalCheck1);
              checkAll ? setCheckAll(!checkAll) : null;
              essentialCheck1 &&
              essentialCheck2 &&
              essentialCheck3 &&
              !optionalCheck1
                ? setCheckAll(!checkAll)
                : null;
            }}
          />
          <Pressable
            style={styles.check__agreementButton}
            onPress={() => setOptional1Visible(true)}>
            <Text style={[typoStyle.body1, styles.check__agreementText]}>
              상세
            </Text>
          </Pressable>
          <Modal visible={optional1Visible} transparent statusBarTranslucent>
            <AgreementOptional1 setOptional1Visible={setOptional1Visible} />
          </Modal>
        </View>
      </View>

      <Pressable
        style={
          agreeEssential
            ? StyleSheet.compose(
                styles.agreement__signUpButton,
                styles.agreement__signUpButtonActive,
              )
            : styles.agreement__signUpButton
        }
        onPress={handleAgree}>
        <Text style={[typoStyle.btn, styles.agreement__signUpButtonText]}>
          시작하기
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
  header__backbutton: {
    marginTop: 10,
    width: 30,
    height: 30,
  },
  header__backbuttonImg: {
    width: '100%',
    height: '100%',
  },
  title: {
    padding: 30,
  },
  allCheckContainer: {
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 12,
  },
  allCheckContainerActive: {
    borderColor: '#8DBBA7',
  },
  allCheck__checkboxTitle: {},
  allCheck__checkbox: {
    width: 30,
    height: 30,
  },
  checkContainer: {
    marginHorizontal: 30,
    // backgroundColor: 'green',
  },
  check__checkboxConatainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  check__checkboxTitle: {},
  check__checkboxIcon: {
    width: 20,
    height: 20,
  },
  check__agreementButton: {
    // backgroundColor: 'yellow',
  },
  check__agreementText: {
    textDecorationLine: 'underline',
  },

  agreement__signUpButton: {
    backgroundColor: '#DCDCDC',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    marginVertical: 7,
    marginHorizontal: 40,
  },
  agreement__signUpButtonActive: {
    backgroundColor: '#4E6D5E',
  },
  agreement__signUpButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});
export default Agreement;
