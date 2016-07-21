var allMonthsForReference = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function buildGraphs1(event){
  var totalBillsPerMonth = [];
  for (var i = 0; i < allMonths.length; i++) {
    totalBillsPerMonth[i] = allMonths[i].grandTotal;
		console.log(document.getElementById('formLink'));

  }
  event.preventDefault();

  var BarData1 = {
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
     data: BarData1
   });
}

function buildGraphs2(event) {
  event.preventDefault();
  var dataArray = [];
  var object = document.getElementById("whichGraph2").value;
  var roommateTotal = parseInt(document.getElementById("howManyMates").value);
  console.log(object);
	console.log(roommateTotal);
  for (var i = 0; i < allMonths.length; i++) {
    dataArray[i] = allMonths[i].grandTotal / roommateTotal;
  }
	console.log(dataArray);
  var BarData2 = {
     labels: allMonthsForReference,
     datasets: [
       {
         data: dataArray,
         backgroundColor: randColor(dataArray),
         borderColor: '#000000',
         borderWidth: 3,
         hoverBackgroundColor: '#000000',
         hoverBorderColor: '#ffffff',
       }
     ]
   };

    var canvas = document.getElementById('howManyMates');
    var ctx = canvas.getContext('2d');

    var chart = new Chart(ctx, {
      type: 'bar',
      data: BarData2
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
  // };
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
//
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

var secondSectionGraphs = document.getElementById('refGraphs2');
secondSectionGraphs.addEventListener("click", buildGraphs2);




//end
