let tasks = [
  {
    id: 1,
    title: 'Hacer la compra',
    description: 'Comprar alimentos y otros artículos de necesidad básica.',
    status: 'TODO',
    dueDate: '2024-06-10',
    user: 1,
    createdAt: new Date(),
    modifiedAt: new Date(),
    deletedAt: null
  },
  {
    id: 2,
    title: 'Hacer la colada',
    description: 'Lavar la ropa sucia.',
    status: 'IN_PROGRESS',
    dueDate: '2024-06-08',
    user: 2,
    createdAt: new Date(),
    modifiedAt: new Date(),
    deletedAt: null
  }
];
const findTasks = (req, res) => {
  if (req.query.status) {
    const tasksFound = tasks.filter(task => task.status === req.query.status);
    if (tasksFound.length) return res.json(tasksFound);
    return res.json('No se han encontrado tareas con ese criterio');
   // res.status(404).json("Tarea no existe"); me queda por definir 
  }
  res.json(tasks);
};

const getTaskById = (req, res) => {
  console.log('Rest params:', req.params);
  console.log('Query params:', req.query);
  const taskFound = tasks.find(task => task.id === Number(req.params.id));
  if (taskFound) return res.json(taskFound);
  res.status(404).json("Tarea no existe");
};

const addTask = (req, res) => {
  console.log('Req body:', req.body);
  const newTask = {
    id: Number((Math.random() * 1000).toFixed()),
    title: req.body.title,
    description: req.body.description,
    status: req.body.status || 'TODO',
    dueDate: req.body.dueDate,
    user: req.body.user,
    createdAt: new Date(),
    modifiedAt: new Date(),
    deletedAt: null
  };
  tasks.push(newTask);
  res.json('Tarea añadida');
  // res.status(404).json("Tarea no existe"); me queda por definir
};

const deleteTask = (req, res) => {
  tasks = tasks.map(task => {
    if (task.id === Number(req.params.id)) {
      return { ...task, deletedAt: new Date() };
    }
    return task;
  });
  res.json(`Tarea con id ${req.params.id} marcada como eliminada`);
  //res.status(404).json("Tarea no existe"); me queda por definir 
};

const updateTask = (req, res) => {
  console.log('Req body:', req.body);
  tasks = tasks.map(task => {
    if (task.id === Number(req.params.id)) {
      return { ...task, ...req.body, modifiedAt: new Date() };
    }
    return task;
  });
  res.json(`Tarea con id ${req.params.id} actualizada`);
  //res.status(404).json("Tarea no existe"); me queda por definir 
};
const patchTask = (req, res) => {
  tasks = tasks.map(task => {
    if (task.id === Number(req.params.id)) {
      return { ...task, ...req.body, modifiedAt: new Date() };
    }
    return task;
  });
  res.json(`Tarea con id ${req.params.id} parcialmente actualizada`);
  //res.status(404).json("Tarea no existe"); me queda por definir 
};

module.exports = {
  findTasks,
  getTaskById,
  addTask,
  deleteTask,
  updateTask,
  patchTask,
};
