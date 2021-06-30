const animeData = require('../../data')

class AnimeShow {
    constructor(data) {
        // Attributes and methods go here
        this.id = data.id,
        this.name = data.name,
        this.metaData = data.genre,
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
    static findMatches(search) {
        
        let shows = AnimeShow.all
        let matchCount = 0
        let matches = []
        
        // This is nasty and brute force but it works
        shows.forEach(show => {
            show.metaData.forEach(tag => {
                if (search.includes(tag)) {
                    matchCount++
                }
            });

            if (matchCount > 0) {
                matches.push(show)
            }
            matchCount = 0
        });


        if (matches.length === 0) {
            return 'no matches'
        } else {
            return matches
        }
        
    }
}

module.exports = AnimeShow