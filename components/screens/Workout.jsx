import React from 'react';
import WorkoutFinished from './WorkoutFinished';
import Exercise from './Exercise';
import Rest from './Rest';


class Workout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseNumber: 1,
      setNumber: 1,
      isFinished: false,
      rest: false,
    }
    this.next = this.next.bind(this);
  }

  next() {
    const { workout } = this.props;
    const { exerciseNumber, setNumber, rest } = this.state;
    const totalExercises = workout.exercises.length - 1;
    const totalSets = workout.exercises[exerciseNumber].sets;
    if (rest) {
      if (setNumber >= totalSets) {
        if (exerciseNumber >= totalExercises) {
          this.setState({
            isFinished: true
          });
        } else {
          this.setState({
            exerciseNumber: exerciseNumber + 1,
            setNumber: 1
          })
        }
      } else {
        this.setState({
          setNumber: setNumber + 1
        })
      }
    }
    this.setState({
      rest: !rest,
    })

  }

  render() {
    const { isFinished, setNumber, exerciseNumber, rest } = this.state;
    const { workout: { exercises } } = this.props
    const currentExercise = exercises[exerciseNumber]
    if (isFinished) {
      return (
        <WorkoutFinished />
      )
    }
    if (!rest) {
      return (
        <Exercise next={this.next} exercise={currentExercise.exercise} reps={currentExercise.reps} currentSet={setNumber} totalSets={currentExercise.sets} />
      )
    }
    return (
      <Rest next={this.next} currentSet={setNumber} totalSets={currentExercise.sets} />
    )
  }
}


export default Workout;

