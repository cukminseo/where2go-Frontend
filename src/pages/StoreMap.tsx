import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {LoggedInParamList} from '../../AppInner';
import {Alert, Button, Dimensions, View, TextInput} from 'react-native';
import NaverMapView, {Marker, Path} from 'react-native-nmap';

type StoreMapScreenProps = NativeStackScreenProps<
  LoggedInParamList,
  'StoreMap'
>;

function StoreMap({}: StoreMapScreenProps) {
  return (
    <View>
      <View
        //화면 꽉 차게
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}>
        <View>
          <TextInput
            placeholder="검색할 내용을 입력해 주세요. 예: 강남 시티뷰가 좋은 집"
            //onChangeText={(text): void => setSearchWord(text)}
          />
          <Button
            title="검색하기"
            // onPress={(): void => {
            //   axiosInstance
            //     .post('houses/search', {
            //       searchWord,
            //     })
            //     .then(res => {
            //       const searchHouse = res.data.map((house: any) => {
            //         return {
            //           id: house.id,
            //           title: house.title,
            //           coordinate: {
            //             latitude: Number(house.location[0]),
            //             longitude: Number(house.location[1]),
            //           },
            //         };
            //       });
            //       setMarkers(searchHouse);
            //     });
            // }}
          />
        </View>
        <NaverMapView
          style={{width: '100%', height: '100%'}}
          zoomControl={false}
          center={{
            zoom: 16,
            tilt: 0,
            latitude: 37.56667,
            longitude: 126.97806,
          }}
        />
        <View
          style={{
            position: 'absolute',
            top: '80%',
            alignSelf: 'auto',
          }}>
          <Button
            title="현재 위치"
            onPress={() => Alert.alert('현재위치 표시하는 버튼')}
          />
        </View>
      </View>
    </View>
  );
}

export default StoreMap;
