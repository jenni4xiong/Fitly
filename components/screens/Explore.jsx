import React from 'react';
import { Link } from "react-router-native";
import { StyleSheet, Text, View } from "react-native";

class Explore extends React.Component {
  render() {
    const { workouts } = this.props;
    return (
      <View style={styles.container}>
        {(workouts.filter((workout) => workout.workoutType === 'Resistance'))
          .map((resistanceWorkout) => (<Link id={resistanceWorkout._id} to={`/workouts/${resistanceWorkout._id}/preview`}><Text>{resistanceWorkout.workoutType} {resistanceWorkout.bodyPartFocus}</Text></Link>))
        }
        {(workouts.filter((workout) => workout.workoutType === 'HIIT'))
          .map((HIITWorkout) => (<Link id={HIITWorkout._id} to={`/workouts/${HIITWorkout._id}/preview`}><Text>{HIITWorkout.workoutType} {HIITWorkout.bodyPartFocus}</Text></Link>))
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f90099',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Explore;