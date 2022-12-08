const Joke = require('../../models/joke')


module.exports = {
    index,
    new: newJoke,
    create,
    delete: deleteJoke,
    edit,
    update, 
}

async function index(req, res) {
    const jokes = await Joke.find()
    res.json(jokes)
}

async function newJoke(req, res) {

}

async function create(req, req) {

}

async function deleteJoke(req, res) {

}

async function edit(req, res) {

}

async function update(req, res) {
    
}