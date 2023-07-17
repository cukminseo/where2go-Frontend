import * as React from 'react';
import {Pressable, Text, View, StyleSheet, Image} from 'react-native';
import {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

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
    <View style={styles.filterModalBox}>
      <View style={styles.filterModal}>
        <Text style={{...styles.fontStyle, color: '#333333'}}>
          주점 종류를 선택해주세요
        </Text>
        <View style={styles.checkbox}>
          <BouncyCheckbox
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={categories[0]}
            iconStyle={styles.iconStyle}
            innerIconStyle={styles.innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={{marginLeft: 7}}
            onPress={(isChecked: boolean) => {
              console.log(categories[0], isChecked);
            }}
          />
          <BouncyCheckbox
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={categories[1]}
            iconStyle={styles.iconStyle}
            innerIconStyle={styles.innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={{marginLeft: 7}}
            onPress={(isChecked: boolean) => {
              console.log(categories[1], isChecked);
            }}
          />
          <BouncyCheckbox
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={categories[2]}
            iconStyle={styles.iconStyle}
            innerIconStyle={styles.innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={{marginLeft: 7}}
            onPress={(isChecked: boolean) => {
              console.log(categories[2], isChecked);
            }}
          />
          <BouncyCheckbox
            style={{marginTop: 10}}
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={categories[3]}
            iconStyle={styles.iconStyle}
            innerIconStyle={styles.innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={{marginLeft: 7}}
            onPress={(isChecked: boolean) => {
              console.log(categories[3], isChecked);
            }}
          />
          <BouncyCheckbox
            style={{marginTop: 10}}
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={categories[4]}
            iconStyle={styles.iconStyle}
            innerIconStyle={styles.innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={{marginLeft: 7}}
            onPress={(isChecked: boolean) => {
              console.log(categories[4], isChecked);
            }}
          />
          <BouncyCheckbox
            style={{marginTop: 10}}
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={categories[5]}
            iconStyle={styles.iconStyle}
            innerIconStyle={styles.innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={{marginLeft: 7}}
            onPress={(isChecked: boolean) => {
              console.log(categories[5], isChecked);
            }}
          />
        </View>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Pressable style={styles.btnCheck}>
            <Text
              style={styles.fontStyle}
              onPress={() => props.setCategoryVisible(false)}>
              취소
            </Text>
          </Pressable>
          <Pressable
            style={{
              ...styles.btnCheck,
              backgroundColor: '#4E6D5E',
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 20,
            }}>
            <Text
              style={styles.fontStyle}
              onPress={() => props.setCategoryVisible(false)}>
              확인
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterModalBox: {
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
  fontStyle: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  btnFontStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
  btnNumber: {
    width: 56,
    height: 56,
    backgroundColor: '#E7F3F2',
    borderRadius: 12,
    justifyContent: 'center',
    margin: 8,
  },
  btnCheck: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 10,
    borderBottomLeftRadius: 20,
    backgroundColor: '#949494',
  },
  iconStyle: {borderColor: '#4E6D5E', borderRadius: 8},
  innerIconStyle: {borderWidth: 2, borderRadius: 8},
});

export default Filter2;
