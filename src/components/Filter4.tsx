import * as React from 'react';
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import {useState} from 'react';

const Filter4 = props => {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push('가상의 선호 지역 명');
  }
  return (
    <View style={styles.filterModalBox}>
      <View style={styles.filterModal}>
        <Pressable style={{alignSelf: 'flex-start'}}>
          <Text onPress={() => props.setFavorLocation(false)}>X</Text>
        </Pressable>
        <Text>등록된 선호 지역입니다 :)</Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
          }}>
          <FlatList
            data={arr}
            keyExtractor={item => item.toString()}
            renderItem={({item}) => <Text>{item}</Text>}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}></View>
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
    height: Dimensions.get('window').height,
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

export default Filter4;
