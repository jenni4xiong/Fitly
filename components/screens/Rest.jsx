import React from 'react';
import { Text, View, Button } from "react-native";
import { Link } from "react-router-native";

class Rest extends React.Component {
  render() {
    const { currentSet, totalSets, next } = this.props;
    return (
      <View>
        <Link to={`/`}><Text>Quit</Text></Link>
        <Text>Set {currentSet}/{totalSets}</Text>
        <Text>Rest!</Text>
        <Text>TODO COUNTDOWN</Text>
        <Button title='Next' onPress={() => next()}></Button>
      </View>
    )
  }
}

export default Rest;