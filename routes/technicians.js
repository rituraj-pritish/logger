const express = require('express');
const router = express.Router();
const techsController = require('../controllers/techsController');

//get technicians
router.get('/', techsController.getTechs);

//add technician
router.post('/', techsController.addTech);

//delete technician
router.delete('/:id', techsController.deleteTech);

module.exports = router;
