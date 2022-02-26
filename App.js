import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import CardStack from './src/components/CardStack'
import Users from './src/database'
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
      <CardStack group={0}/>
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
});