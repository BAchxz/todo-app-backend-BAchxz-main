let users = [
  {
    id: 1,
    firstname: "Pedro",
    lastname: "García",
    email: "pedro@example.com",
    password: "securepassword1"
  },
  {
    id: 2,
    firstname: "Robert",
    lastname: "Smith",
    email: "robert@example.com",
    password: "securepassword2"
  }
];

const findUsers = (req, res) => {
  res.json(users);
};

const getUserById = (req, res) => {
  const userFound = users.find(user => user.id === Number(req.params.id));
  if (userFound) return res.json(userFound);
  res.status(404).json("Usuario no existe");
};

const addUser = (req, res) => {
  const newUser = {
    id: Number((Math.random() * 1000).toFixed()),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password
  };
  users.push(newUser);
  res.json('Usuario añadido');
};

const deleteUser = (req, res) => {
  users = users.filter(user => user.id !== Number(req.params.id));
  res.json(`Usuario con id ${req.params.id} eliminado`);
};

const updateUser = (req, res) => {
  users = users.map(user => {
    if (user.id === Number(req.params.id)) {
      return { ...user, ...req.body };
    }
    return user;
  });
  res.json(`Usuario con id ${req.params.id} actualizado`);
};

module.exports = {
  findUsers,
  getUserById,
  addUser,
  deleteUser,
  updateUser,
};
