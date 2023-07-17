import * as React from 'react';
import {Pressable, Text, View, StyleSheet, Image} from 'react-native';
import {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

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
    <View style={styles.filterModalBox}>
      <View style={styles.filterModal}>
        <Text style={{...styles.fontStyle, color: '#333333'}}>
          주종을 골라주세요
        </Text>
        <View style={styles.checkbox}>
          <BouncyCheckbox
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={liquors[0]}
            iconStyle={styles.iconStyle}
            innerIconStyle={styles.innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={{marginLeft: 7}}
            onPress={(isChecked: boolean) => {
              console.log(liquors[0], isChecked);
            }}
          />
          <BouncyCheckbox
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={liquors[1]}
            iconStyle={styles.iconStyle}
            innerIconStyle={styles.innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={{marginLeft: 7}}
            onPress={(isChecked: boolean) => {
              console.log(liquors[1], isChecked);
            }}
          />
          <BouncyCheckbox
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={liquors[2]}
            iconStyle={styles.iconStyle}
            innerIconStyle={styles.innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={{marginLeft: 7}}
            onPress={(isChecked: boolean) => {
              console.log(liquors[2], isChecked);
            }}
          />
          <BouncyCheckbox
            style={{marginTop: 10}}
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={liquors[3]}
            iconStyle={styles.iconStyle}
            innerIconStyle={styles.innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={{marginLeft: 7}}
            onPress={(isChecked: boolean) => {
              console.log(liquors[3], isChecked);
            }}
          />
          <BouncyCheckbox
            style={{marginTop: 10}}
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={liquors[4]}
            iconStyle={styles.iconStyle}
            innerIconStyle={styles.innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={{marginLeft: 7}}
            onPress={(isChecked: boolean) => {
              console.log(liquors[4], isChecked);
            }}
          />
          <BouncyCheckbox
            style={{marginTop: 10}}
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={liquors[5]}
            iconStyle={styles.iconStyle}
            innerIconStyle={styles.innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={{marginLeft: 7}}
            onPress={(isChecked: boolean) => {
              console.log(liquors[5], isChecked);
            }}
          />
          <BouncyCheckbox
            style={{marginTop: 10}}
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={liquors[6]}
            iconStyle={styles.iconStyle}
            innerIconStyle={styles.innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={{marginLeft: 7}}
            onPress={(isChecked: boolean) => {
              console.log(liquors[6], isChecked);
            }}
          />
          <BouncyCheckbox
            style={{marginTop: 10}}
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={liquors[7]}
            iconStyle={styles.iconStyle}
            innerIconStyle={styles.innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={{marginLeft: 7}}
            onPress={(isChecked: boolean) => {
              console.log(liquors[7], isChecked);
            }}
          />
          <BouncyCheckbox
            style={{marginTop: 10}}
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text={liquors[8]}
            iconStyle={styles.iconStyle}
            innerIconStyle={styles.innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={{marginLeft: 7}}
            onPress={(isChecked: boolean) => {
              console.log(liquors[8], isChecked);
            }}
          />
        </View>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Pressable style={styles.btnCheck}>
            <Text
              style={styles.fontStyle}
              onPress={() => props.setLiquorVisible(false)}>
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
              onPress={() => props.setLiquorVisible(false)}>
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
    borderBottomLeftRadius: 20,
    backgroundColor: '#949494',
  },
  iconStyle: {borderColor: '#4E6D5E', borderRadius: 8},
  innerIconStyle: {borderWidth: 2, borderRadius: 8},
});

export default Filter3;
