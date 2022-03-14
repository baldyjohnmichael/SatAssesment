var { getSatData } = require('./getSatData')
const fs = require('fs')


async function main() {
    const interval = setInterval(async () => {
        getSatData()
            .then(data => {
                console.log(data)
            })
            .catch(e => {
                console.error("Got error " + e.message)
            })
    }, 10000)
    setTimeout(() => clearInterval(interval), 310000)
}

main()
// var { getSatData } = require('./getSatData2')
// const fs = require('fs')


// async function main() {
//     const interval = setInterval(async () => {
//         getSatData()
//             .then(data => {
//                 let string_json = JSON.stringify(data)
//                 fs.writeFile('satdat.json', string_json, (err) => {
//                     if (err) {
//                         throw err;
//                     }
//                     console.log('Json was saved');
//                 })
//                 console.log(data)
//             })
//             .catch(e => {
//                 console.error("Got error " + e.message)
//             })
//     }, 10000)
//     setTimeout(() => clearInterval(interval), 300000)
// }

// main()