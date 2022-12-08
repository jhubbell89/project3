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
    Joke.find({}, function(err, jokes) {
        res.json(jokes)
    })
}

async function newJoke(req, res) {
    res.json(jokes)
}

async function create(req, req) {
    const joke = new Joke(req.body)
    joke.save(function() {
        res.json(joke)
    })
}

async function deleteJoke(req, res) {
    Joke.findOneAndDelete(
        {_id: reportError.params.id, userRecommending: req.user._id}, function(err) {
            res.json(Joke)
        }
    )
}

async function edit(req, res) {
    Joke.findOne({_id: req.params.id, userRecommending: req.user._id}, function(err, joke) {
        req.json(joke)
    })
}

async function update(req, res) {
    Joke.findOneAndUpdate(
        {_id: req.params.id, userRecommending: req.user._id},
        req.body,
        {new: true},
        function(joke) {
            res.json(joke)
        }
    )
}