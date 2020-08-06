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
    const { exerciseIndex, rest, setNumber } = this.state;
    const { workout: { exercises } } = this.props;
    const totalExercises = exercises.length;

    if (rest) {
      if (setNumber < exercises[exerciseIndex].sets - 1) {
        this.setState({
          setNumber: setNumber + 1,
        })
      } else if (exerciseIndex < totalExercises - 1) {
        this.setState({
          exerciseIndex: exerciseIndex + 1,
          setNumber: 0,
        })
      }
      else {
        this.setState({
          isFinished: true,
        })
      }
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
            <Text style={styles.text}>Set {setNumber + 1}/4</Text>
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
    fontSize: 25,
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
    marginBottom: '18%',
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
  }
})

export default Resistance


// {
//   "exercises": [{ "exercise": "Hip Extension (H, M, L)", "sets": 4, "reps": 30 }, { "exercise": "Weighted Bar Glute Bridge", "sets": 4, "reps": 10 }, { "exercise": "Weighted Lunges", "sets": 4, "reps": 20 }, { "exercise": "Kickbacks (Both Sides)", "sets": 4, "reps": 10 }],
//   "workoutType": "Resistance",
//   "image": "https://fitly2.s3-us-west-1.amazonaws.com/Resistance-Glutes",
//   "bodyPartFocus": "Glutes",
//   _id: "3",
// },