const express = require('express');
const { findTasks, getTaskById, addTask, deleteTask, updateTask, patchTask } = require('../controllers/taskController');

const router = express.Router();

router.get('/', findTasks);
router.get('/:id', getTaskById);
router.post('/', addTask);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);
router.patch('/:id', patchTask);  

module.exports = router;
