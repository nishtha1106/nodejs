var readline = require('readline');
var fs = require('fs');
var write = [],count1 = [],count2 = [],count3 = [],count4 = [];
var rl = readline.createInterface({
    input: fs.createReadStream('crimedata.csv', 'utf-8')
});
rl.on('line', function(line) {
    var jsonForm = {};
    var row = line.split(',');
    jsonForm.code = row[14];
    jsonForm.year = row[17];
    if (jsonForm.year == '2015') {
        if (jsonForm.code == '01A' || jsonForm.code == '02' || jsonForm.code == '03' || jsonForm.code == '04A' || jsonForm.code == '04B' || jsonForm.code == '05' || jsonForm.code == '06' || jsonForm.code == '07' || jsonForm.code == '09') {
            count1.push(jsonForm);
        }if (jsonForm.code == '01B' || jsonForm.code == '08A' || jsonForm.code == '08B' || jsonForm.code == '10' || jsonForm.code == '11' || jsonForm.code == '12' || jsonForm.code == '13' || jsonForm.code == '14' || jsonForm.code == '15' || jsonForm.code == '16' || jsonForm.code == '17' || jsonForm.code == '18' || jsonForm.code == '19' || jsonForm.code == '20' || jsonForm.code == '22' || jsonForm.code == '24' || jsonForm.code == '26') {
            count2.push(jsonForm);
        }if (jsonForm.code == '01A' || jsonForm.code == '02' || jsonForm.code == '03' || jsonForm.code == '04A' || jsonForm.code == '04B') {
            count3.push(jsonForm);
        }if (jsonForm.code == '05' || jsonForm.code == '06' || jsonForm.code == '07' || jsonForm.code == '09') {
            count4.push(jsonForm);
        }}});
rl.on('close', function(line) {
    var index = count1.reduce((c, ele) => { c++; return c;}, 0);
    var nonindex = count2.reduce((c, ele) => { c++; return c;}, 0);
    var violent = count3.reduce((c, ele) => { c++; return c;}, 0);
    var property = count4.reduce((c, ele) => { c++; return c; }, 0);
    write.push({index });
    write.push({nonindex });
    write.push({violent });
    write.push({property });
    var json = JSON.stringify(write, null, 2);
    fs.writeFileSync('crime.json', json);
});