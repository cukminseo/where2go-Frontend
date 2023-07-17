import * as React from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import filter1Slice from '../slices/filter1';
import {useAppDispatch} from '../store';

const Filter1 = props => {
  const dispatch = useAppDispatch();
  const number = useSelector((state: RootState) => state.filter1.number);

  return (
    <View style={styles.filterModalBox}>
      <View style={styles.filterModal}>
        <Text style={{...styles.fontStyle, color: '#333333'}}>인원 수</Text>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Pressable
            style={styles.btnNumber}
            onPress={() =>
              dispatch(filter1Slice.actions.decreaseNumber(number))
            }>
            <Text style={styles.btnFontStyle}>-</Text>
          </Pressable>
          <View
            style={{
              ...styles.btnNumber,
              justifyContent: 'center',
              backgroundColor: '#F2F2F2',
              width: 68,
            }}>
            <Text style={styles.btnFontStyle}>{number}</Text>
          </View>
          <Pressable
            style={styles.btnNumber}
            onPress={() =>
              dispatch(filter1Slice.actions.increaseNumber(number))
            }>
            <Text style={styles.btnFontStyle}>+</Text>
          </Pressable>
        </View>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Pressable style={styles.btnCheck}>
            <Text
              style={styles.fontStyle}
              onPress={() => {
                props.setCheckVisible(false);
                dispatch(filter1Slice.actions.setNumber());
              }}>
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
              onPress={() => {
                props.setCheckVisible(false);
              }}>
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
    width: '65%',
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
    marginTop: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#949494',
  },
});

export default Filter1;
