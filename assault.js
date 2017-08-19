var readline = require('readline');
var fs = require('fs');
var write = [];
var count2001 = [];
var count2002 = [];
var count2003 = [];
var count2004 = [];
var count2005 = [];
var count2006 = [];
var count2007 = [];
var count2008 = [];
var count2009 = [];
var count2010 = [];
var count2011 = [];
var count2012 = [];
var count2013 = [];
var count2014 = [];
var count2015 = [];
var count2016 = [];

var rl = readline.createInterface({
    input: fs.createReadStream('crimedata.csv', 'utf-8')
});

rl.on('line', function(line) {
    var jsonForm = {};
    var row = line.split(',');
    jsonForm.primaryType = row[5];
    jsonForm.arrest = row[8];
    jsonForm.year = row[17];

    if (jsonForm.primaryType == 'ASSAULT') {
        if (jsonForm.arrest == 'false' || jsonForm.arrest == 'true') {
            if (jsonForm.year == '2001') {
                count2001.push(jsonForm);
            } else if (jsonForm.year == '2002') {
                count2002.push(jsonForm);
            } else if (jsonForm.year == '2003') {
                count2003.push(jsonForm);
            } else if (jsonForm.year == '2004') {
                count2004.push(jsonForm);
            } else if (jsonForm.year == '2005') {
                count2005.push(jsonForm);
            } else if (jsonForm.year == '2006') {
                count2006.push(jsonForm);
            } else if (jsonForm.year == '2007') {
                count2007.push(jsonForm);
            } else if (jsonForm.year == '2008') {
                count2008.push(jsonForm);
            } else if (jsonForm.year == '2009') {
                count2009.push(jsonForm);
            } else if (jsonForm.year == '2010') {
                count2010.push(jsonForm);
            } else if (jsonForm.year == '2011') {
                count2011.push(jsonForm);
            } else if (jsonForm.year == '2012') {
                count2012.push(jsonForm);
            } else if (jsonForm.year == '2013') {
                count2013.push(jsonForm);
            } else if (jsonForm.year == '2014') {
                count2014.push(jsonForm);
            } else if (jsonForm.year == '2015') {
                count2015.push(jsonForm);
            } else if (jsonForm.year == '2016') {
                count2016.push(jsonForm);
            }
        }
    }
});
rl.on('close', function(line) {
    var for2001False = count2001.reduce((c, ele) => {
        if (ele.arrest == 'false')
            c++;
        return c;
    }, 0);
    var for2001True = count2001.reduce((c, ele) => {
        if (ele.arrest == 'true')
            c++;
        return c;
    }, 0);

    var for2002False = count2002.reduce((c, ele) => {
        if (ele.arrest == 'false')
            c++;
        return c;
    }, 0);
    var for2002True = count2002.reduce((c, ele) => {
        if (ele.arrest == 'true')
            c++;
        return c;
    }, 0);

    var for2003False = count2003.reduce((c, ele) => {
        if (ele.arrest == 'false')
            c++;
        return c;
    }, 0);
    var for2003True = count2003.reduce((c, ele) => {
        if (ele.arrest == 'true')
            c++;
        return c;
    }, 0);

    var for2004False = count2004.reduce((c, ele) => {
        if (ele.arrest == 'false')
            c++;
        return c;
    }, 0);
    var for2004True = count2004.reduce((c, ele) => {
        if (ele.arrest == 'true')
            c++;
        return c;
    }, 0);

    var for2005False = count2005.reduce((c, ele) => {
        if (ele.arrest == 'false')
            c++;
        return c;
    }, 0);
    var for2005True = count2005.reduce((c, ele) => {
        if (ele.arrest == 'true')
            c++;
        return c;
    }, 0);

    var for2006False = count2006.reduce((c, ele) => {
        if (ele.arrest == 'false')
            c++;
        return c;
    }, 0);
    var for2006True = count2006.reduce((c, ele) => {
        if (ele.arrest == 'true')
            c++;
        return c;
    }, 0);

    var for2007False = count2007.reduce((c, ele) => {
        if (ele.arrest == 'false')
            c++;
        return c;
    }, 0);
    var for2007True = count2007.reduce((c, ele) => {
        if (ele.arrest == 'true')
            c++;
        return c;
    }, 0);

    var for2008False = count2008.reduce((c, ele) => {
        if (ele.arrest == 'false')
            c++;
        return c;
    }, 0);
    var for2008True = count2008.reduce((c, ele) => {
        if (ele.arrest == 'true')
            c++;
        return c;
    }, 0);

    var for2009False = count2009.reduce((c, ele) => {
        if (ele.arrest == 'false')
            c++;
        return c;
    }, 0);
    var for2009True = count2009.reduce((c, ele) => {
        if (ele.arrest == 'true')
            c++;
        return c;
    }, 0);

    var for2010False = count2010.reduce((c, ele) => {
        if (ele.arrest == 'false')
            c++;
        return c;
    }, 0);
    var for2010True = count2010.reduce((c, ele) => {
        if (ele.arrest == 'true')
            c++;
        return c;
    }, 0);

    var for2011False = count2011.reduce((c, ele) => {
        if (ele.arrest == 'false')
            c++;
        return c;
    }, 0);
    var for2011True = count2011.reduce((c, ele) => {
        if (ele.arrest == 'true')
            c++;
        return c;
    }, 0);

    var for2012False = count2012.reduce((c, ele) => {
        if (ele.arrest == 'false')
            c++;
        return c;
    }, 0);
    var for2012True = count2012.reduce((c, ele) => {
        if (ele.arrest == 'true')
            c++;
        return c;
    }, 0);

    var for2013False = count2013.reduce((c, ele) => {
        if (ele.arrest == 'false')
            c++;
        return c;
    }, 0);
    var for2013True = count2013.reduce((c, ele) => {
        if (ele.arrest == 'true')
            c++;
        return c;
    }, 0);

    var for2014False = count2014.reduce((c, ele) => {
        if (ele.arrest == 'false')
            c++;
        return c;
    }, 0);
    var for2014True = count2014.reduce((c, ele) => {
        if (ele.arrest == 'true')
            c++;
        return c;
    }, 0);

    var for2015False = count2015.reduce((c, ele) => {
        if (ele.arrest == 'false')
            c++;
        return c;
    }, 0);
    var for2015True = count2015.reduce((c, ele) => {
        if (ele.arrest == 'true')
            c++;
        return c;
    }, 0);

    var for2016False = count2016.reduce((c, ele) => {
        if (ele.arrest == 'false')
            c++;
        return c;
    }, 0);
    var for2016True = count2016.reduce((c, ele) => {
        if (ele.arrest == 'true')
            c++;
        return c;
    }, 0);

    write.push({ year: 2001, for2001False, for2001True });
    write.push({ year: 2002, for2002False, for2002True });
    write.push({ year: 2003, for2003False, for2003True });
    write.push({ year: 2004, for2004False, for2004True });
    write.push({ year: 2005, for2005False, for2005True });
    write.push({ year: 2006, for2006False, for2006True });
    write.push({ year: 2007, for2007False, for2007True });
    write.push({ year: 2008, for2008False, for2008True });
    write.push({ year: 2009, for2009False, for2009True });
    write.push({ year: 2010, for2010False, for2010True });
    write.push({ year: 2011, for2011False, for2011True });
    write.push({ year: 2012, for2012False, for2012True });
    write.push({ year: 2013, for2013False, for2013True });
    write.push({ year: 2014, for2014False, for2014True });
    write.push({ year: 2015, for2015False, for2015True });
    write.push({ year: 2016, for2016False, for2016True });

    var json = JSON.stringify(write, null, 2);
    fs.writeFileSync('assault.json', json);

});