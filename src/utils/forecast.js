const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0243cca01784745d006d25ee7e4b605c&query=' + latitude + ',' + longitude
    request({ url, json: true }, (error, {body}) => {
        const currentTemp = body.current.temperature
        const feelsTemp = body.current.feelslike
        const description = body.current.weather_descriptions[0]

    if (error) {
        callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
        callback('Unable to find location!', undefined)
    } else {
        callback(undefined, description + '. It is currently ' + currentTemp + ' degrees out. It feels like ' + feelsTemp + ' degrees out.')
    }

    })
}

module.exports = forecast