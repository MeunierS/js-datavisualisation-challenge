//TODO AJAX request for h1
/*let ourRequest = new XMLHttpRequest();
	ourRequest.open('Get', 'https://canvasjs.com/services/data/datapoints.php');
	ourRequest.onload = function () {

		let ourData = JSON.parse(ourRequest.responseText);
		console.log(ourData);
		//tableau sous h1
		let targeth1 = document.getElementById("firstHeading");

		let data = ourData;
		let options = {
			chart: {
				width: 700,
				height: 400
			}
		};

		chart.barChart(container, data, options);

		targeth1.insertAdjacentHTML("afterend", ourData);

	};
	ourRequest.send();


let dataPoints = [];

$.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=10&type=json", function(data) {  
    $.each(data, function(key, value){
        dataPoints.push({x: value[0], y: parseInt(value[1])});
    });
    chart = new tui.Chart("chartContainer",{
        title:{
            text:"Live Chart with dataPoints from External JSON"
        },
        data: [{
        type: "line",
        dataPoints : dataPoints,
        }]
    });
    chart.render();
    updateChart();
});

function updateChart() {
	$.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=" + (dataPoints.length + 1) + "&ystart=" + (dataPoints[dataPoints.length - 1].y) + "&length=1&type=json", function(data) {
		$.each(data, function(key, value) {
			dataPoints.push({
				x: parseInt(value[0]),
				y: parseInt(value[1])
			});
	   });
	   chart.render();
	   setTimeout(function(){updateChart()}, 1000);
	});
 }*/


//TODO Chart 1



let table = document.getElementById("table1");

function tableToJson(table) {
	let data = [];
	for (i = 1; i < table.rows.length; i++) {
		let tableRow = table.rows[i];
		let rowData = [];
		for (j = 1; j < tableRow.cells.length; j++) {
			rowData.push(tableRow.cells[j].innerHTML);;
		}
		data.push(rowData);
	}
	return data;
}
table = tableToJson(table);

console.log(table); //ok + ou -

document.getElementById("table1").insertAdjacentHTML("beforebegin", '<canvas id="canvas1" height="400" width="400"></canvas>'); // ok

let ctx = document.getElementById("canvas1");
let myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
				datasets: [{ 
					data: [86,114,106,106,107,111,133,221,783,2478],
					label: "Africa",
					borderColor: "#3e95cd",
					fill: false
				  }, { 
					data: [282,350,411,502,635,809,947,1402,3700,5267],
					label: "Asia",
					borderColor: "#8e5ea2",
					fill: false
				  }, { 
					data: [168,170,178,190,203,276,408,547,675,734],
					label: "Europe",
					borderColor: "#3cba9f",
					fill: false
				  }, { 
					data: [40,20,10,16,24,38,74,167,508,784],
					label: "Latin America",
					borderColor: "#e8c3b9",
					fill: false
				  }, { 
					data: [6,3,2,2,7,26,82,172,312,433],
					label: "North America",
					borderColor: "#c45850",
					fill: false
				  }
				]
			  },
			  options: {
				title: {
				  display: true,
				  text: 'World population per region (in millions)'
				}
			  }
			});

			console.log(myChart); // ok


			//TODO Chart 2