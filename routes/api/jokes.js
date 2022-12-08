const express = require('express')
const router = express.Router()
const jokesCtrl = require('../../controllers/api/jokes')
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, jokesCtrl.index)
router.get('/', ensureLoggedIn, jokesCtrl.new )
router.post('/', ensureLoggedIn, jokesCtrl.create)
router.delete('/:id', ensureLoggedIn, jokesCtrl.delete)
router .get('/:id/edit', ensureLoggedIn, jokesCtrl.edit)
router.put('/:id', ensureLoggedIn, jokesCtrl.update)

module.exports = router;