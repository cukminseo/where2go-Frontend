import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Dimensions,
  View,
  TextInput,
  Text,
  StyleSheet,
  Modal,
  Image,
  Pressable,
} from 'react-native';
import NaverMapView, {Marker, Path} from 'react-native-nmap';
import Geolocation from '@react-native-community/geolocation';
import Filter1 from '../components/Filter1';
import Filter2 from '../components/Filter2';
import Filter3 from '../components/Filter3';
import Filter4 from '../components/Filter4';
import {SafeAreaView} from 'react-native-safe-area-context';

function StoreMap() {
  //현재 위치
  const [myPosition, setMyPosition] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  //모든 주점 위치 ▶ markers에 초기 데이터 값 안 들어가고 있음. 추후 확인.
  const [markers, setMarkers] = useState(storeData);

  //필터링
  const [checkvisible, setCheckVisible] = useState(false);
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [liquorVisible, setLiquorVisible] = useState(false);
  const [favorLocation, setFavorLocation] = useState(false);

  //검색창
  const [searchWord, setSearchWord] = useState('');

  useEffect(() => {
    //현재 위치 정보 불러오기
    Geolocation.getCurrentPosition(
      info => {
        setMyPosition({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        });
      },
      //20초 안에 못 불러오면 에러
      console.error,
      {
        enableHighAccuracy: true,
        timeout: 20000,
      },
    );
  }, []);
  if (!myPosition || !myPosition.latitude) {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>내 위치를 로딩 중입니다. 권한을 허용했는지 확인해주세요.</Text>
      </View>
    );
  }
  //더미 데이터
  const data = [
    {
      id: 1,
      title: '테스트1',
      coordinate: {latitude: 37.497175, longitude: 127.029099},
    },
    {
      id: 2,
      title: '테스트2',
      coordinate: {latitude: 37.497175, longitude: 127.027926},
    },
  ];
  const searchData = [
    {
      id: 1,
      title: '서칭1',
      coordinate: {latitude: 37.497175, longitude: 127.027299},
    },
    {
      id: 2,
      title: '서칭2',
      coordinate: {latitude: 37.497175, longitude: 127.027926},
    },
  ];
  const storeData = data.map(store => {
    return {
      id: store.id,
      title: store.title,
      coordinate: store.coordinate,
    };
  });

  return (
    <SafeAreaView>
      <View>
        <View style={styles.fill}>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={{backgroundColor: '#F2F2F2', flex: 1}}
              placeholder="검색할 내용을 입력해 주세요."
              onChangeText={(text): void => setSearchWord(text)}
            />
            <Button
              title="검색하기"
              onPress={(): void => {
                const searchStore = searchData.map((store: any) => {
                  return {
                    id: store.id,
                    title: store.title,
                    coordinate: store.coordinate,
                  };
                });
                setMarkers(searchStore);
                // axiosInstance
                //   .post('houses/search', {
                //     searchWord,
                //   })
                //   .then(res => {
                //     const searchHouse = res.data.map((house: any) => {
                //       return {
                //         id: house.id,
                //         title: house.title,
                //         coordinate: {
                //           latitude: Number(house.location[0]),
                //           longitude: Number(house.location[1]),
                //         },
                //       };
                //     });
                //     setMarkers(searchHouse);
                //   });
              }}
            />
          </View>
          <View style={styles.filterBox}>
            <Button title="인원수" onPress={() => setCheckVisible(true)} />
            <Modal visible={checkvisible} transparent statusBarTranslucent>
              <Filter1 setCheckVisible={setCheckVisible} />
            </Modal>
            <Button
              title="주점 종류"
              onPress={() => setCategoryVisible(true)}
            />
            <Modal visible={categoryVisible} transparent statusBarTranslucent>
              <Filter2 setCategoryVisible={setCategoryVisible} />
            </Modal>
            <Button title="주종" onPress={() => setLiquorVisible(true)} />
            <Modal visible={liquorVisible} transparent statusBarTranslucent>
              <Filter3 setLiquorVisible={setLiquorVisible} />
            </Modal>
            <Button title="선호 지역" onPress={() => setFavorLocation(true)} />
            <Modal visible={favorLocation} transparent statusBarTranslucent>
              <Filter4 setFavorLocation={setFavorLocation} />
            </Modal>
          </View>
          <Pressable
            style={styles.reservation}
            onPress={() => Alert.alert('예약 현황')}>
            <Text style={{color: 'white'}}>예약 현황</Text>
            <Text style={{color: 'white'}}> {`>`} </Text>
          </Pressable>
          <NaverMapView
            style={{width: '100%', height: '100%'}}
            zoomControl={false}
            center={{
              zoom: 16,
              tilt: 10,
              latitude: myPosition.latitude,
              longitude: myPosition.longitude,
            }}>
            {markers &&
              markers.map(
                (store: {
                  id: number;
                  title: string;
                  coordinate: {latitude: number; longitude: number};
                }) => (
                  <Marker
                    key={store.id}
                    coordinate={store.coordinate}
                    width={30}
                    height={30}
                    anchor={{x: 0.5, y: 0.5}}
                    caption={{text: store.title}}
                    image={require('../assets/icon_location.png')}
                  />
                ),
              )}
          </NaverMapView>
          <View style={styles.currentStatus}>
            <Pressable
              onPress={() => {
                setMyPosition({
                  latitude: myPosition.latitude - 0.00000000001, //카메라 이동(임시)
                  longitude: myPosition.longitude,
                });
              }}>
              <Image source={require('../assets/icon_current_location.png')} />
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fill: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  filterBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  reservation: {
    flexDirection: 'row',
    backgroundColor: '#4E6D5E',
    justifyContent: 'flex-end',
    padding: 5,
  },
  currentStatus: {
    position: 'absolute',
    top: '90%',
    alignSelf: 'auto',
  },
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

export default StoreMap;
