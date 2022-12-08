const mongoose = require('mongoose')
const Schema = mongoose.Schema

var jokeSchema = new Schema({
    joke: String,
    nsfw: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
},{
    timestamp: true,
})

module.exports = mongoose.model('Joke', jokeSchema)