import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Card from './src/components/Card'

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

export default function App() {
  return (
    <View style={styles.pageContainer}>
      <Card user={boy}/>
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
