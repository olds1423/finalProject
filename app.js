function makeDoughnutChart(object, placement) {
  var canvas = document.getElementById('graph' + placement);
  var ctx = canvas.getContext('2d');

  var chart = new Chart(ctx, {
    type: 'doughnut',
    data: object.DoughnutData
  });
}


function makeBarChart(object, placement) {
  var canvas = document.getElementById('graph' + placement);
  var ctx = canvas.getContext('2d');

  var chart = new Chart(ctx, {
    type: 'bar',
    data: object.BarData
  });
}

function makeMonths() {
	for (var i = 0; i < 12; i++) {
		var month = new Month(tracker.monthNameArray[i])
	}
}

function makeGraphs() {
	for (var i = 0; i < monthObjectArray.length; i++) {
		makeDoughnutChart(monthObjectArray[i], i);
		makeBarChart(monthObjectArray[i], i);
	}
}

function main(){
	makeDoughnutChart(tracker.monthObjectArray[0], 1);
	makeBarChart(tracker.monthObjectArray[0], 1);
}




main();









// end
