import React from 'react';
import { Link } from "react-router-native";
import { StyleSheet, Text, View, Image } from "react-native";

const WorkoutFinished = (props) => {
  return (
    <View>
      <Image
        source={{ uri: 'https://fitly2.s3-us-west-1.amazonaws.com/Congrats' }}
        style={styles.image}
      />
      <Image
        source={{ uri: 'https://fitly2.s3-us-west-1.amazonaws.com/congratsMessage' }}
        style={styles.messageImage}
      />
      <Link to={`/`}><Text style={styles.header}>Go Back</Text></Link>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: '18%',
    fontWeight: 'bold',
    marginTop: '55%',
    color: 'white'
  },
  messageImage: {
    width: '100%',
    height: '20%'
  },
  image: {
    width: '100%',
    height: '40%'
  }
})

export default WorkoutFinished;