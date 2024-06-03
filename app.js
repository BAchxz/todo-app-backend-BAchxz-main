const express = require("express");
const cors = require('cors');
const app = express();
const port = 3000;


function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

app.use(express.json());

var corsOptions = {
    origin: '*',
  }
app.use(cors(corsOptions))

const tasks = [
  {id: 1, name: "Purchase bananas for tomorrow", date: '2024-04-01'},
  {id: 2, name: "Purchase tomatoes for tomorrow", date: '2024-04-01'},
  {id: 3, name: "Purchase lettuce for tomorrow", date: '2024-04-01'},
  {id: 4, name: "Complete the project proposal draft", date: '2024-04-03'},
  {id: 5, name: "Call the plumber to fix kitchen sink", date: '2024-04-04'},
  {id: 6, name: "Renew gym membership", date: '2024-04-05'},
  {id: 7, name: "Attend parent-teacher meeting at school", date: '2024-04-06'},
  {id: 8, name: "Book dentist appointment for teeth cleaning", date: '2024-04-07'},
  {id: 9, name: "Send birthday gift to Mom", date: '2024-04-08'},
  {id: 10, name: "Pay electricity bill", date: '2024-04-09'},
  {id: 11, name: "Review car insurance renewal documents", date: '2024-04-10'},
  {id: 12, name: "Plan weekend getaway", date: '2024-04-11'},
  {id: 13, name: "Donate clothes no longer needed", date: '2024-04-12'},
  {id: 14, name: "Study for certification exam", date: '2024-04-13'},
  {id: 15, name: "Schedule car maintenance check-up", date: '2024-04-14'}
];
// /tasks-by-date?date=2024-04-05
app.get('/tasks-by-date', async (req, res) => {
    res.send({tasks : tasks.filter(task => task.date === req.query.date)})
})

app.get('/all-tasks', async (req, res) => {
    res.send({tasks: tasks})
})

app.post('/task', async (req, res) => {
  if (req.body.name.length < 3) {
    res.statusCode = 400;
    res.send({msg: 'Name should be at least 3 chars long'});
    return
  }
  if (req.body.name.length > 20) {
    res.statusCode = 400;
    res.send({msg: 'Name should be max 20 chars long'});
    return
  }
    tasks.push(req.body);
    res.send({tasks: tasks})
})

const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = { app, server };
