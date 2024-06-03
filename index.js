const express = require('express');
const app = express();
const port = 3000;

const tasksRouter = require('./routes/taskRoutes')
const usersRouter = require('./routes/userRoutes')

app.use(express.json());

app.use('/tasks',tasksRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})