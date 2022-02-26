import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, Button } from 'react-native';
import { useEffect, useState } from 'react'
import CardStack from './src/components/CardStack'
import Users from './src/database'




import { LogBox } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

//const Stack = createNativeStackNavigator();


const USERID = 0;


export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [matched, setMatched] = useState(false)

  const [previousGroupIndex, setPreviousGroupIndex] = useState(0)
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0)

  
  const tickPressed = () => {
    setPreviousGroupIndex(currentGroupIndex%Users.Groups.length)
    setCurrentGroupIndex((currentGroupIndex + 1)%Users.Groups.length)
  }

  const crossPressed = () => {
    setPreviousGroupIndex(currentGroupIndex%Users.Groups.length)
    setCurrentGroupIndex((currentGroupIndex + 1)%Users.Groups.length)
    
  }

  useEffect(() => {
    if (Users.Groups[previousGroupIndex].swipedOn[USERID]){
      setMatched(true)
    }
  }, [currentGroupIndex])

  return (
    //gonna have to change the width height and position of these ticks and crosses

    <View style={styles.pageContainer}>
      {!loggedIn && (
        <View>
          <LoginScreen></LoginScreen>
        </View>
      )}
      {loggedIn && (
        <View style={{width:'100%', height:'100%'}}>
          {matched && (
            <View style={[styles.card]}>
            <Text style={styles.name}>IT'S A MATCH</Text>
            <Text>{Users.Groups[previousGroupIndex].groupName} wants you to join them too!</Text>
            <Image style={styles.image} source={{uri:Users.Groups[3].profilePic}}></Image>
            <Button onPress={() => setMatched(false)} title={'Join their Group'}></Button>
          </View>
          )}
          {!matched && (
            <CardStack group={currentGroupIndex} />
          )}
          
          <View>
          <Pressable onPress={tickPressed} style={{ width: 50, height: 50, position: 'absolute', left: 75, top: -100, zIndex:-100 }}>
              <Image style={{ resizeMode: 'contain', borderRadius: 5 }} source={require('./assets/tick.png')} />
            </Pressable>
            <Pressable onPress={crossPressed} style={{ width: 50, height: 50, position: 'absolute', left: 250, top: -100 }}>
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
  name: {
    color:'black',
    fontSize:24,
    fontWeight: 'bold',
    
  },
  card: {
    justifyContent:'flex-start',
    alignItems:'center',
    alignSelf: 'center',
    zIndex:100,
    position: 'absolute',

    top:165,
    paddingTop:20,

    width: '80%',
    height: '60%',
    borderRadius: 10,
    backgroundColor:'white',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  image: {
    width: 100,
    height: 100,
    overflow: 'hidden',
    borderRadius: 10,
  },
});