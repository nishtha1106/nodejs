var fs = require('fs');//for requiring file system
var output=[],write=[];//creating arrays
var work= fs.createWriteStream('../json/assault.json')// creating .json file
var rl = require('readline').createInterface({
    input: require('fs').createReadStream('crimedata.csv')// read the data line by line from csv file
});
rl.on('line', (line) => {
    var jsonForm = {};//creating object for pushing data
    var array = line.split(',');//check line split from , symbol
    jsonForm.primaryType = array[5];//passing data of 5th index of csv file
    jsonForm.arrest = array[8];//passing data of 8th index of csv file
    jsonForm.year = array[17];//passing data of 17th index of csv file
    if (jsonForm.primaryType == 'ASSAULT') {// check whether it is ASSAULT or not
        if (jsonForm.arrest == 'false' || jsonForm.arrest == 'true') {// check the parameters
            write.push(jsonForm);//pushing object data to array defined earlier 
        }}});
rl.on('close', (line) => {
  var fal=write.reduce((count, ele) => {//reduce the filtered data as is required
    if(ele.arrest == 'false') {// check whether satisfies the condition
        for(i=0; i<16;i++)// loop for increamenting the data according to year
        {
            if(ele.year== 2001 + i) count[i]++;//counting the times it occured in the object
        } } return count;//return the total count of file
    }, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])//initialising by this value so that it don't take garbage value
  var tru=write.reduce((count1, ele) => {//reduce the filtered data as is required
    if(ele.arrest ==  'true') {// check whether satisfies the cond
        for(i=0; i<16;i++)// loop for increamenting the data according to year
        {
            if(ele.year== 2001 + i) count1[i]++;//counting the times it occured in the object
        } } return count1;//return the total count of file
    }, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) //initialising by this value so that it don't take garbage value        
  for (var i = 0; i <= 15; i++) //loop for retrieving the values year wise
    var theft= { year : 2001 +i,
        "false" : fal[i],//retrieve the false values and give count of it
        "true" : tru[i]//retrieve the true values and give count of it
    }
    output.push(theft)//pushing all the theft data to array for inserting in .json file
}
work.write(JSON.stringify(output, null, 2));//insert data in string format to .json file
});