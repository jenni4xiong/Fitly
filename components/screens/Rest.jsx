import React from 'react';
import { Text, View, Button, StyleSheet, Image } from "react-native";
import { Link } from "react-router-native";
import CountDown from 'react-native-countdown-component';

class Rest extends React.Component {
  render() {
    const { next } = this.props;
    return (
      <View>
        <Link to={`/`}>
          <Text>
            <Image
              source={require('../../assets/back-button.png')}
            />
            <Text>  </Text>
            <Text style={styles.quit}>Quit</Text>
          </Text>
        </Link>
        <View style={styles.info}>
          <Text style={styles.title}>Rest!</Text>
          <CountDown
            digitStyle={{ backgroundColor: 'transparent' }}
            until={30}
            size={100}
            timeToShow={['S']}
            timeLabels={{ s: null }}
          />
        </View>
        <View style={styles.button}>
          <Button title='Next' onPress={() => next()}></Button>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  quit: {
    fontSize: 30,
  },
  info: {
    alignItems: 'center',
    marginTop: '11%'
  },
  text: {
    fontSize: 18,
  },
  title: {
    fontSize: 100,
    marginBottom: '1%',
    fontWeight: 'bold'
  },
  button: {
    justifyContent: 'center',
    backgroundColor: 'black',
    padding: 10
  },
})

export default Rest;