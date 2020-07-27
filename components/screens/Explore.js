import React from 'react';
import { NativeRouter, Route, Link } from "react-router-native";
import { StyleSheet, Text, View, AppRegistry } from "react-native";

class Explore extends React.Component {
  render() {
    const { workouts } = this.props;
    return (
      <View>
        {workouts.map((workout) => (<Link to={`/workouts/${workout._id}/preview`}><Text>{workout.bodyPartFocus}</Text></Link>))}
      </View>
    )
  }
}

export default Explore;