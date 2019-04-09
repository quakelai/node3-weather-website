const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/6bf029aadb8c13e71e74287ae940288b/' + latitude + ',' + longitude
    
    request({url, json: true}, (error, {body}) => {
    if (error) {
            callback('Connection error!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            // console.log(body)
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain. Good day, commander!')
        }
    })
}

module.exports = forecast