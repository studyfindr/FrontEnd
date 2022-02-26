import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import CardStack from './src/components/CardStack'
import Users from './src/database'

import tick from './assets/tick.png'
import cross from './assets/cross.png'
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';



import { LogBox } from 'react-native';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

//const Stack = createNativeStackNavigator();



export default function App() {


  return (
    <View style={styles.pageContainer}>
      <CardStack group={1} />
      <View>
        <Image style={{ width: 50, height: 50, position:'absolute', left:-50, top:-150 }} source={require('./assets/tick.png')} />
        <Image style={{ width: 50, height: 50, position:'absolute', left:50, top:-150 }} source={require('./assets/cross.png')} />
      </View>

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