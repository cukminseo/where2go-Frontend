import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {useState} from 'react';

import Start from './src/pages/Start';
import SignIn from './src/pages/SignIn';
import Agreement from './src/pages/Agreement';
import SignUp from './src/pages/SignUp';

import StoreMap from './src/pages/StoreMap';
import Setting from './src/pages/Setting';
import {Modal, Pressable, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

/*
 * 앱의 전체적인 흐름
 * 1. 로그인 여부에 따라 보이는 화면이 달라지게 함.
 * 2. 로그인 후 지도 화면과 함께 네비게이션 바를 보이도록 함.
 */

export type LoggedInParamList = {
  StoreMap: undefined;
  Setting: undefined;
};

export type RootStackParamList = {
  Start: undefined;
  SignIn: undefined;
  Agreement: undefined;
  SignUp: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();
const mainStack = createNativeStackNavigator<LoggedInParamList>();

//마이페이지
const MyPage = () => {
  return (
    <mainStack.Navigator>
      <mainStack.Screen name="Setting" component={Setting} />
    </mainStack.Navigator>
  );
};

function AppInner() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [favoriteVisible, setFavoriteVisible] = useState(false);
  const [aroundVisible, setAroundVisible] = useState(false);
  const FavoriteModal = () => {
    return (
      <View>
        <StoreMap />
        <Modal
          animationType="slide"
          visible={favoriteVisible}
          statusBarTranslucent>
          <Text style={{textAlign: 'center'}}>
            Create Posts !! This is Modal
          </Text>
          <Pressable
            onPress={() => {
              setFavoriteVisible(!favoriteVisible);
            }}>
            <Text>hi</Text>
          </Pressable>
        </Modal>
      </View>
    );
  };
  const AroundModal = () => {
    return (
      <View>
        <StoreMap />
        <Modal
          animationType="slide"
          visible={aroundVisible}
          statusBarTranslucent>
          <Text style={{textAlign: 'center'}}>
            Create Posts !! This is Modal
          </Text>
          <Pressable
            onPress={() => {
              setAroundVisible(!aroundVisible);
            }}>
            <Text>around</Text>
          </Pressable>
        </Modal>
      </View>
    );
  };
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Tab.Screen
            name="즐겨찾기"
            component={FavoriteModal}
            listeners={() => ({
              tabPress: e => {
                setFavoriteVisible(!favoriteVisible);
              },
            })}
          />
          <Tab.Screen
            name="주변"
            component={AroundModal}
            listeners={() => ({
              tabPress: e => {
                setAroundVisible(!aroundVisible);
              },
            })}
          />
          <Tab.Screen
            name="MyPage"
            component={MyPage}
            options={{title: '마이페이지'}}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Start"
            component={Start}
            options={{
              title: '시작',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              headerShown: false,
              title: '로그인',
            }}
          />
          <Stack.Screen
            name="Agreement"
            component={Agreement}
            options={{
              headerShown: false,
              title: '약관동의',
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerShown: false,
              title: '회원가입',
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default AppInner;
