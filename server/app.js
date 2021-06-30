const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3000;

app.use(cors());

// Import our model
const AnimeShow = require('./models/anime')




app.listen(port, () => {
    console.log(`listening on port: ${port}`)
});

// Calling the home route gives you all the data.
// this happens if you search with no text in the body

app.get('/', (req, res) => {
    res.send(AnimeShow.all);
});

// Get results based on the search.
app.get('/:search', (req, res) => {
    search = req.params.search.toUpperCase()
    res.send(AnimeShow.findMatches(search));
});

// this does the same but just returns a random result
app.get('/lucky/:search', (req, res) => {
    search = req.params.search.toUpperCase()
    const result = AnimeShow.findMatches(search);
    const randomIndex = Math.floor(Math.random() * result.length);
    res.send(result[randomIndex]);
});