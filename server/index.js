const express = require('express');
const bodyParser = require('body-parser');
const Workouts = require('./models');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/api/workouts', (req, res) => {
  Workouts.getWorkouts()
    .then((results) => res.send(results))
    .catch((err) => res.status(400).send(err));
})

app.post('/api/workouts', (req, res) => {
  Workouts.makeWorkout(req.body)
    .then(() => res.status(200).send('made workout!'))
    .catch((err) => res.status(400).send(err));
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))