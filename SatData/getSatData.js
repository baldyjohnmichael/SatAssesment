const axios = require('axios')

const getSatData = async function() {
    // return new Promise((resolve, reject) => {
    //   http.get(options, function (response) {
    //     let data = ''
    //     response.setEncoding('utf-8')
    //     response.on('data', function(chunk) {
    //         data += chunk + '\n'
    //     })
    //     response.on('close', function() {
    //       resolve(data)
    //     })
    //     response.on("error", function(e){
    //       reject(e)
    //     });
    //   })
    // })
    const response = await axios.get('http://nestio.space/api/satellite/data')
    return response.data
  }
  
  module.exports = {
    getSatData: getSatData,
  }