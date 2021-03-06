var readline = require('readline');//for reading data line by line
var fs = require('fs');// for requiring file system
var write = [],count1 = [],count2 = [],count3 = [],count4 = [];//creating arrays
var rl = readline.createInterface({
    input: fs.createReadStream('crimedata.csv', 'utf-8')//reading csv file
});
rl.on('line', function(line) {
    var jsonForm = {};
    var row = line.split(',');//splitting line from csv 
    jsonForm.code = row[14];
    jsonForm.year = row[17];
    if (jsonForm.year == '2015') {// retrieving data for year 2015
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
    var index = count1.reduce((c, ele) => { c++; return c;}, 0);//counting the indexed data
    var nonindex = count2.reduce((c, ele) => { c++; return c;}, 0);
    var violent = count3.reduce((c, ele) => { c++; return c;}, 0);
    var property = count4.reduce((c, ele) => { c++; return c; }, 0);
    write.push({crime:"index", value: index });//pushing data to file
    write.push({crime:"nonindex", value: nonindex });
    write.push({crime:"violent",value: violent });
    write.push({crime:"property",value: property });
    var json = JSON.stringify(write, null, 2);
    fs.writeFileSync('../json/crime.json', json);// create .json file
});