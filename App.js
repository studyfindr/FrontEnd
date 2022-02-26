import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, Button } from 'react-native';
import { useEffect, useState } from 'react'
import CardStack from './src/components/CardStack'
import Users from './src/database'

import tick from './assets/tick.png'
import cross from './assets/cross.png'




import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

//const Stack = createNativeStackNavigator();



export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  const [currentGroupIndex, setCurrentGroupIndex] = useState(0)

  const tickPressed = () => {

    setCurrentGroupIndex((currentGroupIndex + 1)%Users.Groups.length)
  }

  return (
    //gonna have to change the width height and position of these ticks and crosses

    <View style={styles.pageContainer}>
      {!loggedIn && (
        <View>
          <Text>NOT LOGGED IN</Text>
          <Button onPress={() => setLoggedIn(true)} title={'Log In!'}></Button>
        </View>
      )}
      {loggedIn && (
        <View style={{width:'100%', height:'100%'}}>
          <CardStack group={currentGroupIndex} />
          <View>
          <Pressable onPress={tickPressed} style={{ width: 50, height: 50, position: 'absolute', left: 75, top: -100, zIndex:-100 }}>
              <Image style={{ resizeMode: 'contain', borderRadius: 5 }} source={require('./assets/tick.png')} />
            </Pressable>
            <Pressable onPress={tickPressed} style={{ width: 50, height: 50, position: 'absolute', left: 250, top: -100 }}>
              <Image style={{ resizeMode: 'contain', borderRadius: 5 }} source={require('./assets/cross.png')} />
            </Pressable>
          </View>
        </View>
      )}


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});