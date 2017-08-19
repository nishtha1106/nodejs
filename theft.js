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
    var array = line.split(',');
    jsonForm.primaryType = array[5];
    jsonForm.description = array[6];
    jsonForm.year = array[17];

    if (jsonForm.primaryType == 'THEFT') {
        if (jsonForm.description == 'OVER $500' || jsonForm.description == '$500 AND UNDER') {
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


    var for2001ov = count2001.reduce((c, ele) => {
        if (ele.description == 'OVER $500')
            c++;
        return c;
    }, 0);
    var for2001un = count2001.reduce((c, ele) => {
        if (ele.description == '$500 AND UNDER')
            c++;
        return c;
    }, 0);

    var for2002ov = count2002.reduce((c, ele) => {
        if (ele.description == 'OVER $500')
            c++;
        return c;
    }, 0);
    var for2002un = count2002.reduce((c, ele) => {
        if (ele.description == '$500 AND UNDER')
            c++;
        return c;
    }, 0);

    var for2003ov = count2003.reduce((c, ele) => {
        if (ele.description == 'OVER $500')
            c++;
        return c;
    }, 0);
    var for2003un = count2003.reduce((c, ele) => {
        if (ele.description == '$500 AND UNDER')
            c++;
        return c;
    }, 0);

    var for2004ov = count2004.reduce((c, ele) => {
        if (ele.description == 'OVER $500')
            c++;
        return c;
    }, 0);
    var for2004un = count2004.reduce((c, ele) => {
        if (ele.description == '$500 AND UNDER')
            c++;
        return c;
    }, 0);

    var for2005ov = count2005.reduce((c, ele) => {
        if (ele.description == 'OVER $500')
            c++;
        return c;
    }, 0);
    var for2005un = count2005.reduce((c, ele) => {
        if (ele.description == '$500 AND UNDER')
            c++;
        return c;
    }, 0);

    var for2006ov = count2006.reduce((c, ele) => {
        if (ele.description == 'OVER $500')
            c++;
        return c;
    }, 0);
    var for2006un = count2006.reduce((c, ele) => {
        if (ele.description == '$500 AND UNDER')
            c++;
        return c;
    }, 0);

    var for2007ov = count2007.reduce((c, ele) => {
        if (ele.description == 'OVER $500')
            c++;
        return c;
    }, 0);
    var for2007un = count2007.reduce((c, ele) => {
        if (ele.description == '$500 AND UNDER')
            c++;
        return c;
    }, 0);

    var for2008ov = count2008.reduce((c, ele) => {
        if (ele.description == 'OVER $500')
            c++;
        return c;
    }, 0);
    var for2008un = count2008.reduce((c, ele) => {
        if (ele.description == '$500 AND UNDER')
            c++;
        return c;
    }, 0);

    var for2009ov = count2009.reduce((c, ele) => {
        if (ele.description == 'OVER $500')
            c++;
        return c;
    }, 0);
    var for2009un = count2009.reduce((c, ele) => {
        if (ele.description == '$500 AND UNDER')
            c++;
        return c;
    }, 0);

    var for2010ov = count2010.reduce((c, ele) => {
        if (ele.description == 'OVER $500')
            c++;
        return c;
    }, 0);
    var for2010un = count2010.reduce((c, ele) => {
        if (ele.description == '$500 AND UNDER')
            c++;
        return c;
    }, 0);

    var for2011ov = count2011.reduce((c, ele) => {
        if (ele.description == 'OVER $500')
            c++;
        return c;
    }, 0);
    var for2011un = count2011.reduce((c, ele) => {
        if (ele.description == '$500 AND UNDER')
            c++;
        return c;
    }, 0);

    var for2012ov = count2012.reduce((c, ele) => {
        if (ele.description == 'OVER $500')
            c++;
        return c;
    }, 0);
    var for2012un = count2012.reduce((c, ele) => {
        if (ele.description == '$500 AND UNDER')
            c++;
        return c;
    }, 0);

    var for2013ov = count2013.reduce((c, ele) => {
        if (ele.description == 'OVER $500')
            c++;
        return c;
    }, 0);
    var for2013un = count2013.reduce((c, ele) => {
        if (ele.description == '$500 AND UNDER')
            c++;
        return c;
    }, 0);

    var for2014ov = count2014.reduce((c, ele) => {
        if (ele.description == 'OVER $500')
            c++;
        return c;
    }, 0);
    var for2014un = count2014.reduce((c, ele) => {
        if (ele.description == '$500 AND UNDER')
            c++;
        return c;
    }, 0);

    var for2015ov = count2015.reduce((c, ele) => {
        if (ele.description == 'OVER $500')
            c++;
        return c;
    }, 0);
    var for2015un = count2015.reduce((c, ele) => {
        if (ele.description == '$500 AND UNDER')
            c++;
        return c;
    }, 0);

    var for2016ov = count2016.reduce((c, ele) => {
        if (ele.description == 'OVER $500')
            c++;
        return c;
    }, 0);
    var for2016un = count2016.reduce((c, ele) => {
        if (ele.description == '$500 AND UNDER')
            c++;
        return c;
    }, 0);

    write.push({ year: 2001, for2001ov, for2001un });
    write.push({ year: 2002, for2002ov, for2002un });
    write.push({ year: 2003, for2003ov, for2003un });
    write.push({ year: 2004, for2004ov, for2004un });
    write.push({ year: 2005, for2005ov, for2005un });
    write.push({ year: 2006, for2006ov, for2006un });
    write.push({ year: 2007, for2007ov, for2007un });
    write.push({ year: 2008, for2008ov, for2008un });
    write.push({ year: 2009, for2009ov, for2009un });
    write.push({ year: 2010, for2010ov, for2010un });
    write.push({ year: 2011, for2011ov, for2011un });
    write.push({ year: 2012, for2012ov, for2012un });
    write.push({ year: 2013, for2013ov, for2013un });
    write.push({ year: 2014, for2014ov, for2014un });
    write.push({ year: 2015, for2015ov, for2015un });
    write.push({ year: 2016, for2016ov, for2016un });

    var json = JSON.stringify(write, null, 2);
    fs.writeFileSync('theft.json', json);

});