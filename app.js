function makeDoughnutChart(object, placement) {
  var dataArray = [];
  for (var i = 0; i < object.billObjectArray.length; i++) {
    dataArray[i] = object.billAmountArray[i] / object.roommateNameArray.length;
  }
  var DoughnutData = {
    labels: object.billNameArray,
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

function main(){
	makeBarChart(allMonths[0], 1);
  makeDoughnutChart(allMonths[0], 2);
}




// main();









// end

//By Thor's Hammer we shall deploy!
