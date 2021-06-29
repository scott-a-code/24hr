const express = require('express')
const app = express()

// Import our model
const AnimeShow = require('./models/anime')

const temp = AnimeShow.all
console.log(temp)

const port = 3000


app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})