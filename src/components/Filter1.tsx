import * as React from 'react';
import {Pressable, Text, View, StyleSheet, Button} from 'react-native';
import {useState} from 'react';

const Filter1 = props => {
  const [number, setNumber] = useState(0);
  const increaseNumber = (num: number) => {
    let a = num;
    a++;
    setNumber(a);
  };
  const decreaseNumber = (num: number) => {
    let a = num;
    a--;
    setNumber(a);
    if (a < 0) {
      setNumber(0);
    }
  };

  return (
    <View style={styles.filterModalBox}>
      <View style={styles.filterModal}>
        <Text style={{...styles.fontStyle, color: '#333333'}}>인원 수</Text>
        <View style={{flexDirection: 'row', flex:1}}>
          <Pressable
            style={styles.btnNumber}
            onPress={() => decreaseNumber(number)}>
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
            onPress={() => increaseNumber(number)}>
            <Text style={styles.btnFontStyle}>+</Text>
          </Pressable>
        </View>
        <View style={{flexDirection: 'row', flex:1}}>
          <Pressable style={styles.btnCheck}>
            <Text
              style={styles.fontStyle}
              onPress={() => {
                props.setCheckVisible(false), setNumber(0);
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
                props.setCheckVisible(false), setNumber(0);
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
