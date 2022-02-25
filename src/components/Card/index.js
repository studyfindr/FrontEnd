import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const Card = (props) => {
    const {image, name, bio} = props.user
    return (
        <View style={styles.card}>
        <ImageBackground
            /* At the moment image is not dynamic, this should change once backend setup */
          source={require('../../../assets/Girl.jpg')}
          style={styles.image}
        >
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{bio}</Text>
          </View>
        </ImageBackground>
      </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
      width: '95%',
      height: '70%',
      borderRadius: 10,
  
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
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      borderRadius: 10,
    },
    infoContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingLeft: 10,
      paddingBottom: 10
    },
    name: {
      color:'white',
      fontSize:24,
      fontWeight: 'bold',
      
    },
    description: {
      color:'white',
      fontSize:16,
    }
  });
  