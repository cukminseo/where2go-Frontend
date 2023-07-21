import * as React from 'react';
import {useEffect, useRef} from 'react';
import {
  Pressable,
  Text,
  SafeAreaView,
  Dimensions,
  Animated,
  PanResponder,
  Modal,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import {useAppDispatch} from '../store';
import storeModalSlice from '../slices/storeModal';

const StoreModal = () => {
  //const [detailVisible, setDetailVisible] = useState(true);
  const dispatch = useAppDispatch();
  const storeModal = useSelector(
    (state: RootState) => state.storeModal.detailVisible,
  );

  const screenHeight = Dimensions.get('window').height;
  const panY = useRef(new Animated.Value(screenHeight)).current; //
  const translateY = panY.interpolate({
    // panY에 따라 BottomSheet의 y축 위치를 결정합니다.
    inputRange: [-1, 0, 1], // inputRage의 -1을 outpuRage의 0으로 치환하기 때문에 panY가 0보다 작아져도 BottomSheet의 y축 위치에는 변화가 없습니다.
    outputRange: [0, 0, 1],
  });
  const resetBottomSheet = Animated.timing(panY, {
    // BottomSheet를 초기 위치로 움직이는 함수입니다.
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  });

  const closeBottomSheet = Animated.timing(panY, {
    // BottomSheet를 내리는 함수입니다.
    toValue: screenHeight,
    duration: 300,
    useNativeDriver: true,
  });
  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: (event, gestureState) => {
        // BottomSheet에 터치 또는 드래그 이벤트가 발생할 때 실행됩니다.
        panY.setValue(gestureState.dy); // 처음 터치 영역을 기준으로 y축으로 드래그한 거리를 panY에 저장합니다.
      },
      onPanResponderRelease: (event, gestureState) => {
        // 유저가 BottomSheet 손을 뗐을 때 실행됩니다.
        if (gestureState.dy > 0 && gestureState.vy > 1.5) {
          // 유저가 y축으로 1.5 이상의 속도로 드래그 했을 때 BottomSheet가 닫히도록 조건을 지정했습니다.
          closeModal();
        } else {
          // 위 조건에 부합하지 않으면 BottomSheet의 위치를 초기화 하도록 설계했습니다.
          resetBottomSheet.start();
        }
      },
    }),
  ).current;

  useEffect(() => {
    console.log('prefix StoreModal stauts : ', storeModal);
    if (storeModal) {
      resetBottomSheet.start();
    }
  }, []);

  const closeModal = () => {
    closeBottomSheet.start(() => {
      dispatch(storeModalSlice.actions.setDetailVisible());
    });
  };

  //임의 데이터
  const storeName = '주점 이름';
  const answer = '10';
  const star = '4.5';
  const seat = 4;

  return (
    <View style={styles.overlay}>
      <TouchableWithoutFeedback
        onPress={closeModal} // onPress 이벤트 등록
      >
        <View style={styles.background} />
      </TouchableWithoutFeedback>
      <Animated.View
        style={{
          ...styles.bottomSheetContainer,
          transform: [{translateY: translateY}],
        }} // translateY 값을 지정해 BottomSheet의 위치를 조정합니다.
        {...panResponders.panHandlers}>
        <View style={styles.filterModal__content}>
          <View style={styles.filterModal__image} />
          <View style={styles.filterModal__mainContent}>
            <Text style={styles.filterModal__textStyle}>{storeName}</Text>
            <Text style={styles.filterModal__textStyle}>
              평균 응답률 : {answer}분 이내
            </Text>
            <Text style={styles.filterModal__textStyle}>별점 : {star} / 5</Text>
          </View>
        </View>
        <View style={styles.filterModal__subContent}>
          <Text style={styles.filterModal__textStyle}>
            예약 가능 좌석 수 : {seat}
          </Text>
          <Text style={{...styles.filterModal__textStyle, color: '#FECC28'}}>
            [이벤트] 리뷰 작성시 콜라, 사이다 증정
          </Text>
        </View>
        <View style={styles.check}>
          <Pressable style={styles.check__btnCancel}>
            <Text style={styles.check__textStyle}>바로 예약</Text>
          </Pressable>
          <Pressable style={styles.check__btnAllow}>
            <Text style={styles.check__textStyle}>매장 보기</Text>
          </Pressable>
        </View>
      </Animated.View>
    </View>
    // <SafeAreaView style={{backgroundColor: 'white'}}>
    //   <Text style={{textAlign: 'center'}}>Create Posts !! This is Modal</Text>
    //   <Pressable>
    //     <Text>hi</Text>
    //   </Pressable>
    //   <Text
    //     onPress={() => {
    //       dispatch(storeModalSlice.actions.setDetailVisible());
    //       console.log('Modal clicked', storeModal);
    //     }}>
    //     취소
    //   </Text>
    // </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  bottomSheetContainer: {
    height: 300,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  filterModal__image: {
    backgroundColor: 'gray',
    width: 100,
    height: 100,
  },
  filterModal__content: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 40,
    marginLeft: 10,
  },
  filterModal__mainContent: {
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  filterModal__subContent: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop: 30,
    marginLeft: 10,
  },
  filterModal__textStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 3,
  },
  check: {
    flexDirection: 'row',
    height: '20%',
  },
  check__textStyle: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  check__btnCancel: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#4E6D5E',
  },
  check__btnAllow: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#8DBBA7',
  },
});
export default StoreModal;
