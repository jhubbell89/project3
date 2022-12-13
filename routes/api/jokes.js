const express = require('express')
const router = express.Router()
const jokesCtrl = require('../../controllers/api/jokes')
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', jokesCtrl.index)
router.get('/new', ensureLoggedIn, jokesCtrl.new )
router.post('/', ensureLoggedIn, jokesCtrl.create)
router.delete('/:id', jokesCtrl.delete)
router.get('/:id/edit', jokesCtrl.edit)
router.put('/:id', ensureLoggedIn, jokesCtrl.update)

module.exports = router;