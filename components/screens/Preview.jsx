import React from 'react';
import { Link } from "react-router-native";
import { StyleSheet, Text, View, Image, Button } from "react-native";

class Preview extends React.Component {
  render() {
    const { workout: { _id, bodyPartFocus, exercises, exercises: { circuits }, image, workoutType } } = this.props;
    switch (workoutType) {
      case 'Resistance':
        return (
          <View style={styles.container}>
            <View style={styles.backContainer}>
              <Link to={`/`}>
                <Image
                  source={require('../../assets/back-button.png')}
                />
              </Link>
            </View>
            <View style={styles.innerContainer}>
              <Image
                source={{ uri: image }}
                style={styles.image}
              />
              <Text style={styles.title}>{workoutType} {bodyPartFocus}</Text>
              {exercises.map((exercise) => <Text style={styles.text}>{exercise.exercise} {exercise.reps}X{exercise.sets}</Text>)}
              <Link to={`/workouts/${_id}`}><Text style={styles.start}>Start</Text></Link>
            </View>
          </View>
        )
      case 'HIIT':
        return (
          <View style={styles.container}>
            <View style={styles.backContainer}>
              <Link to={`/`}>
                <Image
                  source={require('../../assets/back-button.png')}
                  style={styles.backArrow}
                />
              </Link>
            </View>
            <View style={styles.innerContainer}>
              <Image
                source={{ uri: image }}
                style={styles.image}
              />
              <Text style={styles.title}>{workoutType} {bodyPartFocus}</Text>
              {circuits.map((circuit, index) => <View><Text style={styles.circuit}>Circuit {index + 1}</Text>{circuit.map(eachExercise => <Text style={styles.text}>{eachExercise.exercise} {eachExercise.reps}</Text>)}</View>)}
              <Link to={`/workouts/${_id}`}><Text style={styles.start}>Start</Text></Link>
            </View>
          </View>
        )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  backContainer: {
    marginTop: '3%',
    marginLeft: '2%',
    height: '5%',
    width: '20%',
  },
  image: {
    width: '100%',
    height: '45%',
    marginBottom: '5%'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: '1%',
    borderRadius: 2,
    shadowColor: '#07012e',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1,
  },
  text: {
    fontSize: 17,
    marginBottom: '1%'
  },
  start: {
    backgroundColor: '#5A5FFF',
    paddingRight: 163,
    paddingLeft: 163,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 20,
    borderRadius: 11,
    fontWeight: 'bold',
    borderRadius: 2,
    shadowColor: '#07012e',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
  },
  back: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    fontSize: 15,
    fontWeight: 'bold'
  },
  circuit: {
    fontWeight: 'bold',
    fontSize: 20,
  },

})

export default Preview;