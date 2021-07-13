const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=556c476edd5bfcd367aa049cc87928d7&units=metric'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'Humidity  is '+ body.main.humidity+  ' It is currently ' + body.main.temp + ' degress out')
        }
    })
}

module.exports = forecast