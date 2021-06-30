const animeData = require('../../data')

class AnimeShow {
    constructor(data) {
        // Attributes and methods go here
        this.id = data.id,
        this.name = data.name,
        this.metaData = data.genre,
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
        
        // This is looks nasty and brute force but it works, I would refactor this if I had more time.
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
            // this error handling is bad, I added it at the last second.
            return [{name: 'no matches - Try things like comedy, romance or drama'}]
        } else {
            return matches
        }
        
    }
}

module.exports = AnimeShow