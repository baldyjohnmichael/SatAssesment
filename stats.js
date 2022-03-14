

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
console.log(mock_data[0].altitude)
// console.log(mock_data.length)
function getAlt(data){
    alts = []
    for (let i = 0, len = data.length; i < len; i++){
        alts.push(mock_data[i].altitude)
    }
    return alts
}
function getMin(altitudes){
    return Math.min.apply(Math, altitudes)
}
function getMax(altitudes){
    return Math.max.apply(Math, altitudes)
}
function getAvg(altitudes){
    sum = 0;
    for (let i = 0, len = altitudes.length; i<len; i++){
        sum = sum + altitudes[i]
    }
    return sum / altitudes.length
    // Math.avg_value(altitudes)
}
// console.log(getAlt(mock_data))
alts = getAlt(mock_data)
console.log(getMin(alts))
console.log(getMax(alts))
console.log(getAvg(alts))

var min_value = document.getElementById("min");
document.getElementById("min").innerHTML = getMin(alts);

var max_value = document.getElementById("max");
document.getElementById("max").innerHTML = getMax(alts);

var avg_value = document.getElementById("avg");
document.getElementById("avg").innerHTML = getAvg(alts);
