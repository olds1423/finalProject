var allMonthsForReference = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function buildGraphs1(event){
	event.preventDefault();
  var totalBillsPerMonth = [];
  for (var i = 0; i < allMonths.length; i++) {
    totalBillsPerMonth[i] = allMonths[i].grandTotal;
  }

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

	 var parent = document.getElementById('graphDiv1');
	 var child = document.getElementById('billTotalsGraph');
	 parent.removeChild(child);

	 child = document.createElement('canvas');
	 child.id = 'billTotalsGraph';
	 child.style.width = "500px";

	 parent.appendChild(child);

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
	var labelArray = [];
  var object = document.getElementById("whichGraph2").value;
	var numMates = document.getElementById('howManyMates').value;
	console.log(numMates);

	for (var i = 0; i < allMonths.length; i++) {
		if (allMonths[i].monthName === object) {
			for (var j = 0; j < allMonths.length; j++) {
				labelArray[j] = allMonths[i].billNameArray[j];
				dataArray[j] = allMonths[i].billAmountArray[j];
				dataArray[j] /= numMates;
			}
		}
	}
  var BarData2 = {
     labels: labelArray,
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


	 var parent = document.getElementById('graphDiv2');
	 var child = document.getElementById('roomateGraph');
	 parent.removeChild(child);

	 child = document.createElement('canvas');
	 child.id = 'roomateGraph';
	 child.style.width = "500px";
	 parent.appendChild(child);

    var canvas = document.getElementById('roomateGraph');
    var ctx = canvas.getContext('2d');

    var chart = new Chart(ctx, {
      type: 'bar',
      data: BarData2
    });
}

function statsReadStorage() {

  var newBill = [];
  if (localStorage.storedBills) {
    var parsedBills = JSON.parse(localStorage.getItem('storedBills'));
    for (var i = 0; i < parsedBills.length; i++){
			var currentBill = new BillObject(parsedBills[i].billMonthName, parsedBills[i].billAmount, parsedBills[i].billFrequency, parsedBills[i].billName);
			newBill.push(currentBill);
			// new BillObject(each.billMonthName, each.billAmount, each.billFrequency, each.billName)
    }

    for (var j = 0; j < newBill.length; j++) {

      newBill[j].findAndUpdateMonth();
    }
  }
}


statsReadStorage();

var firstSectionGraphs = document.getElementById('refGraphs1');
firstSectionGraphs.addEventListener("click", buildGraphs1);

var secondSectionGraphs = document.getElementById('refGraphs2');
secondSectionGraphs.addEventListener("click", buildGraphs2);
