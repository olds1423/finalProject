//starting the form JS

// var form = document.getElementById('form');
//
// function handleFormSubmit() {
//   if (true) {
//
//   }
// }
// //simplified graph

var newArray = [25, 25, 25, 25];
var otherArray = ['a', 'b', 'c', 'd'];

function makeChart() {
  var canvas = document.getElementById('graph1');
  var ctx = canvas.getContext('2d');

  var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: otherArray, //tracker.billNameArray,
      datasets: [
        {
          data: newArray,
          backgroundColor: ['#B8002E', '#FF3366', '#33CCFF', '#CC33FF'],
          borderColor: '#660099',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,102,51,0.4)',
          hoverBorderColor: '#F5B800',
        }
      ]
    }
  });
}

makeChart();
