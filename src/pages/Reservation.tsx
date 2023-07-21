import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

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
