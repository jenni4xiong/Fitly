import React from 'react';
import { Link } from "react-router-native";
import { StyleSheet, Text, View, Image } from "react-native";

class Preview extends React.Component {
  render() {
    const { workout: { _id, bodyPartFocus, exercises, image, workoutType } } = this.props;
    return (
      <View style={styles.container}>
        <Link to={`/`}><Text>Go back</Text></Link>
        <Image
          source={{ uri: image }}
          style={styles.image}
        />
        <Text>{workoutType} {bodyPartFocus}</Text>
        {exercises.map(eachExercise => <Text>{eachExercise.exercise} {eachExercise.reps}X{eachExercise.sets}</Text>)}
        <Link to={`/workouts/${_id}`}><Text>Start</Text></Link>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f90099',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '20%'
  }
})

export default Preview;