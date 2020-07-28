import React from 'react';
import { Text, View, Button } from "react-native";
import { Link } from "react-router-native";

class Rest extends React.Component {
  render() {
    const { next } = this.props;
    return (
      <View>
        <Link to={`/`}><Text>Quit</Text></Link>
        <Text>Rest!</Text>
        <Text>TODO COUNTDOWN</Text>
        <Button title='Next' onPress={() => next()}></Button>
      </View>
    )
  }
}

export default Rest;