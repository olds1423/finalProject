
var placeHolderArray = [25, 25, 25, 25];
var newPlaceHolderArray = ['a', 'b', 'c', 'd'];

function makeDoughnutChart() {
  var canvas = document.getElementById('graph1');
  var ctx = canvas.getContext('2d');

  var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: newPlaceHolderArray, //tracker.billNameArray, ******** REMOVE THESE PLACEHOLDERS! ********
      datasets: [
        {
          data: placeHolderArray, //tracker.billAmountArray,  ******** REMOVE THESE PLACEHOLDERS! ********
          backgroundColor: ['#B8002E', '#FF3366', '#33CCFF', '#CC33FF'],
          borderColor: '#778899',
          borderWidth: 3,
          hoverBackgroundColor: 'rgba(255,102,51,0.4)',
          hoverBorderColor: '#F5B800',
        }
      ]
    }
  });
}

makeDoughnutChart();

///////\\\\\\\\\\\\\\////////////

function makeBarChart() {
  var canvas = document.getElementById('graph2');
  var ctx = canvas.getContext('2d');

  var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: newPlaceHolderArray, //******** REMOVE THESE PLACEHOLDERS! ********
      datasets: [
        {
          data: placeHolderArray, //******** REMOVE THESE PLACEHOLDERS! ********
          backgroundColor: ['#33FF66', '#33FFCC', '#33CCFF', '#FF3366' ],
          borderColor: '#778899',
          borderWidth: 3,
          hoverBackgroundColor: '#CCFF33',
          hoverBorderColor: '#F5B800',
        }
      ]
    }
  });
}

makeBarChart();
