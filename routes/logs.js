const express = require('express')
const router = express.Router()
const logsController = require('../controllers/logsController')

router.get('/', logsController.getLogs)

router.post('/', logsController.addLog)

router.delete('/:id', logsController.deleteLog)

router.put('/:id',logsController.updateLog)


module.exports = router