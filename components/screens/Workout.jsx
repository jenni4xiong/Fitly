import React from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import WorkoutFinished from './WorkoutFinished';
import Exercise from './Exercise';


class Workout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseNumber: 1,
      setNumber: 1,
      isFinished: false
    }
  }

  currentExercise() {
    const { workout } = this.props;
    const { exerciseNumber, setNumber, isFinished } = this.state;
    const totalExercises = workout.exercises.length - 1;
    const totalSets = workouts.exercises[exerciseNumber - 1].sets;
    if (setNumber >= totalSets) {
      if (exerciseNumber >= totalExercises) {
        this.setState({
          isFinished: true
        });
      } else {
        this.setState({
          exerciseNumber: exerciseNumber + 1,
          setNumber: 1
        })
      }
    } else {
      this.setState({
        setNumber: setNumber + 1
      })
    }
  }
  render() {
    const { isFinished } = this.state;
    console.log(this.props.workout);
    if (isFinished) {
      return (
        <WorkoutFinished />
      )
    }
    return (
      <Exercise />
    )
  }
}


export default Workout;

