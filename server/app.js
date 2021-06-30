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





app.get('/', (req, res) => {
    res.send(AnimeShow.all);
});

app.get('/:search', (req, res) => {
    console.log(req.params)
    // TODO take request params and convert to an array.
    // run a search, send the data back to the client

    res.send(AnimeShow.all); // for now just send back all the data so we can format it. 
});

app.get('/lucky/:search', (req, res) => {
    console.log(req.params)
    // TODO take request params and convert to an array.
    // run a search, send first one back to the client
    res.send('thanks for feeling lucky');
});




// This is putting Dummy data into the database

const showData = {
    id: 1,
    name: 'Fruits Basket: The Final',
    genre: [ 'Slice of Life', 'Comedy', 'Supernatural', 'Drama', 'Romance', 'Shoujo'],
    synopsis: 'Hundreds of years ago, the Chinese Zodiac spirits and their god swore to stay together eternally. United by this promise, the possessed members of the Souma family shall always return to each other under any circumstances. Yet, when these bonds shackle them from freedom, it becomes an undesirable burden—a curse. As head of the clan, Akito is convinced that he shares a special connection with the other Soumas. While he desperately clings to this fantasy, the rest of the family remains isolated and suppressed by the fear of punishment.Tooru Honda, who has grown attached to the Soumas, is determined to break the chains that bind them. Her companionship with the family and her friends encourages her to move forward with lifting the curse. However, due to confounding revelations, she struggles to find the tenacity to continue her endeavors. With time slowly withering away, Tooru contends with an uncertain future in hopes of reaching the tranquility that may lie beyond all this commotion.',
    airing: false,
    numberOfEpisodes: 13,
    malScore: 9.18,
    url: 'https://fruba.jp/'
}

AnimeShow.addShow(showData)

AnimeShow.findMatches(['Fruits', 'Comedy'])