const express = require('express');
const Task = require('../models/Task');

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tarefas' });
  }
});


router.post('/', async (req, res) => {
  const { name, description, dueDate } = req.body;
  try {
    const task = await Task.create({ name, description, dueDate });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar tarefa' });
  }
});


router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, status, dueDate } = req.body;
  try {
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' });

    task.name = name || task.name;
    task.description = description || task.description;
    task.status = status || task.status;
    task.dueDate = dueDate || task.dueDate;

    await task.save();
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar tarefa' });
  }
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' });

    await task.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Erro ao excluir tarefa' });
  }
});

module.exports = router;
