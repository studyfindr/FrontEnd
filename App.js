import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Pressable, useWindowDimensions } from 'react-native';
import Card from './src/components/Card'
import Animated, { useSharedValue, useAnimatedStyle, useDerivedValue, useAnimatedGestureHandler, interpolate } from 'react-native-reanimated'
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LogBox } from 'react-native';
   LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const Stack = createNativeStackNavigator();

const girl = {
  image: '../../../assets/Girl.jpg',
  name: 'Female Student',
  bio: 'Second Year Computer Science Student Studying at Adelaide University'
}

const boy = {
  image: 'Boy',
  name: 'Male Student',
  bio: 'First Year Environmental Science Student Studying at Adelaide University'
}

const ROTATION = 60

export default function App() {

  const {width: screenWidth} = useWindowDimensions();

  const hiddenPoint = 1.5*screenWidth

  const translateX = useSharedValue(1)
  const rotateX = useDerivedValue(() => interpolate(

    translateX.value,
    [0, hiddenPoint],
    [0,ROTATION]
  )+'deg')

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
      {
        rotate: rotateX.value
      }
    ]
  }))

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
    },
    onActive: (event,context) => {
      translateX.value = event.translationX+context.startX
    }
  });

  return (
    <View style={styles.pageContainer}>
      <GestureHandlerRootView>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={[styles.animatedCard, cardStyle]}>
            <Card user={girl} />
          </Animated.View>
        </PanGestureHandler>
      </GestureHandlerRootView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedCard: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
