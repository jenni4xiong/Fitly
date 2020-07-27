import React from 'react';
import { Text, View, Button } from "react-native";
import { Link } from "react-router-native";

class Exercise extends React.Component {
  render() {
    const { exercise, currentSet, reps, totalSets, next } = this.props;
    return (
      <View>
        <Link to={`/`}><Text>Quit</Text></Link>
        <Text>Set {currentSet}/{totalSets}</Text>
        <Text>{exercise}</Text>
        <Text>{reps} Reps</Text>
        <Button title='Next' onPress={() => next()}></Button>
      </View>
    )
  }
}

export default Exercise;