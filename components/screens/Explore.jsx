import React from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, Text, View, AppRegistry } from "react-native";

class Explore extends React.Component {
  render() {
    const { workouts } = this.props;
    return (
      <View style={styles.container}>
        {workouts.map((workout) => (<Link id={workout._id} to={`/workouts/${workout._id}/preview`}><Text>{workout.bodyPartFocus}</Text></Link>))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(90deg, rgba(249, 0, 153, 0.6264880952380952) 36%, rgba(255, 147, 0, 0.4864320728291317) 100%)',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Explore;