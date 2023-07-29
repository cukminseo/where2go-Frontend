import * as React from 'react';
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

/*
 * 주점 검색 창 하단 4가지 필터 중 선호 지역에 해당하는 화면.
 * StoreMap(지도, 메인 화면)의 setFavorLocation() 넘겨 받아서 보여주기 여부 설정.
 * 각 이름은 api문서를 참고하거나 프론트엔드 내에서 협의하였음.
 * FlatList 활용하여 리스트 목록을 구현하였고, 현재는 가상의 데이터를 추가해둠.
 */

const Filter4 = props => {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push('가상의 선호 지역 명');
  }
  return (
    <SafeAreaView style={styles.filterModalBox}>
      <View style={styles.filterModal}>
        <Pressable
          style={{alignSelf: 'flex-start'}}
          onPress={() => props.setFavorLocation(false)}>
          <Image
            style={{width: 24, height: 24}}
            source={require('../assets/mapIcon/icon_x.png')}
          />
        </Pressable>
        <Text style={{fontSize: 16, color: '#333333'}}>
          등록된 선호 지역입니다 :)
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            maxHeight: '90%',
          }}>
          <FlatList
            data={arr}
            keyExtractor={item => item.toString()}
            renderItem={({item}) => (
              <View style={{borderColor: '#ccc', borderBottomWidth:1,}}>
                <Text style={{fontSize: 16, margin: 20}}>{item}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
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
    height: Dimensions.get('window').height * 0.85,
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
