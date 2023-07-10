import React, {useState} from 'react';
import {
  Alert,
  Button,
  Dimensions,
  View,
  TextInput,
  Text,
  StyleSheet,
  Modal,
} from 'react-native';
import NaverMapView, {Marker, Path} from 'react-native-nmap';
import Filter1 from '../components/Filter1';
import Filter2 from '../components/Filter2';
import Filter3 from '../components/Filter3';
import Filter4 from '../components/Filter4';

function StoreMap() {
  const [latitude, setLatitude] = useState(37.56667);
  const [longitude, setLongitude] = useState(126.97806);
  const [checkvisible, setCheckVisible] = useState(false);
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [liquorVisible, setLiquorVisible] = useState(false);
  const [favorLocation, setFavorLocation] = useState(false);

  return (
    <View>
      <View
        //화면 꽉 차게
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={{backgroundColor: '#F2F2F2', flex: 1}}
            placeholder="검색할 내용을 입력해 주세요. 예: 강남 시티뷰가 좋은 집"
            //onChangeText={(text): void => setSearchWord(text)}
          />
          <Button
            title="검색하기"
            onPress={(): void => {
              setLatitude(37.56667);
              setLongitude(126.97);
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
          <Button title="주점 종류" onPress={() => setCategoryVisible(true)} />
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
        <View style={styles.reservation}>
          <Text style={{color: 'white'}}>예약 현황</Text>
          <Text style={{color: 'white'}}> {`>`} </Text>
        </View>
        <NaverMapView
          style={{width: '100%', height: '100%'}}
          zoomControl={false}
          center={{
            zoom: 16,
            tilt: 10,
            latitude: latitude,
            longitude: longitude,
          }}
        />
        <View style={styles.currentStatus}>
          <Button
            title="현재 위치"
            onPress={() => {
              setLatitude(37.56667);
              setLongitude(126.97806);
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
