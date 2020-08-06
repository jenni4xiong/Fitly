import React from 'react';
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { Link } from "react-router-native";
import WorkoutFinished from './WorkoutFinished';
import Rest from './Rest';

class HIIT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseIndex: 0,
      isFinished: false,
      rest: false,
      circuitIndex: 0,
      round: 0,
    }
    this.next = this.next.bind(this)
  }

  next() {
    const { exerciseIndex, rest, circuitIndex, round } = this.state;
    const totalExercises = 4;
    const totalRounds = 2;
    if (exerciseIndex >= totalExercises - 1) {
      //if done going through all the rounds
      if (round >= totalRounds - 1) {
        //if done going through all the circuits
        if (circuitIndex >= 1) {
          //isFinished is true
          this.setState({
            isFinished: true,
          })
        }
        //else increase circuit
        else {
          if (rest) {
            this.setState({
              circuitIndex: circuitIndex + 1,
              round: 0,
              exerciseIndex: 0,
              rest: false,
            })
          } else {
            this.setState({
              rest: true,
            })
          }
        }
      }
      //else increase rounds
      else {
        if (rest) {
          this.setState({
            round: round + 1,
            exerciseIndex: 0,
            rest: false,
          })
        } else {
          this.setState({
            rest: true,
          })
        }
      }
    }
    //else increase exercise
    else {
      this.setState({
        exerciseIndex: exerciseIndex + 1,
      })
    }
  }

  render() {
    const { isFinished, exerciseIndex, rest, circuitIndex, round } = this.state;
    if (isFinished) {
      return (
        <WorkoutFinished />
      )
    }
    const { workout: { exercises: { circuits } } } = this.props;
    const currentExercise = circuits[circuitIndex][exerciseIndex]
    console.log('circuitIndex', circuitIndex, 'exerciseIndex', exerciseIndex, 'rest:', rest);
    if (!rest) {
      return (
        <View style={styles.container}>
          <Link to={`/`}>
            <Text>
              <Image
                source={require('../../assets/back-button.png')}
                style={styles.backArrow}
              />
              <Text>  </Text>
              <Text style={styles.quit}>Quit</Text>
            </Text>
          </Link>
          <View style={styles.info}>
            <Text style={styles.text}>Circuit {circuitIndex + 1}/2</Text>
            <Text style={styles.text}>Round {round + 1}/2</Text>
            <Text style={styles.text}>Exercise {exerciseIndex + 1}/4</Text>
            <Text style={styles.title}>{currentExercise.exercise}</Text>
            <Text style={styles.reps}>{currentExercise.reps}</Text>
          </View>
          <View style={styles.button}>
            <Button title='Next' onPress={() => this.next()}></Button>
          </View>
        </View>
      )
    }
    return (
      <Rest next={this.next} />
    )
  }
}

const styles = StyleSheet.create({
  quit: {
    fontSize: 30,
    marginLeft: 10,
  },
  info: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20%'
  },
  text: {
    fontSize: 18,
    marginBottom: '2%'
  },
  title: {
    fontSize: 40,
    marginTop: '15%',
    marginBottom: '5%',
    fontWeight: 'bold'
  },
  reps: {
    fontSize: 100,
    marginBottom: '5%',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: 'black',
    padding: 10
  },
  container: {
    justifyContent: 'space-between'
  }
})

export default HIIT;


// {
//   "exercises": {
//     "circuits": [
//       [
//         { "exercise": "Burpees", "reps": 20 },
//         { "exercise": "Situps", "reps": 20 },
//         { "exercise": "Jumping Jacks", "reps": 30 },
//         { "exercise": "Tricep Dips", "reps": 10 }
//       ],
//       [
//         { "exercise": "High Knees", "reps": 20 },
//         { "exercise": "Push Ups", "reps": 10 },
//         { "exercise": "Bicycle Crunch", "reps": 16 },
//         { "exercise": "Star Jumps", "reps": 10 }
//       ]
//     ]
//   },
//   "workoutType": "HIIT",
//   "image": "https://fitly2.s3-us-west-1.amazonaws.com/HIIT-FullBody",
//   "bodyPartFocus": "Full Body",
//   _id: "5",
// },
