import * as React from 'react';
import {Pressable, Text, View, StyleSheet, Modal, Alert} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useState} from 'react';

type Props = {
  navigation: StackNavigationProp;
};

//즐겨찾기 모달 창
const FavoriteModal = ({navigation}: Props) => {
  return (
    <View style={{flex: 1}}>
      <Pressable
        style={[
          StyleSheet.absoluteFill,
          {backgroundColor: 'rgba(0, 0, 0, 0.3)'},
        ]}
        onPress={navigation.goBack}
      />
      <View
        style={{
          width: '100%',
          height: '30%',
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'blue',
        }}>
        <Text style={{textAlign: 'center'}}>Create Posts !! This is Modal</Text>
      </View>
    </View>
  );
};

//주변 모달 창
const AroundModal = ({navigation}: Props) => {
  return (
    <View style={{flex: 1}}>
      <Pressable
        style={[
          StyleSheet.absoluteFill,
          {backgroundColor: 'rgba(0, 0, 0, 0.3)'},
        ]}
        onPress={navigation.goBack}
      />
      <View
        style={{
          width: '100%',
          height: '30%',
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'pink',
        }}>
        <Text style={{textAlign: 'center'}}>Create Posts !! This is Modal</Text>
      </View>
    </View>
  );
};

export {FavoriteModal, AroundModal};
