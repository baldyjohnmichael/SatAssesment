var mock_data = [
    { altitude: 194.23516602568318, last_updated: "2022-03-14T14:09:30" },
{ altitude: 194.97867894566835, last_updated: "2022-03-14T14:09:40" },
{ altitude: 193.64415935784115, last_updated: "2022-03-14T14:09:50" },
{ altitude: 190.31088913245534, last_updated: "2022-03-14T14:10:00" },
{ altitude: 185.17689301185277, last_updated: "2022-03-14T14:10:10" },
{ altitude: 178.5471742481622, last_updated: "2022-03-14T14:10:20" },
{ altitude: 170.8155948031232, last_updated: "2022-03-14T14:10:30" },
{ altitude: 162.44147658104438, last_updated: "2022-03-14T14:10:40" },
{ altitude: 153.92231378165746, last_updated: "2022-03-14T14:10:50" },
{ altitude: 145.76421749234694, last_updated: "2022-03-14T14:11:00" },
{ altitude: 138.45184836360204, last_updated: "2022-03-14T14:11:10" },
{ altitude: 132.41962362376472, last_updated: "2022-03-14T14:11:20" },
{ altitude: 128.02590898250898, last_updated: "2022-03-14T14:11:30" },
{ altitude: 125.53172864457272, last_updated: "2022-03-14T14:11:40" },
{ altitude: 125.08525824090614, last_updated: "2022-03-14T14:11:50" },
{ altitude: 126.71302192966962, last_updated: "2022-03-14T14:12:00" },
{ altitude: 130.31831663452505, last_updated: "2022-03-14T14:12:10" },
{ altitude: 135.68695703393502, last_updated: "2022-03-14T14:12:20" },
{ altitude: 142.5, last_updated: "2022-03-14T14:12:30" },
{ altitude: 150.352692546405, last_updated: "2022-03-14T14:12:40" },
{ altitude: 158.7785176154125, last_updated: "2022-03-14T14:12:50" },
{ altitude: 167.2769091786216, last_updated: "2022-03-14T14:13:00" },
{ altitude: 175.3429901376177, last_updated: "2022-03-14T14:13:10" },
{ altitude: 182.49756633902882, last_updated: "2022-03-14T14:13:20" },
{ altitude: 188.3155948031231, last_updated: "2022-03-14T14:13:30" },
{ altitude: 192.45143490983756, last_updated: "2022-03-14T14:13:40" },
{ altitude: 194.65938240595494, last_updated: "2022-03-14T14:13:50" },
{ altitude: 194.80826633788956, last_updated: "2022-03-14T14:14:00" },
{ altitude: 192.88924172750683, last_updated: "2022-03-14T14:14:10" }
];

function getAltitudes(data){
    alts = []
    for (let i = 0, len = data.length; i < len; i++){
        alts.push(mock_data[i].altitude)
    }
    return alts
}
function getLastMinute(altitudes){
    return altitudes.slice(-6)
}
function getSecondLastMinute(altitudes){
    return altitudes.slice(-12,-6)
}
function getAvg(data){
    sum = 0;
    for (let i = 0, len = data.length; i<len; i++){
        sum = sum + data[i]
    }
    return sum / data.length
}

function statusCheck(altitudes){
    // check if data has at least 6 data points
    if (altitudes.length <= 6){
        return "not enough data to make full assesment"
    }
    else {
        last_min_avg =getAvg(getLastMinute(altitudes))
        second_last_min_avg = getAvg(getSecondLastMinute(altitudes))
        if(last_min_avg < 160){
            return "WARNING: RAPID ORBITAL DECAY IMMINENT "
        }
        else if(second_last_min_avg < 160 ){
            return "Sustained Low Earth Orbit Resumed"
        }
        else {
            return "Altitude is A-OK"
        }
    }
}
alts = getAltitudes(mock_data)
document.getElementById("status").innerHTML = statusCheck(alts);

console.log("Last minute Alts")
console.log(getAvg(getLastMinute(alts)))
console.log("Second Last Minute alts")
console.log(getAvg(getSecondLastMinute(alts)))