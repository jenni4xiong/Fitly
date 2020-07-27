import React from 'react';
import Workout from './Workout';
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, Text, View, Image, Button } from "react-native";

class Preview extends React.Component {
  render() {
    // console.log('props in preview should be workout', this.props.workout.image);
    const { workout: { _id, bodyPartFocus, exercises, image, workoutType } } = this.props;
    // console.log(_id, bodyPartFocus, exercises, image, workoutType);
    console.log(image)
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: image }}
          style={styles.image} //TODO
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
    backgroundColor: 'linear-gradient(90deg, rgba(249, 0, 153, 0.6264880952380952) 36%, rgba(255, 147, 0, 0.4864320728291317) 100%)',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '20%'
  }
})

export default Preview;