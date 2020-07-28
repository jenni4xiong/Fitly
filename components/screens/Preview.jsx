import React from 'react';
import { Link } from "react-router-native";
import { StyleSheet, Text, View, Image } from "react-native";

class Preview extends React.Component {
  render() {
    const { workout: { _id, bodyPartFocus, exercises, exercises: { circuits }, image, workoutType } } = this.props;
    switch (workoutType) {
      case 'Resistance':
        return (
          <View style={styles.container}>
            <Link to={`/`}><Text>Go back</Text></Link>
            <Image
              source={{ uri: image }}
              style={styles.image}
            />
            <Text>{workoutType} {bodyPartFocus}</Text>
            {exercises.map((exercise) => <Text>{exercise.exercise} {exercise.reps}X{exercise.sets}</Text>)}
            <Link to={`/workouts/${_id}`}><Text>Start</Text></Link>
          </View>
        )
      case 'HIIT':
        return (
          <View style={styles.container}>
            <Link to={`/`}><Text>Go back</Text></Link>
            <Image
              source={{ uri: image }}
              style={styles.image}
            />
            <Text>{workoutType} {bodyPartFocus}</Text>
            {circuits.map((circuit, index) => <View><Text>Circuit {index}</Text>{circuit.map(eachExercise => <Text>{eachExercise.exercise} {eachExercise.reps}</Text>)}</View>)}
            <Link to={`/workouts/${_id}`}><Text>Start</Text></Link>
          </View>
        )
    }
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