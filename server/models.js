const db = require('../database/index.js');
const mongoose = require('mongoose');

const workoutsSchema = new mongoose.Schema({
  workouts: Array,
  workoutType: String,
  image: String,
  bodyPartFocus: String,
}, { autoCreate: true })

const Workout = mongoose.model('workouts', workoutsSchema)

const getWorkouts = () => {
  return Workout.find()
}

const makeWorkout = (workoutInfo) => {
  return Workout.create(workoutInfo)
}

module.exports = {
  getWorkouts, makeWorkout
}