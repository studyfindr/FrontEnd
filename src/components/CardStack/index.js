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
    const groupMembers = Users.Groups[group].members
    const [currentIndex, setCurrentIndex] = useState(0)
    const [nextIndex, setNextIndex] = useState(currentIndex + 1)

    const [update, setUpdate] = useState(false)

    const [currentMemberIndex, setCurrentMemberIndex] = useState(groupMembers[currentIndex])
    const [nextMemberIndex, setNextMemberIndex] = useState(groupMembers[nextIndex])

    const currentProfile = Users.Users[currentMemberIndex];
    const nextProfile = Users.Users[nextMemberIndex];
    
    const groupName = Users.Groups[group].groupName

    const { width: screenWidth } = useWindowDimensions();

    const hiddenPoint = 2 * screenWidth

    useEffect(() => {
        setCurrentIndex(currentIndex+1)
        
    }, [group])

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
                    translateX.value = withSpring(hiddenPoint, {}, () => {
                        runOnJS(setCurrentIndex)(currentIndex + 1)
                    })
                } else {
                    translateX.value = withSpring(-hiddenPoint, {}, () => {
                        runOnJS(setCurrentIndex)(currentIndex + 1)
                    })
                }
            }
        }
    });

    useEffect(() => {
        setCurrentMemberIndex(groupMembers[currentIndex % groupMembers.length])
        setNextIndex(currentIndex + 1)
    }, [currentIndex, update])

    useEffect(() => {
        setNextMemberIndex(groupMembers[nextIndex % groupMembers.length])

    }, [nextIndex])

    useEffect(() => {
        translateX.value = 0
    }, [nextMemberIndex])


    return (
        <View style={{ width: '100%', height:'100%', justifyContent:'flex-start', }}>
            <Text style={{position:'absolute', top:100, left:25, fontSize:28, fontWeight:'bold'}}>{groupName}</Text>
            <View style={styles.nextCard}>
                <Animated.View style={[styles.animatedCard, nextCardStyle]}>
                    <Text>{/* DEBUGGING */}</Text>
                    <Card user={nextProfile}></Card>
                </Animated.View>
            </View>
            <GestureHandlerRootView style={{ width: '100%', height:'100%' }}>
                <PanGestureHandler onGestureEvent={gestureHandler}>
                    <Animated.View style={[styles.animatedCard, cardStyle]}>
                        <Text>{/* DEBUGGING */}</Text>
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
        flex:1,
    },
    nextCard: {
        width: '100%',
        height: '100%',
        zIndex: -100,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    }
});