import React from 'react';
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Link } from "react-router-native";
import WorkoutFinished from './WorkoutFinished';
import Rest from './Rest';
// import Exercise from './Exercise';

class Resistance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseIndex: 0,
      setNumber: 0,
      isFinished: false,
      rest: false,
    }
    this.next = this.next.bind(this);
  }
  next() {
    const { exerciseIndex, rest } = this.state;
    const { workout: { exercises } } = this.props;
    const totalExercises = exercises.length;
    if (exerciseIndex >= totalExercises - 1) {
      this.setState({
        isFinished: true,
      })
    }
    else {
      this.setState({
        exerciseIndex: exerciseIndex + 1,
      })
    }
    this.setState({
      rest: !rest,
    })
  }

  render() {
    const { isFinished, exerciseIndex, rest, setNumber } = this.state;
    if (isFinished) {
      return (
        <WorkoutFinished />
      )
    }
    const { workout: { exercises } } = this.props;
    console.log('exercises', exercises);
    console.log('exerciseIndex', exerciseIndex);
    const currentExercise = exercises[exerciseIndex]
    if (!rest) {
      return (
        <View>
          <Link to={`/`}><Text>Quit</Text></Link>
          <Text>Sets {setNumber + 1}/4</Text>
          <Text>{currentExercise.exercise}</Text>
          <Text>{currentExercise.reps} Reps</Text>
          <Button title='Next' onPress={() => this.next()}></Button>
        </View>
      )
    }
    return (
      <Rest next={this.next} />
    )
  }
}

export default Resistance


// {
//   "exercises": [{ "exercise": "Hip Extension (H, M, L)", "sets": 4, "reps": 30 }, { "exercise": "Weighted Bar Glute Bridge", "sets": 4, "reps": 10 }, { "exercise": "Weighted Lunges", "sets": 4, "reps": 20 }, { "exercise": "Kickbacks (Both Sides)", "sets": 4, "reps": 10 }],
//   "workoutType": "Resistance",
//   "image": "https://fitly2.s3-us-west-1.amazonaws.com/Resistance-Glutes",
//   "bodyPartFocus": "Glutes",
//   _id: "3",
// },