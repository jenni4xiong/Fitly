import React from 'react';
import { NativeRouter, Route } from "react-router-native";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import Explore from './screens/Explore';
import Preview from './screens/Preview';
import Workout from './screens/Workout';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: [
        {
          exercises: [{ exercise: "Squats", "sets": 4, "reps": 8 }, { "exercise": "Deadlifts", "sets": 4, "reps": 8 }, { "exercise": "Chest Pull", "sets": 3, "reps": 20 }, { "exercise": "Lat Pull Down", "sets": 4, "reps": 10 }, { "exercise": "DB Shoulder Press", "sets": 4, "reps": 8 }],
          "workoutType": "Resistance",
          "image": "https://fitlyworkouts.s3-us-west-1.amazonaws.com/Rfullbody.jpg",
          "bodyPartFocus": "Full Body",
          _id: "1",
        },
        {
          exercises: [{ exercise: "tricepdip", "sets": 4, "reps": 8 }, { "exercise": "happy dance", "sets": 4, "reps": 8 }, { "exercise": "lunges", "sets": 3, "reps": 20 }, { "exercise": "booty", "sets": 4, "reps": 10 }, { "exercise": "DB Shoulder Press", "sets": 4, "reps": 8 }],
          "workoutType": "HIIT",
          "image": "https://fitlyworkouts.s3-us-west-1.amazonaws.com/Rfullbody.jpg",
          "bodyPartFocus": "Upper Body",
          _id: "2",
        },
        {
          exercises: [{ exercise: "Arms", "sets": 4, "reps": 8 }, { "exercise": "shoulders", "sets": 4, "reps": 8 }, { "exercise": "Chest Pull", "sets": 3, "reps": 20 }, { "exercise": "Lat Pull Down", "sets": 4, "reps": 10 }, { "exercise": "DB Shoulder Press", "sets": 4, "reps": 8 }],
          "workoutType": "Resistance",
          "image": "https://fitlyworkouts.s3-us-west-1.amazonaws.com/Rfullbody.jpg",
          "bodyPartFocus": "Arms",
          _id: "3",
        },
        {
          exercises: [{ exercise: "Jumping Squats", "sets": 4, "reps": 8 }, { "exercise": "test", "sets": 4, "reps": 8 }, { "exercise": "Chest Pull", "sets": 3, "reps": 20 }, { "exercise": "Lat Pull Down", "sets": 4, "reps": 10 }, { "exercise": "DB Shoulder Press", "sets": 4, "reps": 8 }],
          "workoutType": "Resistance",
          "image": "https://fitlyworkouts.s3-us-west-1.amazonaws.com/Rfullbody.jpg",
          "bodyPartFocus": "Legs and Back",
          _id: "4",
        },
        {
          exercises: [{ exercise: "Glutes", "sets": 4, "reps": 8 }, { "exercise": "test", "sets": 4, "reps": 8 }, { "exercise": "Chest Pull", "sets": 3, "reps": 20 }, { "exercise": "Lat Pull Down", "sets": 4, "reps": 10 }, { "exercise": "DB Shoulder Press", "sets": 4, "reps": 8 }],
          "workoutType": "Resistance",
          "image": "https://fitlyworkouts.s3-us-west-1.amazonaws.com/Rfullbody.jpg",
          "bodyPartFocus": "Glutes",
          _id: "5",
        },
        {
          exercises: [{ exercise: "Glutes", "sets": 4, "reps": 8 }, { "exercise": "test", "sets": 4, "reps": 8 }, { "exercise": "Chest Pull", "sets": 3, "reps": 20 }, { "exercise": "Lat Pull Down", "sets": 4, "reps": 10 }, { "exercise": "DB Shoulder Press", "sets": 4, "reps": 8 }],
          "workoutType": "HIIT",
          "image": "https://fitlyworkouts.s3-us-west-1.amazonaws.com/Rfullbody.jpg",
          "bodyPartFocus": "Full Body",
          _id: "6",
        },
        {
          exercises: [{ exercise: "Glutes", "sets": 4, "reps": 8 }, { "exercise": "test", "sets": 4, "reps": 8 }, { "exercise": "Chest Pull", "sets": 3, "reps": 20 }, { "exercise": "Lat Pull Down", "sets": 4, "reps": 10 }, { "exercise": "DB Shoulder Press", "sets": 4, "reps": 8 }],
          "workoutType": "HIIT",
          "image": "https://fitlyworkouts.s3-us-west-1.amazonaws.com/Rfullbody.jpg",
          "bodyPartFocus": "Legs",
          _id: "7",
        }
      ]
    }
    this.currentWorkout = this.currentWorkout.bind(this);
  }

  currentWorkout(id) {
    const { workouts } = this.state;
    return workouts.find(workout => {
      return (workout._id === id);
    })
  }

  render() {
    const { workouts } = this.state;
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path='/' component={() => <Explore workouts={workouts} />} />
          <Route path='/workouts/:workoutId/preview' component={(props) => <Preview workout={this.currentWorkout(props.match.params.workoutId)} />} />
          <Route exact path='/workouts/:workoutId' component={(props) => <Workout workout={this.currentWorkout(props.match.params.workoutId)} />} />
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})


export default App;
