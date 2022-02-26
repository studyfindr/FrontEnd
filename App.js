import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, Button, ImageBackground } from 'react-native';
import {KeyboardAvoidingView,TouchableOpacity,TextInput} from 'react-native'
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

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loggedIn, setLoggedIn] = useState(false)
  const [matched, setMatched] = useState(false)

  const [previousGroupIndex, setPreviousGroupIndex] = useState(0)
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0)
  const [tickUpdate, setTickUpdate] = useState(true)
  
  const tickPressed = () => {
    setPreviousGroupIndex(currentGroupIndex%Users.Groups.length)
    setCurrentGroupIndex((currentGroupIndex + 1)%Users.Groups.length)
    setTickUpdate(!tickUpdate)
  }

  const crossPressed = () => {
    setPreviousGroupIndex(currentGroupIndex%Users.Groups.length)
    setCurrentGroupIndex((currentGroupIndex + 1)%Users.Groups.length)
    
  }

  useEffect(() => {
    if (Users.Groups[previousGroupIndex].swipedOn[USERID]){
      setMatched(true)
    }
  }, [tickUpdate])

  return (
    //gonna have to change the width height and position of these ticks and crosses

    <View style={styles.pageContainer}>
      {!loggedIn && (
        <View>
          <KeyboardAvoidingView
            style = {styles.container}
            behavior = "padding"
        >
            <View style = {styles.inputContainer}>
                <TextInput
                    placeholder = "Email"
                    value = { email}
                    onChangeText = {text => setEmail(text)}
                    style = {styles.input}
                />
                <TextInput
                    placeholder = "Password"
                    value = { password}
                    onChangeText = {text => setPassword(text)}
                    style = {styles.input}
                    secureTextEntry
                />
            </View>
            
            <View style = {styles.buttonContainer}>
                <TouchableOpacity
                    onPress = {() => {setLoggedIn(true) }}
                    style = {styles.button}
                >
                    <Text style = {styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {() => { }}
                    style = {styles.button, styles.buttonOutline}
                >
                    <Text style = {styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        </View>
      )}
      {loggedIn && (
        <View style={{width:'100%', height:'100%'}}>
          {matched && (

            <View style={[styles.card]}>
           

            <Text style={styles.name}>IT'S A MATCH</Text>
            <Text>{Users.Groups[previousGroupIndex].groupName} wants you to join them too!</Text>
            <Image style={styles.image, {width: 300, height: 420, position: 'absolute', left: 15, top: 100, borderRadius: 10} } source={{uri:Users.Groups[3].profilePic}}></Image>
            <Button onPress={() => setMatched(false)} title={'Join their Group'}  ></Button>
          </View>
          )}
          {!matched && (
            <CardStack group={currentGroupIndex} />
          )}
          
          <View>
          <Pressable onPress={tickPressed} style={{ width: 75, height: 75, position: 'absolute', left: 75, top: -100, zIndex:-100 }}>
              <Image style={{width: '100%', height: '100%', resizeMode: 'contain', borderRadius: 5 }} source={require('./assets/tick.png')} />
            </Pressable>
            <Pressable onPress={crossPressed} style={{ width:75, height: 75, position: 'absolute', left: 250, top: -100 }}>
              <Image style={{ width: '100%', height: '100%', resizeMode: 'contain', borderRadius: 5 }} source={require('./assets/cross.png')} />
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
inputContainer: {
    width: '100%'
},
input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
},
buttonContainer: {
    width : '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
},
button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
},
buttonOutline: {
    backgroundColor: 'white',
    marginTop : 5,
    borderColor: '#0782F9',
    borderWidth: 2,
},
buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
},
buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
},
});