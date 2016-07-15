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

	var billSelector = document.getElementById('selectedBill');
	var billOption = document.createElement('option');
	billOption.value = inputBillName.value;
	billOption.textContent = inputBillName.value;
	billSelector.appendChild(billOption);

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
	var roommateSelector = document.getElementById('selectedRoomate');

  var child = document.createElement("li");
	tracker.roommateNameArray.push(inputRoommate.value);
	child.textContent = inputRoommate.value;
	child.id = inputRoommate.value + '-li';

	var roomateOption = document.createElement('option');
	roomateOption.value = inputRoommate.value;
	roomateOption.id = inputRoommate.value
	roomateOption.textContent = inputRoommate.value;



  for (var i = 0; i < allMonths.length; i++) {
    if(allMonths[i].monthName === targetMonth.value){
      allMonths[i].roommateNameArray.push(inputRoommate.value);
    }

  }
	roommateSelector.appendChild(roomateOption);
  currentRoommateList.appendChild(child);
  inputRoommate.value = "";
}

function removeRoomate(event){
	event.preventDefault();

	var selectedRoomate = document.getElementById('selectedRoomate');
	var targetMonth = document.getElementById('monthName');
	var currentRoommateList = document.getElementById("roommateList");

	for (var i = 0; i < allMonths.length; i++) {
		var nameLocation = allMonths[i].roommateNameArray.indexOf(selectedRoomate.value);
		if(targetMonth.value === allMonths[i].monthName){
			if (nameLocation > -1) {
				allMonths[i].roommateNameArray.splice(nameLocation, 1);
				var child = document.getElementById(selectedRoomate.value + '-li')
				currentRoommateList.removeChild(child);

				child = document.getElementById(selectedRoomate.value);
				selectedRoomate.removeChild(child);

				break;
			}
			else{
				break;
			}
		}
	}
}

function removeBill(event) {
	event.preventDefault();

}

function refreshGraphs(event, location) {
	event.preventDefault();

	var targetMonth = document.getElementById('whichGraph');
	for (var i = 0; i < allMonths.length; i++) {
		if(targetMonth.value === allMonths[i].monthName){

			makeBarChart(allMonths[i], 1);
			makeDoughnutChart(allMonths[i], 2);
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

var removeRoomateButton = document.getElementById('removeRoomateBbutton');
removeRoomateButton.addEventListener('click', removeRoomate);
var removeBillButton = document.getElementById('removeBillButton');
removeBillButton.addEventListener('click', removeBill);
