import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useState} from 'react';

import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import StoreMap from './src/pages/StoreMap';
import Setting from './src/pages/Setting';
import {FavoriteModal, AroundModal} from './src/components/Modal';

export type LoggedInParamList = {
  StoreMap: undefined;
  Setting: undefined;
  AroundModal: undefined;
  FavoriteModal: undefined;
};

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();
const mainStack = createNativeStackNavigator<LoggedInParamList>();

//네비게이션바__즐겨찾기
const Favorite = () => {
  return (
    <mainStack.Navigator>
      <mainStack.Screen name="StoreMap" component={StoreMap} />
      <mainStack.Screen
        name="FavoriteModal"
        component={FavoriteModal}
        options={{presentation: 'transparentModal'}}
      />
    </mainStack.Navigator>
  );
};

//네비게이션바__주변
const Around = () => {
  return (
    <mainStack.Navigator>
      <mainStack.Screen name="StoreMap" component={StoreMap} />
      <mainStack.Screen
        name="AroundModal"
        component={AroundModal}
        options={{presentation: 'transparentModal'}}
      />
    </mainStack.Navigator>
  );
};

//네비게이션바__마이페이지
const MyPage = () => {
  return (
    <mainStack.Navigator>
      <mainStack.Screen name="Setting" component={Setting} />
    </mainStack.Navigator>
  );
};

function AppInner() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Tab.Screen
            name="Favorite"
            component={Favorite}
            options={{title: '즐겨찾기'}}
            listeners={({navigation}) => ({
              tabPress: e => {
                e.preventDefault();
                navigation.navigate('Favorite', {screen: 'FavoriteModal'});
              },
            })}
          />
          <Tab.Screen
            name="Around"
            component={Around}
            options={{title: '주변'}}
            listeners={({navigation}) => ({
              tabPress: e => {
                e.preventDefault();
                navigation.navigate('Around', {screen: 'AroundModal'});
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
            name="SignIn"
            component={SignIn}
            options={{title: '로그인'}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{title: '회원가입'}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default AppInner;
