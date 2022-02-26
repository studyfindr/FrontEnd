import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, Pressable, useWindowDimensions } from 'react-native';

const ROTATION = 60
const SWIPEVELOCITY = 800

import Card from '../Card'
import Animated, { useSharedValue, useAnimatedStyle, useDerivedValue, useAnimatedGestureHandler, interpolate, withSpring, runOnJS } from 'react-native-reanimated'
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Users from '../../database'

const CardStack = (props) => {
    const group = props.group

    const [currentIndex, setCurrentIndex] = useState(0)
    const [nextIndex, setNextIndex] = useState(currentIndex + 1)

    const currentProfile = Users.Users[currentIndex];
    const nextProfile = Users.Users[nextIndex];

    const { width: screenWidth } = useWindowDimensions();

    const hiddenPoint = 2 * screenWidth

    const translateX = useSharedValue(1)
    const rotateX = useDerivedValue(() => interpolate(

        translateX.value,
        [0, hiddenPoint],
        [0, ROTATION]
    ) + 'deg')

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

    const nextCardStyle = useAnimatedStyle(() => ({
        transform: [
            {
                scale: interpolate(translateX.value, [-hiddenPoint, 0, hiddenPoint], [1, 0.75, 1]),
            },
        ],
        opacity: interpolate(translateX.value, [-hiddenPoint, 0, hiddenPoint], [1, 0.7, 1])
    }))

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, context) => {
            context.startX = translateX.value;
            console.log(group)
        },
        onActive: (event, context) => {
            translateX.value = event.translationX + context.startX
        },
        onEnd: (event) => {
            if (Math.abs(event.velocityX) < SWIPEVELOCITY) {
                translateX.value = withSpring(0);
                //return;
            } else {
                if (event.velocityX > 0) {
                    translateX.value = withSpring(hiddenPoint, {}, () => runOnJS(setCurrentIndex)(currentIndex + 1))
                } else {
                    translateX.value = withSpring(-hiddenPoint, {}, () => runOnJS(setCurrentIndex)(currentIndex + 1))
                }
            }
        }
    });

    useEffect(() => {
        translateX.value = 0
        setNextIndex(currentIndex + 1)
    }, [currentIndex])


    return (
        <View style={{width:'100%'}}>
            <View style={styles.nextCard}>
                <Animated.View style={[styles.animatedCard, nextCardStyle]}>
                    <Card user={nextProfile}></Card>
                </Animated.View>
            </View>
            <GestureHandlerRootView style={{ width: '100%' }}>
                <PanGestureHandler onGestureEvent={gestureHandler}>
                    <Animated.View style={[styles.animatedCard, cardStyle]}>
                        <Card user={currentProfile} />
                    </Animated.View>
                </PanGestureHandler>
            </GestureHandlerRootView>
        </View>
            

    )
}

export default CardStack

const styles = StyleSheet.create({
    animatedCard: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      //flex:1,
    },
    nextCard: {
      width:'100%',
      height:'100%',
      zIndex:-100,
      justifyContent:'center',
      alignItems:'center',
      position: 'absolute',
    }
  });