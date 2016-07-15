//EVENT HANDLING SECTION
// trying to get the value of newRoomate into the list
function newBillEvent(event){
  event.preventDefault();
  var inputBillName = document.getElementById("billName");
  var inputBillAmount = document.getElementById("billAmount");
  var currentBillsList = document.getElementById("billList");
  var currentMonth = document.getElementById("monthName");
  var billFrequency = document.getElementById("billFrequency");
  var bill = new BillObject(currentMonth.value, inputBillAmount.value, billFrequency.value, inputBillName.value);
  bill.findAndUpdateMonth();
  // push the bill object into the correct month using the current month YES

  // tracker.billObjectArray.BillObject.pushNameAndAmountToArray();
  var newListItem = document.createElement("li");
  newListItem.textContent = inputBillName.value + " $" + inputBillAmount.value;
  currentBillsList.appendChild(newListItem);
  inputBillName.value = "";
  inputBillAmount.value = "";
//
}

function newRoommateEvent(event){
  event.preventDefault();
  var targetMonth = document.getElementById('monthName');
  var inputRoommate = document.getElementById("newRoomate");
  var currentRoommateList = document.getElementById("roommateList");
  var child = document.createElement("li");
  tracker.roommateNameArray.push(inputRoommate.value);
  child.textContent = inputRoommate.value;

  for (var i = 0; i < allMonths.length; i++) {
    if(allMonths[i].monthName === targetMonth.value){
      allMonths[i].roommateNameArray.push(inputRoommate.value);
    }

  }
  currentRoommateList.appendChild(child);
  inputRoommate.value = "";
}

function removeRoomate(){
  //add an option from the array of roomates that is created
  // the roommate selected in the array will be removed for that month

  // should we add two buttons at the bottom? One per month on for all instance ?
}

function refreshGraphs(event) {
	event.preventDefault();

	var targetMonth = document.getElementById('whichGraph');
	console.log(targetMonth.value);
	for (var i = 0; i < allMonths.length; i++) {
		console.log(allMonths[i]);
		if(targetMonth.value === allMonths[i].monthName){

			makeDoughnutChart(allMonths[i], 1);
			makeBarChart(allMonths[i], 2);
		}
	}


}
//LISTEN FOR EVENT AND RESPOND


var newBillButton = document.getElementById("nb");
newBillButton.addEventListener("click", newBillEvent);

var newRoommateButton = document.getElementById("nr");
newRoommateButton.addEventListener("click", newRoommateEvent);

var refreshButton = document.getElementById('refGraphs');
refreshButton.addEventListener("click", refreshGraphs);
