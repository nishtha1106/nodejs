var fs = require('fs');
var output=[],write=[];
var work= fs.createWriteStream('../json/assault.json')
var rl = require('readline').createInterface({
    input: require('fs').createReadStream('crimedata.csv')
});
rl.on('line', (line) => {
    var jsonForm = {};
    var array = line.split(',');
    jsonForm.primaryType = array[5];
    jsonForm.arrest = array[8];
    jsonForm.year = array[17];
    if (jsonForm.primaryType == 'ASSAULT') {
        if (jsonForm.arrest == 'false' || jsonForm.arrest == 'true') {
            write.push(jsonForm);
        }}});
    rl.on('close', (line) => {
      var fal=write.reduce((count, ele) => {
        if(ele.arrest == 'false') {
            for(i=0; i<16;i++)
            {
                if(ele.year== 2001 + i) count[i]++;
           } } return count;
            }, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
      var tru=write.reduce((count1, ele) => {
        if(ele.arrest ==  'true') {
            for(i=0; i<16;i++)
            {
                if(ele.year== 2001 + i) count1[i]++;
           } } return count1;
            }, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])      
        for (var i = 0; i <= 15; i++) {
            var theft= { year : 2001 +i,
                "false" : fal[i],
                "true" : tru[i]
            }
            output.push(theft)
            }
               work.write(JSON.stringify(output, null, 2));
           });
