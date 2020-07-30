//*Global variables

let table = document.getElementById("table1");
table = tableToJson(table);

let table2 = document.getElementById("table2");
table2 = tableToJson(table2);
//*Fonctions

const arrayWithoutElementAtIndex = function (arr, index) {
	let ret = arr.slice(); //make a copy
	ret.splice(index, 1); //remove the item from given index
	return ret; //return the copy
} //https://stackoverflow.com/questions/31202768/get-array-without-element-at-index

function tableToJson(table) { // https://stackoverflow.com/questions/9927126/how-to-convert-the-following-table-to-json-with-javascript
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

function arrayStringToFloat(table) {
	let data = [];
	for (i = 0; i < table.length; i++) {
		table[i] = table[i].replace(',', '.');
		data.push(parseFloat(table[i]));
	}
	return data
}

function randomColor() {
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);
	let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return color;
}

//TODO AJAX request for h1
let ourRequest = new XMLHttpRequest();
ourRequest.open('Get', 'https://canvasjs.com/services/data/datapoints.php');
ourRequest.onload = function () {

	let ourData = JSON.parse(ourRequest.responseText);
	console.log(ourData);

};
ourRequest.send();
console.log (ourRequest);

document.getElementById("firstHeading").insertAdjacentHTML("afterend", '<canvas id="canvas3" height="400" width="400"></canvas>');

let ctx3 = document.getElementById("canvas3");
let myChart3 = new Chart(ctx3, {
	type: 'line',
	data: {
		labels: ourRequest[0],
		datasets: [{
			data: ourRequest[1], //! does not work
			label: "AJAX",
			borderColor: "#000000",
			fill: false
		}]
	},
	options: {
		title: {
			display: true,
			text: 'AJAX'
		}
	}
});

///* Chart 1

document.getElementById("table1").insertAdjacentHTML("beforebegin", '<canvas id="canvas1" height="400" width="400"></canvas>');

let ctx = document.getElementById("canvas1");
let myChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: arrayWithoutElementAtIndex(table[0], 0),
		datasets: [{
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[1], 0)),
				label: table[1][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[2], 0)),
				label: table[2][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[3], 0)),
				label: table[3][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[4], 0)),
				label: table[4][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[5], 0)),
				label: table[5][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[6], 0)),
				label: table[6][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[7], 0)),
				label: table[7][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[8], 0)),
				label: table[8][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[9], 0)),
				label: table[9][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[10], 0)),
				label: table[10][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[11], 0)),
				label: table[11][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[12], 0)),
				label: table[12][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[13], 0)),
				label: table[13][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[14], 0)),
				label: table[14][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[15], 0)),
				label: table[15][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[16], 0)),
				label: table[16][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[17], 0)),
				label: table[17][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[18], 0)),
				label: table[18][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[19], 0)),
				label: table[19][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[20], 0)),
				label: table[20][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[21], 0)),
				label: table[21][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[22], 0)),
				label: table[22][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[23], 0)),
				label: table[23][0],
				borderColor: randomColor(),
				fill: false
			},
			{
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[24], 0)),
				label: table[24][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[25], 0)),
				label: table[25][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[26], 0)),
				label: table[26][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[27], 0)),
				label: table[27][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[28], 0)),
				label: table[28][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[29], 0)),
				label: table[29][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[30], 0)),
				label: table[30][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[31], 0)),
				label: table[31][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[32], 0)),
				label: table[32][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[33], 0)),
				label: table[33][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[34], 0)),
				label: table[34][0],
				borderColor: randomColor(),
				fill: false
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table[35], 0)),
				label: table[35][0],
				borderColor: randomColor(),
				fill: false
			}
		]
	},
	options: {
		title: {
			display: true,
			text: 'Crime recorded'
		}
	}
});

//* Chart 2

document.getElementById("table2").insertAdjacentHTML("beforebegin", '<canvas id="canvas2" height="400" width="400"></canvas>'); // ok

let ctx2 = document.getElementById("canvas2");
let myChart2 = new Chart(ctx2, {
	type: 'bar',
	data: {
		labels: ["2007-09", "2010-2012"],
		datasets: [{
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[1], 0)),
				label: table2[1][0],
				backgroundColor: randomColor(),
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[2], 0)),
				label: table2[2][0],
				backgroundColor: randomColor(),
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[3], 0)),
				label: table2[3][0],
				backgroundColor: randomColor(),
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[4], 0)),
				label: table2[4][0],
				backgroundColor: randomColor(),
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[5], 0)),
				label: table2[5][0],
				backgroundColor: randomColor(),
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[6], 0)),
				label: table2[6][0],
				backgroundColor: randomColor(),
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[7], 0)),
				label: "UK and Wales",
				backgroundColor: randomColor(),
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[8], 0)),
				label: table2[8][0],
				backgroundColor: randomColor(),
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[9], 0)),
				label: table2[9][0],
				backgroundColor: randomColor(),
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[10], 0)),
				label: table2[10][0],
				backgroundColor: randomColor(),
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[11], 0)),
				label: table2[11][0],
				backgroundColor: randomColor(),
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[12], 0)),
				label: table2[12][0],
				backgroundColor: randomColor(),
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[13], 0)),
				label: table2[13][0],
				backgroundColor: randomColor(),
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[14], 0)),
				label: table2[14][0],
				backgroundColor: randomColor(),
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[15], 0)),
				label: table2[15][0],
				backgroundColor: randomColor(),
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[16], 0)),
				label: table2[16][0],
				backgroundColor: randomColor(),
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[17], 0)),
				label: table2[17][0],
				backgroundColor: randomColor(),
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[18], 0)),
				label: table2[18][0],
				backgroundColor: randomColor(),
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[19], 0)),
				label: table2[19][0],
				backgroundColor: randomColor(),
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[20], 0)),
				label: table2[20][0],
				backgroundColor: randomColor(),
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[21], 0)),
				label: table2[21][0],
				backgroundColor: randomColor(),
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[22], 0)),
				label: table2[22][0],
				backgroundColor: randomColor(),
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[23], 0)),
				label: table2[23][0],
				backgroundColor: randomColor(),
			},
			{
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[24], 0)),
				label: table2[24][0],
				backgroundColor: randomColor(),
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[25], 0)),
				label: table2[25][0],
				backgroundColor: randomColor(),
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[26], 0)),
				label: table2[26][0],
				backgroundColor: randomColor(),
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[27], 0)),
				label: table2[27][0],
				backgroundColor: randomColor(),
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[28], 0)),
				label: table2[28][0],
				backgroundColor: randomColor(),
			}, {
				data: arrayStringToFloat(arrayWithoutElementAtIndex(table2[29], 0)),
				label: table2[29][0],
				backgroundColor: randomColor(),
			}
		]
	},
	options: {
		title: {
			display: true,
			text: 'Prison population'
		}
	}
});