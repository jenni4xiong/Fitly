import React from 'react';
import { Link } from "react-router-native";
import { StyleSheet, Text, View } from "react-native";

const WorkoutFinished = (props) => {
  return (
    <View>
      <Text>
        Congrats! You finished!
      </Text>
      <Link to={`/`}><Text>Goodjob Jen!</Text></Link>
    </View>
  )
}

export default WorkoutFinished;