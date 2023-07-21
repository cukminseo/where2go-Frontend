import * as React from 'react';
import {Pressable, Text, View, StyleSheet, SafeAreaView} from 'react-native';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import filter1Slice from '../slices/filter1';
import {useAppDispatch} from '../store';

const Filter1 = props => {
  const dispatch = useAppDispatch();
  const number = useSelector((state: RootState) => state.filter1.number);

  return (
    <SafeAreaView style={styles.filterContainer}>
      <View style={styles.filterModal}>
        <Text style={{...styles.check__textStyle, color: '#333333'}}>
          인원 수
        </Text>
        <View style={styles.filterModal__content}>
          <Pressable
            style={styles.filterModal__btnNumber}
            onPress={() =>
              dispatch(filter1Slice.actions.decreaseNumber(number))
            }>
            <Text style={styles.filterModal__textStyle}>-</Text>
          </Pressable>
          <View style={styles.filterModal__number}>
            <Text style={styles.filterModal__textStyle}>{number}</Text>
          </View>
          <Pressable
            style={styles.filterModal__btnNumber}
            onPress={() =>
              dispatch(filter1Slice.actions.increaseNumber(number))
            }>
            <Text style={styles.filterModal__textStyle}>+</Text>
          </Pressable>
        </View>
        <View style={styles.check}>
          <Pressable style={styles.check__btnCancel}>
            <Text
              style={styles.check__textStyle}
              onPress={() => {
                props.setNumberVisible(false);
                dispatch(filter1Slice.actions.setNumber());
              }}>
              취소
            </Text>
          </Pressable>
          <Pressable style={styles.check__btnAllow}>
            <Text
              style={styles.check__textStyle}
              onPress={() => {
                props.setNumberVisible(false);
              }}>
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
  filterModal__content: {
    flexDirection: 'row',
    flex: 1,
  },
  filterModal__textStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
  filterModal__btnNumber: {
    width: 56,
    height: 56,
    backgroundColor: '#E7F3F2',
    borderRadius: 12,
    justifyContent: 'center',
    margin: 8,
  },
  filterModal__number: {
    width: 68,
    height: 56,
    backgroundColor: '#F2F2F2',
    borderRadius: 12,
    justifyContent: 'center',
    margin: 8,
  },
  check: {
    flexDirection: 'row',
    flex: 1,
  },
  check__textStyle: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  check__btnCancel: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#949494',
  },
  check__btnAllow: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#4E6D5E',
    borderBottomRightRadius: 20,
  },
});

export default Filter1;
