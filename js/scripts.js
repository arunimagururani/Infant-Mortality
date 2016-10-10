//Convert json into an array of arrays to pass to Google.

//first, create an empty array.

var dataArray = [];
//second, create an array of headers.
var headers = ["year","total","boys","girls"];
//third, push my headers into my dataArray
dataArray.push(headers);
//fourth, loop through the json, pushing each object to the dataArray as an array.
json.forEach(function(d){
  dataArray.push([d.year.toString(),d.total,d.boys,d.girls]);
});

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {


  var data = google.visualization.arrayToDataTable(dataArray);

  var options = {
    colors:["#FF0000","#FFFF00","#3182bd"],
    focusTarget:"category",
    curveType: 'function',
    hAxis: {
            title: "year"
    },
    vAxis: {
            title: "infant mortality rate"
    }
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('chart'));

  chart.draw(data, options);
}
