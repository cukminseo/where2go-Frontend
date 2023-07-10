import * as React from 'react';
import {Pressable, Text, View, StyleSheet, Image} from 'react-native';
import {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Filter2 = props => {
  return (
    <View style={styles.filterModalBox}>
      <View style={styles.filterModal}>
        <Text>주점 종류를 선택해주세요</Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <BouncyCheckbox
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text="생맥주집"
            iconStyle={styles.iconStyle}
            innerIconStyle={styles.innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={{marginLeft: 7}}
          />
          <BouncyCheckbox
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text="이자카야"
            iconStyle={styles.iconStyle}
            innerIconStyle={styles.innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={{marginLeft: 7}}
          />
          <BouncyCheckbox
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text="포장마차"
            iconStyle={styles.iconStyle}
            innerIconStyle={styles.innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={{marginLeft: 7}}
          />
          <BouncyCheckbox
            style={{marginTop: 10}}
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text="대폿집"
            iconStyle={styles.iconStyle}
            innerIconStyle={styles.innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={{marginLeft: 7}}
          />
          <BouncyCheckbox
            style={{marginTop: 10}}
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text="개인 룸"
            iconStyle={styles.iconStyle}
            innerIconStyle={styles.innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={{marginLeft: 7}}
          />
          <BouncyCheckbox
            style={{marginTop: 10}}
            size={24}
            fillColor="#4E6D5E"
            unfillColor="#FFFFFF"
            text="바 형태"
            iconStyle={styles.iconStyle}
            innerIconStyle={styles.innerIconStyle}
            textStyle={{textDecorationLine: 'none'}}
            textContainerStyle={{marginLeft: 7}}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Pressable>
            <Text onPress={() => props.setCategoryVisible(false)}>취소</Text>
          </Pressable>
          <Pressable>
            <Text onPress={() => props.setCategoryVisible(false)}>확인</Text>
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
    padding: 35,
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
  iconStyle: {borderColor: '#4E6D5E', borderRadius: 8},
  innerIconStyle: {borderWidth: 2, borderRadius: 8},
});

export default Filter2;
