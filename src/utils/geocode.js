const request = require('request')

const geocode = (address, callback) => {
    const token = 'pk.eyJ1IjoicXVha2VsYWkiLCJhIjoiY2p0Nnhwc2g4MGh4dDQzczJwNnk5eXQxaCJ9.XgG2_TVRX4nSjqE-_4jmgA'
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=' + token + '&limit=1'

    request({url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode