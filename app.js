function makeDoughnutChart(object, placement) {
  console.log("is this working");
  var dataArray = [];
  for (var i = 0; i < object.billObjectArray.length; i++) {
    dataArray[i] = object.billAmountArray[i] / object.roommateNameArray.length;
  }
  console.log(dataArray);
  console.log(object.billAmountArrays);
  var DoughnutData = {
    labels: helperFunctions.doAllMethods(object),
    datasets: [
      {
        data: dataArray,
        backgroundColor: randColor(object.billObjectArray),
        borderColor: '#000000',
        borderWidth: 3,
        hoverBackgroundColor: '#000000',
        hoverBorderColor: '#ffffff',
      }
    ]
  };
  console.log("is this working 2");

  var canvas = document.getElementById('graph' + placement);
  var ctx = canvas.getContext('2d');

  var chart = new Chart(ctx, {
    type: 'doughnut',
    data: DoughnutData
  });
}

function makeBarChart(object, placement) {
  var BarData = {
    labels: object.billNameArray,
    datasets: [
      {
        data: object.billAmountArray,
        backgroundColor: randColor(object.billObjectArray),
        borderColor: '#000000',
        borderWidth: 3,
        hoverBackgroundColor: '#000000',
        hoverBorderColor: '#ffffff',
      }
    ]
  };

  var canvas = document.getElementById('graph' + placement);
  var ctx = canvas.getContext('2d');

  var chart = new Chart(ctx, {
    type: 'bar',
    data: BarData
  });
}

// function makeGraphs() {
// 	for (var i = 0; i < monthObjectArray.length; i++) {
// 		makeDoughnutChart(monthObjectArray[i], i);
// 		makeBarChart(monthObjectArray[i], i);
// 	}
// }

function main(){
	makeBarChart(allMonths[0], 1);
  makeDoughnutChart(allMonths[0], 2);
}




main();









// end
