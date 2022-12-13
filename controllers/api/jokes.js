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
    res.json()
}

async function create(req, res) {
    const joke = new Joke(req.body)
    joke.save(function() {
        res.json(joke)
    })
}

async function deleteJoke(req, res) {
    Joke.findOneAndDelete(
        {_id: req.params.id}, function(err) {
            res.json(Joke)
        }
    )
}

async function edit(req, res) {
    console.log('edit controller start')
    Joke.findOne({_id: req.params.id}, function(err, joke) {
        res.json(joke)
    })
}

// async function update(req, res) {
//     console.log('update controller start')
//     console.log(req.params)
//     Joke.findById(req.params.id)
//     .then(joke => {joke.joke=req.body.joke})
//     Joke.findOneAndUpdate(
//         {_id: req.params.id},
//         req.body,
//         {new: true},
//         function(joke) {
//             res.json(joke)
//         }
//     )
// }

function update(req, res, next) {    

    Joke.findById(req.params.id)         
    .then(joke => {             
        joke.joke = req.body.joke             
        joke.nsfw = req.body.nsfw 
        console.log('start controller update')    
        joke.save()                 
        .then(() => res.json("joke updated!"))                 
        .catch(err => res.status(400).json("Error: " + err))         })
        .catch(err => res.status(400).json("Error: " + err)) }