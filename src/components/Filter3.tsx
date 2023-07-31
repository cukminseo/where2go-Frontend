import * as React from 'react';
import {Pressable, Text, View, StyleSheet, SafeAreaView} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

/*
 * 주점 검색 창 하단 4가지 필터 중 주종에 해당하는 화면.
 * StoreMap(지도, 메인 화면)의 setLiquorVisible() 넘겨 받아서 보여주기 여부 설정.
 * 각 이름은 api문서를 참고하거나 프론트엔드 내에서 협의하였음.
 * [수정 필요] 'react-native-bouncy-checkbox'로 체크박스를 구현하였으나, 회원가입 때 사용한 것으로 통일하기로 협의.
 */

const Filter3 = props => {
  const liquors = [
    '칵테일',
    '와인바',
    '소주, 맥주',
    '생맥주',
    '보드카',
    '세계 맥주',
    '막걸리',
    '과일소주',
    '시그니처',
  ];
  return (
    <SafeAreaView style={styles.filterContainer}>
      <View style={styles.filterModal}>
        <Text style={{...styles.check__textStyle, color: '#333333'}}>
          주종을 골라주세요
        </Text>
        <View style={styles.checkbox}>
          <BouncyCheckbox
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={liquors[0]}
            iconStyle={styles.checkbox__iconStyle}
            innerIconStyle={styles.checkbox__innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={styles.checkbox__textContainer}
            onPress={(isChecked: boolean) => {
              console.log(liquors[0], isChecked);
            }}
          />
          <BouncyCheckbox
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={liquors[1]}
            iconStyle={styles.checkbox__iconStyle}
            innerIconStyle={styles.checkbox__innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={styles.checkbox__textContainer}
            onPress={(isChecked: boolean) => {
              console.log(liquors[1], isChecked);
            }}
          />
          <BouncyCheckbox
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={liquors[2]}
            iconStyle={styles.checkbox__iconStyle}
            innerIconStyle={styles.checkbox__innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={styles.checkbox__textContainer}
            onPress={(isChecked: boolean) => {
              console.log(liquors[2], isChecked);
            }}
          />
          <BouncyCheckbox
            style={styles.checkbox__subContent}
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={liquors[3]}
            iconStyle={styles.checkbox__iconStyle}
            innerIconStyle={styles.checkbox__innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={styles.checkbox__textContainer}
            onPress={(isChecked: boolean) => {
              console.log(liquors[3], isChecked);
            }}
          />
          <BouncyCheckbox
            style={styles.checkbox__subContent}
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={liquors[4]}
            iconStyle={styles.checkbox__iconStyle}
            innerIconStyle={styles.checkbox__innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={styles.checkbox__textContainer}
            onPress={(isChecked: boolean) => {
              console.log(liquors[4], isChecked);
            }}
          />
          <BouncyCheckbox
            style={styles.checkbox__subContent}
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={liquors[5]}
            iconStyle={styles.checkbox__iconStyle}
            innerIconStyle={styles.checkbox__innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={styles.checkbox__textContainer}
            onPress={(isChecked: boolean) => {
              console.log(liquors[5], isChecked);
            }}
          />
          <BouncyCheckbox
            style={styles.checkbox__subContent}
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={liquors[6]}
            iconStyle={styles.checkbox__iconStyle}
            innerIconStyle={styles.checkbox__innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={styles.checkbox__textContainer}
            onPress={(isChecked: boolean) => {
              console.log(liquors[6], isChecked);
            }}
          />
          <BouncyCheckbox
            style={styles.checkbox__subContent}
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={liquors[7]}
            iconStyle={styles.checkbox__iconStyle}
            innerIconStyle={styles.checkbox__innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={styles.checkbox__textContainer}
            onPress={(isChecked: boolean) => {
              console.log(liquors[7], isChecked);
            }}
          />
          <BouncyCheckbox
            style={styles.checkbox__subContent}
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={liquors[8]}
            iconStyle={styles.checkbox__iconStyle}
            innerIconStyle={styles.checkbox__innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={styles.checkbox__textContainer}
            onPress={(isChecked: boolean) => {
              console.log(liquors[8], isChecked);
            }}
          />
        </View>
        <View style={styles.check}>
          <Pressable style={styles.check__btnCancel}>
            <Text
              style={styles.check__textStyle}
              onPress={() => props.setLiquorVisible(false)}>
              취소
            </Text>
          </Pressable>
          <Pressable style={styles.check__btnAllow}>
            <Text
              style={styles.check__textStyle}
              onPress={() => props.setLiquorVisible(false)}>
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
    paddingTop: 10,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
    height: '30%',
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
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
    margin: 10,
  },
  check__textStyle: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  check: {flexDirection: 'row', flex: 1},
  check__btnCancel: {
    flex: 1,
    justifyContent: 'center',
    borderBottomLeftRadius: 20,
    backgroundColor: '#949494',
  },
  check__btnAllow: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#4E6D5E',
    borderBottomRightRadius: 20,
  },
  checkbox__subContent: {marginTop: 10},
  checkbox__textContainer: {marginLeft: 7},
  checkbox__iconStyle: {borderColor: '#4E6D5E', borderRadius: 8},
  checkbox__innerIconStyle: {borderWidth: 2, borderRadius: 8},
});

export default Filter3;
