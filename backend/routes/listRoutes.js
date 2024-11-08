const express = require('express');
const router = express.Router();
const listController = require('../controllers/listController');

// Definir las rutas relacionadas con las listas
router.get('/', listController.getAllLists);
router.post('/', listController.createList);
router.get('/:id', listController.getListById);
router.put('/:id', listController.updateList);
router.delete('/:id', listController.deleteList);

module.exports = router;
