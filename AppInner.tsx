import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useState} from 'react';

import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import StoreMap from './src/pages/StoreMap';
import Setting from './src/pages/Setting';
import {Modal, Pressable, Text, View} from 'react-native';

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

//마이페이지
const MyPage = () => {
  return (
    <mainStack.Navigator>
      <mainStack.Screen name="Setting" component={Setting} />
    </mainStack.Navigator>
  );
};

function AppInner() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const FModal = () => {
    return (
      <View>
        <StoreMap />
        <Modal
          animationType="slide"
          visible={modalVisible}
          statusBarTranslucent>
          <Text style={{textAlign: 'center'}}>Create Posts !! This is Modal</Text>
          <Pressable
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text>hi</Text>
          </Pressable>
        </Modal>
      </View>
    );
  };
  const AModal = () => {
    return (
      <View>
        <StoreMap />
        <Modal
          animationType="slide"
          visible={modalVisible}
          statusBarTranslucent>
          <Text style={{textAlign: 'center'}}>
            Create Posts !! This is Modal
          </Text>
          <Pressable
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text>hi</Text>
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
            name="FModal"
            component={FModal}
            listeners={() => ({
              tabPress: e => {
                setModalVisible(!modalVisible);
              },
            })}
          />
          <Tab.Screen
            name="AModal"
            component={AModal}
            listeners={() => ({
              tabPress: e => {
                setModalVisible(!modalVisible);
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
