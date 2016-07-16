var allMonthsForReference = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function buildGraphs1(event){
  var totalBillsPerMonth = [];
  for (var i = 0; i < allMonths.length; i++) {
    totalBillsPerMonth[i] = allMonths[i].grandTotal;
  }
  event.preventDefault();
  console.log(allMonths);

  var BarData = {
     labels: allMonthsForReference,
     datasets: [
       {
         data: totalBillsPerMonth,
         backgroundColor: randColor(totalBillsPerMonth),
         borderColor: '#000000',
         borderWidth: 3,
         hoverBackgroundColor: '#000000',
         hoverBorderColor: '#ffffff',
       }
     ]
   };

   var canvas = document.getElementById('billTotalsGraph');
   var ctx = canvas.getContext('2d');

    var chart = new Chart(ctx, {
     type: 'bar',
     data: BarData
   });
}


// function buildGraphs1(event) {
// 	event.preventDefault();
// 	var targetMonth = document.getElementById('whichGraph1');
// 	for (var i = 0; i < allMonths.length; i++) {
// 		if(targetMonth.value === allMonths[i].monthName){
// 			makeBarChartAllStatistics(allMonths[i]);
// 			makeDoughnutChartAllStatistics(allMonths[i]);
//       console.log(allMonths[i]);
// 		}
// 	}
// }
// graphSection1
// graphSection2
// function buildGraphs2(event) {
// 	event.preventDefault();
// 	var targetMonth = document.getElementById('whichGraph2');
// 	for (var i = 0; i < allMonths.length; i++) {
// 		if(targetMonth.value === allMonths[i].monthName){
// 			makeBarChart(allMonths[i]);
// 			makeDoughnutChart(allMonths[i]);
// 		}
// 	}
// }
// // graphSection3
// function buildGraphs3(event) {
// 	event.preventDefault();
// 	var targetMonth = document.getElementById('whichGraph3');
// 	for (var i = 0; i < allMonths.length; i++) {
// 		if(targetMonth.value === allMonths[i].monthName){
// 			makeBarChart(allMonths[i]);
// 			makeDoughnutChart(allMonths[i]);
// 		}
// 	}
// }
//
// function makeDoughnutChartAllStatistics(object, section) {
//   var dataArray = [];
//   for (var i = 0; i < object.billObjectArray.length; i++) {
//     dataArray[i] = object.billAmountArray[i] / object.roommateNameArray.length;
//   }
//   var DoughnutData = {
//     labels: object.billNameArray,
//     datasets: [
//       {
//         data: dataArray,
//         backgroundColor: randColor(object.billObjectArray),
//         borderColor: '#000000',
//         borderWidth: 3,
//         hoverBackgroundColor: '#000000',
//         hoverBorderColor: '#ffffff',
//       }
//     ]
//   };
//
//   var canvas = document.getElementById('graph1');
//   var ctx = canvas.getContext('2d');
//
//   var chart = new Chart(ctx, {
//     type: 'doughnut',
//     data: DoughnutData
//   });
// }
//
// function makeBarChartAllStatistics(object) {
//   var BarData = {
//     labels: object.billNameArray,
//     datasets: [
//       {
//         data: object.billAmountArray,
//         backgroundColor: randColor(object.billObjectArray),
//         borderColor: '#000000',
//         borderWidth: 3,
//         hoverBackgroundColor: '#000000',
//         hoverBorderColor: '#ffffff',
//       }
//     ]
//   };
//
//   var canvas = document.getElementById('graph2');
//   var ctx = canvas.getContext('2d');
//
//   var chart = new Chart(ctx, {
//     type: 'bar',
//     data: BarData
//   });
// }
//
// function main(){
//   makeBarChart(allMonths[0]);
//   makeDoughnutChart(allMonths[0]);
// }

//IFFY THAT PULLS FROM LOCAL STORAGE information


//ADD EVENT listener


var firstSectionGraphs = document.getElementById('refGraphs1');
firstSectionGraphs.addEventListener("click", buildGraphs1);

var buildGraphs2 = document.getElementById('refGraphs2');
buildGraphs2.addEventListener("click", buildGraphs2);

var buildGraphs3 = document.getElementById('refGraphs3');
buildGraphs3.addEventListener("click", buildGraphs3);



//end
