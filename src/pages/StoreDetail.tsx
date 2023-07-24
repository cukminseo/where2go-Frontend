import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {useEffect} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Setting from './Setting';

const StoreDetail = props => {
  useEffect(() => {
    console.log('매장보기 ', '매장입니다~~~');
  }, []);

  const Tab = createMaterialTopTabNavigator();

  //임의의 데이터
  const seat = 4;
  const eventScript = '[8/1~8/9] 리뷰 작성시 콜라 사이다 드리고 있습니다^^';
  const script =
    '한식과 양식의 퓨전 요리를 맛 볼 수 있습니다! 강력히 추천합니다.';
  return (
    <>
      <SafeAreaView style={styles.storeDetail}>
        <View style={{height: '25%', backgroundColor: 'gray'}}>
          <Text onPress={() => props.setStoreDetail(false)}>화살표</Text>
        </View>
        <View style={styles.storeDetail__textBox}>
          <View style={styles.storeDetail_textBoxSub}>
            <Text style={styles.storeDetail__textStyle}>주점 이름</Text>
            <Text style={{...styles.storeDetail__textStyleSub, color: 'red'}}>
              실시간 좌석 : {seat}
            </Text>
          </View>
          <Text style={{...styles.storeDetail__textStyleSub, color: '#FECC28'}}>
            {eventScript}
          </Text>
          <Text style={styles.storeDetail__textStyleSub}>{script}</Text>
          <Pressable style={styles.storeDetail__btnReservation}>
            <Text style={{...styles.storeDetail__textStyleSub, color: 'white'}}>
              바로 예약하기
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
      <Tab.Navigator
        style={{flex: 1}}
        initialRouteName="SignIn"
        screenOptions={{
          tabBarActiveTintColor: '#333333',
          tabBarLabelStyle: {fontSize: 20},
          tabBarStyle: {backgroundColor: 'white'},
          tabBarIndicatorStyle: {
            backgroundColor: '#4E6D5E',
            borderColor: '#4E6D5E',
            borderBottomWidth: 3,
          },
        }}>
        <Tab.Screen
          name="SignIn"
          component={SignIn}
          options={{
            tabBarLabel: '메뉴',
          }}
        />
        <Tab.Screen
          name="SignUp"
          component={SignUp}
          options={{
            tabBarLabel: '후기',
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            tabBarLabel: '정보',
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  storeDetail: {
    flex: 1,
  },
  storeDetail__textBox: {padding: 15},
  storeDetail_textBoxSub: {flexDirection: 'row', alignItems: 'center'},
  storeDetail__textStyle: {
    fontSize: 28,
    color: '#333333',
    marginBottom: 10,
    marginRight: 10,
  },
  storeDetail__textStyleSub: {
    fontSize: 18,
    color: '#333333',
  },
  storeDetail__btnReservation: {
    marginTop: 10,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: '25%',
    fontSize: 16,
    backgroundColor: '#4E6D5E',
  },
});

export default StoreDetail;
