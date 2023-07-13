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
        <Text>인원 수</Text>
        <View style={{flexDirection: 'row'}}>
          <Button title="-" onPress={() => decreaseNumber(number)} />
          <Text>{number}</Text>
          <Button title="+" onPress={() => increaseNumber(number)} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Pressable>
            <Text
              onPress={() => {
                props.setCheckVisible(false), setNumber(0);
              }}>
              취소
            </Text>
          </Pressable>
          <Pressable>
            <Text
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
}

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
});

export default Filter1;
