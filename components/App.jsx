import React from 'react';
import { NativeRouter, Route } from "react-router-native";
import { StyleSheet, View, SafeAreaView, ImageBackground, Image } from "react-native";
import Explore from './screens/Explore';
import Preview from './screens/Preview';
import Workout from './screens/Workout';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: [
        {
          "exercises": [{ "exercise": "Squats", "sets": 4, "reps": 8 }, { "exercise": "Deadlifts", "sets": 4, "reps": 8 }, { "exercise": "Chest Pull", "sets": 3, "reps": 20 }, { "exercise": "Lat Pull Down", "sets": 4, "reps": 10 }, { "exercise": "DB Shoulder Press", "sets": 4, "reps": 8 }],
          "workoutType": "Resistance",
          "image": "https://fitly2.s3-us-west-1.amazonaws.com/Resistance-FullBody",
          "bodyPartFocus": "Full Body",
          _id: "1",
        },
        {
          "exercises": [{ "exercise": "Squats", "sets": 4, "reps": 8 }, { "exercise": "Deadlifts", "sets": 4, "reps": 8 }, { "exercise": "Weighted Lunges", "sets": 4, "reps": 20 }, { "exercise": "Calf Raises", "sets": 4, "reps": 20 }, { "exercise": "T Bar Row", "sets": 4, "reps": 8 }],
          "workoutType": "Resistance",
          "image": "https://fitly2.s3-us-west-1.amazonaws.com/Resistance-LegsAndBack",
          "bodyPartFocus": "Leg & Back",
          _id: "2",
        },
        {
          "exercises": [{ "exercise": "Hip Extension (H, M, L)", "sets": 4, "reps": 30 }, { "exercise": "Weighted Bar Glute Bridge", "sets": 4, "reps": 10 }, { "exercise": "Weighted Lunges", "sets": 4, "reps": 20 }, { "exercise": "Kickbacks (Both Sides)", "sets": 4, "reps": 10 }],
          "workoutType": "Resistance",
          "image": "https://fitly2.s3-us-west-1.amazonaws.com/Resistance-Glutes",
          "bodyPartFocus": "Glutes",
          _id: "3",
        },
        {
          "exercises": [{ "exercise": "DB Shoulder Press", "sets": 4, "reps": 8 }, { "exercise": "DB Lateral Raise", "sets": 4, "reps": 8 }, { "exercise": "DB Upright Row", "sets": 4, "reps": 10 }, { "exercise": "Lying DB Tricep Extension", "sets": 4, "reps": 10 }],
          "workoutType": "Resistance",
          "image": "https://fitly2.s3-us-west-1.amazonaws.com/Resistance-Arms",
          "bodyPartFocus": "Arms",
          _id: "4",
        },
        {
          "exercises": {
            "circuits": [
              [
                { "exercise": "Burpees", "reps": 20 },
                { "exercise": "Situps", "reps": 20 },
                { "exercise": "Jumping Jacks", "reps": 30 },
                { "exercise": "Tricep Dips", "reps": 10 }
              ],
              [
                { "exercise": "High Knees", "reps": 20 },
                { "exercise": "Push Ups", "reps": 10 },
                { "exercise": "Bicycle Crunch", "reps": 16 },
                { "exercise": "Star Jumps", "reps": 10 }
              ]
            ]
          },
          "workoutType": "HIIT",
          "image": "https://fitly2.s3-us-west-1.amazonaws.com/HIIT-FullBody",
          "bodyPartFocus": "Full Body",
          _id: "5",
        },
        {
          "exercises": {
            "circuits": [
              [
                { "exercise": "Burpees", "reps": 20 },
                { "exercise": "Lunges", "reps": 20 },
                { "exercise": "Single Leg Step Up", "reps": 30 },
                { "exercise": "Split Lunges", "reps": 20 }
              ],
              [
                { "exercise": "X Jumps", "reps": 20 },
                { "exercise": "Step Ups", "reps": 30 },
                { "exercise": "Reverse Lunges", "reps": 20 },
                { "exercise": "Donkey Kicks (20 on each side)", "reps": 40 }
              ]
            ]
          },
          "workoutType": "HIIT",
          "image": "https://fitly2.s3-us-west-1.amazonaws.com/HIIT-LowerBody",
          "bodyPartFocus": "Lower Body",
          _id: "6",
        },
        {
          "exercises": {
            "circuits": [
              [
                { "exercise": "Jumping Jacks", "reps": 30 },
                { "exercise": "Tricep Dips", "reps": 10 },
                { "exercise": "Plank Shoulder Taps", "reps": 20 },
                { "exercise": "Mountain Climbers", "reps": 30 }
              ],
              [
                { "exercise": "Push Ups", "reps": 10 },
                { "exercise": "Situps", "reps": 20 },
                { "exercise": "Bicycle Crunches", "reps": 20 },
                { "exercise": "Elevator", "reps": 20 }
              ]
            ]
          },
          "workoutType": "HIIT",
          "image": "https://fitly2.s3-us-west-1.amazonaws.com/HIIT-UpperBody",
          "bodyPartFocus": "Upper Body",
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
        <View style={styles.outerContainer}>
          <ImageBackground
            source={{ uri: 'https://fitly2.s3-us-west-1.amazonaws.com/background' }}
            style={styles.image}
          >
            <Image
              source={{ uri: 'https://fitly2.s3-us-west-1.amazonaws.com/logo4' }}
              style={styles.logo}
            />
            <SafeAreaView style={styles.container}>
              <Route exact path='/' component={() => <Explore workouts={workouts} />} />
              <Route path='/workouts/:workoutId/preview' component={(props) => <Preview workout={this.currentWorkout(props.match.params.workoutId)} />} />
              <Route exact path='/workouts/:workoutId' component={(props) => <Workout workout={this.currentWorkout(props.match.params.workoutId)} />} />
            </SafeAreaView>
          </ImageBackground>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  outerContainer: {
    flex: 1,
  },
  logo: {
    height: '11%'
  }
})



export default App;
