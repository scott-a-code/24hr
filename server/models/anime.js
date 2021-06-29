const animeData = require('../../data')

class AnimeShow {
    constructor(data) {
        // Attributes and methods go here
        this.id = data.id,
        this.name = data.name,
        this.genre = data.genre,
        this.synopsis = data.synopsis,
        this.airing = data.airing,
        this.numberOfEpisodes = data.numberOfEpisodes,
        this.malScore = data.malScore,
        this.url = data.url
    }
    // Static methods go here
    static get all() {
        return animeData
    }
    static addShow(data) {
        const newShow = new AnimeShow(data)
        let metaData = []


        metaData.push(data.name.split(' '))
        metaData.push(data.genre)
        metaData.push(data.synopsis.split(' '))


        newShow.metaData = metaData.flat()
        animeData.push(newShow)
        return newShow
    }
    static findMatches(search) {
        // search is an array
        let shows = AnimeShow.all
        let matchCount = 0
        let matches = []
        // console.log(shows)
        
        // This is nasty and brute force but it works
        shows.forEach(show => {
            show.metaData.forEach(tag => {
                if (search.includes(tag)) {
                    matchCount++
                    console.log(tag)
                }
            });
            if (matchCount > 0) {
                matches.push(show)
            }
        });
        if (matches.length === 0) {
            return 'no matches'
        } else {
            return matches
        }
        
    }
}

module.exports = AnimeShow