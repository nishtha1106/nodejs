var initStackedBarChart = {
  draw: function(config) {
    xData =["OVER $500", "$500 AND UNDER"];
    me = this,
    domEle = config.element,
    stackKey = config.key,
    data = config.data,
    margin = {top: 20, right: 20, bottom: 30, left: 50},
    parseyear = d3.timeParse("%m/%Y"),
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom,
    xScale = d3.scaleBand().range([0, width]).padding(0.1),
    yScale = d3.scaleLinear().range([height, 0]),
    color = d3.scaleOrdinal(d3.schemeCategory20),
    xAxis = d3.axisBottom(xScale),
    yAxis =  d3.axisLeft(yScale),
    svg = d3.select("#"+domEle).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    var stack = d3.stack()
      .keys(stackKey)
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone);
  
    var layers= stack(data);
      // data.sort(function(a, b) { return b.total - a.total; });
      xScale.domain(data.map(function(d) { return (d.year); }));
      yScale.domain([0, d3.max(layers[layers.length - 1], function(d) { return d[0] + d[1]; }) ]).nice();

    var layer = svg.selectAll(".layer")
      .data(layers)
      .enter().append("g")
      .attr("class", "layer")
      .style("fill", function(d, i) { return color(i); });

      layer.selectAll("rect")
        .data(function(d) { return d; })
      .enter().append("rect")
        .attr("x", function(d) { return xScale((d.data.year)); })
        .attr("y", function(d) { return yScale(d[1]); })
        .attr("height", function(d) { return yScale(d[0]) - yScale(d[1]); })
        .attr("width", xScale.bandwidth());

      svg.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + (height+5) + ")")
      .call(xAxis);

      svg.append("g")
      .attr("class", "axis axis--y")
      .attr("transform", "translate(0,0)")
      .call(yAxis);  

       var legend = svg.selectAll(".legend")
               .data(xData.slice())
               .enter().append("g")
               .attr("class", "legend")
               .attr("transform", function (d, i) { return "translate(-20," + i * 20 + ")"; });           
               legend.append("rect")
               .attr("x", width - 18)
               .attr("width", 18)
               .attr("height", 18);            
               legend.select("rect").style("fill", function (d, i) {
                   return color(i);
               });            
               legend.append("text")
               .attr("x", width - 24)
               .attr("y", 9)
               .attr("dy", ".35em")
               .style("text-anchor", "end")
               .text(function (d) { return d; });   
  
} }

var key = ["OVER $500", "$500 AND UNDER"];
var datajson=d3.json("../json/theft.json",function(error, jasonData){
if (error) throw error;
datajson= jasonData;
initStackedBarChart.draw({
  data: datajson,
  key: key,
  element: 'stacked-bar'
});
});
