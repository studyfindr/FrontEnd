import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const Card = (props) => {
    const {fullName, age, degree,profilePc, school, subjects} = props.user
    return (
        <View style={styles.card}>
        <ImageBackground
            /* At the moment image is not dynamic, this should change once backend setup */
          source={{uri:profilePc}}
          style={styles.image}
        >
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{fullName}</Text>
            <Text style={styles.description}>{`A ${age} year old student studying ${degree} at ${school}`}</Text>
            <Text style={styles.description}>{`Subjects: ${subjects.join(', ')}`}</Text>
          </View>
        </ImageBackground>
      </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
      width: '90%',
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
      paddingBottom: 10,
      //opacity:'inherit',
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
  