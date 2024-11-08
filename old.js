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

app.get('/', (request, response) => {
    response.send("I want to play a game!")
})

//get method for any and all games in array
app.get('/games',(req, res) =>
{
    res.send(games)
})

//get method returns one game from array, by id. if id doesnt exist returns statuscode 404 - notfound
app.get('/games/:id', (req, res) => {
    if (typeof games[req.params.id - 1] === 'undefined')
    {
        return res.status(404).send({error: "Game not found, game not gaming"})
    }
    res.send(games[req.params.id - 1])
})

//post method, adds a new game into the array. if parameters are missing
//returns bad request - 400
app.post('/games', (req, res) => {
    if (!req.body.name || !req.body.price) {
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
    res.status(201).location('localhost:8080/games/' + (games.length - 1)).send(newGame)
})

// deletes a game, where id is specified. if game is not found, returns statuscode 404 notfound, otherwise returns success 204 - no content
app.delete('/games/:id', (req, res) =>
{
    if (typeof games[req.params.id - 1] === 'undefined') {
        return res.status(404).send({
            error: 'Game not found, no gaming for you'
        })
    }
    games.splice(req.params.id -1, 1);
    res.status(204).send({
        error: 'Content not contenting (no content)'
    })
})

app.put('/games/:id', (req, res) => {
    const index = parseInt(req.params.id) - 1;
    if (!games[index]) {
        return res.status(404).send({
            error: "Game not found, no gaming for you"
        });
    }
    //if body has the necessary fields
    if (!req.body.name || !req.body.price) {
        return res.status(400).send({
            error: 'One or multiple parameters missing'
        });
    }
    games[index].name = req.body.name;
    games[index].price = req.body.price;

    res.status(200).send(games[index]);
})

//define the address upon which the app is running
app.listen(8080, () => {
    console.log('Api tootab aadressil: http://localhost:8080')
})