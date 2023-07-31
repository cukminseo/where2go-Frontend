import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

/*
 * StoreModal에 있는 '바로 예약' 버튼 클릭시 전환되는 페이지.
 * 아직 구현되지 않은 화면으로 기본적인 틀만 작성해두었음.
 */

const Reservation = props => {
  useEffect(() => {
    console.log('바로 예약 ', '바로 예약화면~~~');
  }, []);

  return (
    <View>
      <Text onPress={() => props.setReservation(false)}>바로 예약</Text>
    </View>
  );
};

export default Reservation;
