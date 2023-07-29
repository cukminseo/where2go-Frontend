import * as React from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {SafeAreaView} from 'react-native-safe-area-context';

/*
 * 주점 검색 창 하단 4가지 필터 중 주점 종류에 해당하는 화면.
 * StoreMap(지도, 메인 화면)의 setCategoryVisible() 넘겨 받아서 보여주기 여부 설정.
 * 각 이름은 api문서를 참고하거나 프론트엔드 내에서 협의하였음.
 * [수정 필요] 'react-native-bouncy-checkbox'로 체크박스를 구현하였으나, 회원가입 때 사용한 것으로 통일하기로 협의.
 */

const Filter2 = props => {
  const categories = [
    '생맥주집',
    '이자카야',
    '포장마차',
    '대폿집',
    '개인 룸',
    '바 형태',
  ];
  return (
    <SafeAreaView style={styles.filterContainer}>
      <View style={styles.filterModal}>
        <Text style={{...styles.check__textStyle, color: '#333333'}}>
          주점 종류를 선택해주세요
        </Text>
        <View style={styles.checkbox}>
          <BouncyCheckbox
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={categories[0]}
            iconStyle={styles.checkbox__iconStyle}
            innerIconStyle={styles.checkbox__innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={styles.checkbox__textContainer}
            onPress={(isChecked: boolean) => {
              console.log(categories[0], isChecked);
            }}
          />
          <BouncyCheckbox
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={categories[1]}
            iconStyle={styles.checkbox__iconStyle}
            innerIconStyle={styles.checkbox__innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={styles.checkbox__textContainer}
            onPress={(isChecked: boolean) => {
              console.log(categories[1], isChecked);
            }}
          />
          <BouncyCheckbox
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={categories[2]}
            iconStyle={styles.checkbox__iconStyle}
            innerIconStyle={styles.checkbox__innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={styles.checkbox__textContainer}
            onPress={(isChecked: boolean) => {
              console.log(categories[2], isChecked);
            }}
          />
          <BouncyCheckbox
            style={styles.checkbox__subContent}
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={categories[3]}
            iconStyle={styles.checkbox__iconStyle}
            innerIconStyle={styles.checkbox__innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={styles.checkbox__textContainer}
            onPress={(isChecked: boolean) => {
              console.log(categories[3], isChecked);
            }}
          />
          <BouncyCheckbox
            style={styles.checkbox__subContent}
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={categories[4]}
            iconStyle={styles.checkbox__iconStyle}
            innerIconStyle={styles.checkbox__innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={styles.checkbox__textContainer}
            onPress={(isChecked: boolean) => {
              console.log(categories[4], isChecked);
            }}
          />
          <BouncyCheckbox
            style={styles.checkbox__subContent}
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={categories[5]}
            iconStyle={styles.checkbox__iconStyle}
            innerIconStyle={styles.checkbox__innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={styles.checkbox__textContainer}
            onPress={(isChecked: boolean) => {
              console.log(categories[5], isChecked);
            }}
          />
        </View>
        <View style={styles.check}>
          <Pressable style={styles.check__btnCancel}>
            <Text
              style={styles.check__textStyle}
              onPress={() => props.setCategoryVisible(false)}>
              취소
            </Text>
          </Pressable>
          <Pressable style={styles.check__btnAllow}>
            <Text
              style={styles.check__textStyle}
              onPress={() => props.setCategoryVisible(false)}>
              확인
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  filterModal: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
    height: '25%',
    paddingTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  checkbox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
    margin: 10,
  },
  checkbox__subContent: {marginTop: 10},
  checkbox__textContainer: {marginLeft: 7},
  checkbox__iconStyle: {borderColor: '#4E6D5E', borderRadius: 8},
  checkbox__innerIconStyle: {borderWidth: 2, borderRadius: 8},
  check: {flexDirection: 'row', flex: 1},
  check__btnCancel: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 10,
    borderBottomLeftRadius: 20,
    backgroundColor: '#949494',
  },
  check__btnAllow: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#4E6D5E',
    borderBottomRightRadius: 20,
  },
  check__textStyle: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
});

export default Filter2;
