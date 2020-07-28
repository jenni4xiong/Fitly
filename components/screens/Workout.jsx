import React from 'react';
import Resistance from './Resistance';
import HIIT from './HIIT'

class Workout extends React.Component {
  render() {
    const { workout, workout: { workoutType } } = this.props;
    switch (workoutType) {
      case 'Resistance':
        return (
          <Resistance workout={workout} />
        )
      case 'HIIT':
        return (
          <HIIT workout={workout} />
        )
    }
  }
}

export default Workout;
