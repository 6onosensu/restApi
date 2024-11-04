const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const games = [
    {id: 1, name: "Super Mario Bros. Wonder"},
    {id: 2, name: "Animal Crossing: New Horizons"},
    {id: 3, name: "Seiklus"},
]

//get method for any and all games in array
app.get('/games',(req, res) =>
{
    res.send(games)
})

//get method returns one game from array, by id. if id doesnt exist returns statuscode 404 - notfound
app.get('/games/:id', (req, res) => {
    if (typeof games[req.param.id - 1] === 'undefined')
    {
        return res.status(404).send({error: "Game not found"})
    }
    res.send(games[req.params.id - 1])
})

app.post('/games', (req, res) => {
    if (req.body.name || !req.body.price) {
        return res.status(400).send({
            error: 'One or multiple parameters missing'
        });
    }
    let newGame = {
        id: games.length + 1,
        price: req.body.price,
        name: req.body.name,
    }
    games.push(newGame)
    res.status(201).location('localhost:8080/games' + (games.length - 1)).send(newGame)
})

// delete a game, where id is specified. if game is not found returns statuscode 404 notfound, otherwise retutns success 204 - no content
app.delete('/games/:id', (req, res) =>
{
    if (typeof games[req.params.id - 1] === 'undefined') {
        return res.status(404).send({error: "Game not found, no gaming for you"})
    }
    games.splice(req.params.id -1, 1);
    res.status(204).send({
        error: 'Content not containing (no content)'
    })
})

app.put('/games/:id', (req, res) => {
    if (typeof games[req.params.id - 1] === 'undefined') {
        return res.status(404).send({
            error: "Game not found, no gaming for you"
        })
    }
    let newGame = {
        price: req.body.price,
        name: req.body.name,
    }
    games.push(newGame)

    
})

//define the address upon which the app is running
app.listen(8080, () => {
    console.log('Api tootab adresil: localhost:8080/games')
})