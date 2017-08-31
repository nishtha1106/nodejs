var fs = require('fs');//for requiring file system
var output=[],write=[];//creating arrays
var work= fs.createWriteStream('../json/theft.json')// creating .json file
var rl = require('readline').createInterface({
    input: require('fs').createReadStream('crimedata.csv')// read the data line by line from csv file
});
rl.on('line', (line) => {
    var jsonForm = {};//creating object for pushing data
    var array = line.split(',');//check line split from , symbol
    jsonForm.primaryType = array[5];//passing data of 5th index of csv file
    jsonForm.description = array[6];//passing data of 6th index of csv file
    jsonForm.year = array[17];//passing data of 17th index of csv file
    if (jsonForm.primaryType == 'THEFT') {// check whether it is THEFT or not
        if (jsonForm.description == 'OVER $500' || jsonForm.description == '$500 AND UNDER') {// check the parameters
            write.push(jsonForm);//pushing object data to array defined earlier 
        }}});
rl.on('close', (line) => {
  var ov=write.reduce((count, ele) => {//reduce the filtered data as is required
    if(ele.description == 'OVER $500') {// check whether satisfies the condition
        for(i=0; i<16;i++)// loop for increamenting the data according to year
        {
            if(ele.year== 2001 + i) count[i]++;//counting the times it occured in the object
        } } return count;//return the total count of file
    }, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])//initialising by this value so that it don't take garbage value
  var un=write.reduce((count1, ele) => {//reduce the filtered data as is required
    if(ele.description ==  '$500 AND UNDER') {// check whether satisfies the cond
        for(i=0; i<16;i++)// loop for increamenting the data according to year
        {
            if(ele.year== 2001 + i) count1[i]++;//counting the times it occured in the object
        } } return count1;//return the total count of file
    }, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])   //initialising by this value so that it don't take garbage value   
  for (var i = 0; i <= 15; i++) {//loop for retrieving the values year wise
    var theft= { year : 2001 +i,
        "OVER $500" : ov[i],//retrieve the over values and give count of it
        "$500 AND UNDER" : un[i]//retrieve the under values and give count of it
    }
    output.push(theft)//pushing all the theft data to array for inserting in .json file
}
work.write(JSON.stringify(output, null, 2));//insert data in string format to .json file
});