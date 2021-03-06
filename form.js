//EVENT HANDLING SECTION
function newBillEvent(event){


  event.preventDefault();
  var inputBillName = document.getElementById("billName");
  var inputBillAmount = document.getElementById("billAmount");
  var currentBillsList = document.getElementById("billList");
  var currentMonth = document.getElementById("monthName");
  var billFrequency = document.getElementById("billFrequency");
  // console.log(inputBillName.value.toLowerCase());
  // console.log(billOptions);
  // var inputBillNameOption = inputBillName.value.toLowerCase();
  // if (inputBillNameOption === billOptions.indexOf || inputBillName.value !== null) {
  //   billOptions.push(inputBillNameOption);
  // }
  var bill = new BillObject(currentMonth.value, inputBillAmount.value, billFrequency.value, inputBillName.value);
  bill.findAndUpdateMonth();



	var billSelector = document.getElementById('selectedBill');
	var billOption = document.createElement('option');
	billOption.value = inputBillName.value;
	billOption.textContent = inputBillName.value + " - " + currentMonth.value;
	billOption.id = inputBillName.value;
	billSelector.appendChild(billOption);



  var newListItem = document.createElement("li");
  newListItem.textContent = inputBillName.value + " $" + inputBillAmount.value + " - " + currentMonth.value;
	newListItem.id = inputBillName.value + '-li';
  currentBillsList.appendChild(newListItem);
  inputBillName.value = "";
  inputBillAmount.value = "";



  helperFunctions.pushToLocalStorage();


}

function newRoommateEvent(event){
  event.preventDefault();
  var targetMonth = document.getElementById('monthName');
  var inputRoommate = document.getElementById("newRoomate");
  var currentRoommateList = document.getElementById("roommateList");
	var roommateSelector = document.getElementById('selectedRoomate');



  var child = document.createElement("li");
	child.textContent = inputRoommate.value + " - " + targetMonth.value;
	child.id = inputRoommate.value + '-li';



	var roomateOption = document.createElement('option');
	roomateOption.value = inputRoommate.value;
	roomateOption.id = inputRoommate.value
	roomateOption.textContent = inputRoommate.value + " - " + targetMonth.value;





  for (var i = 0; i < allMonths.length; i++) {
    if(allMonths[i].monthName === targetMonth.value){
      allMonths[i].roommateNameArray.push(inputRoommate.value);

    }


  }
	roommateSelector.appendChild(roomateOption);
  currentRoommateList.appendChild(child);
  inputRoommate.value = "";

  helperFunctions.pushToLocalStorage


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


  helperFunctions.pushToLocalStorage();
}

function removeBill(event) {
	event.preventDefault();

	var selectedBill = document.getElementById('selectedBill');
	var targetMonth = document.getElementById('monthName');
	var currentBillList = document.getElementById("billList");

	for (var i = 0; i < allMonths.length; i++) {
		var billObjectLocation = allMonths[i].billNameArray.indexOf(selectedBill.value);

		for (var j = 0; j < allMonths[i].billObjectArray.length; j++) {

			if(selectedBill.value === allMonths[i].billNameArray[j]){
				if (billObjectLocation > -1) {

					allMonths[i].grandTotal -= allMonths[i].billAmountArray[j];
					allMonths[i].billObjectArray.splice(billObjectLocation, 1);
					allMonths[i].billNameArray.splice(billObjectLocation, 1);
					allMonths[i].billAmountArray.splice(billObjectLocation, 1);


					var child = document.getElementById(selectedBill.value + '-li')
					currentBillList.removeChild(child);

					child = document.getElementById(selectedBill.value);
					selectedBill.removeChild(child);
					break;
				}
			}
		}
	}


  helperFunctions.pushToLocalStorage();
}

function refreshGraphs(event, location) {
	event.preventDefault();

	var targetMonth = document.getElementById('whichGraph');
	for (var i = 0; i < allMonths.length; i++) {
		if(targetMonth.value === allMonths[i].monthName){

			var parent = document.getElementById('graphDiv1');
			var child = document.getElementById('graph1');
			parent.removeChild(child);

			child = document.createElement('canvas');
			child.id = 'graph1';
			parent.appendChild(child);
			makeBarChart(allMonths[i], 1);

			var parent = document.getElementById('graphDiv2');
			var child = document.getElementById('graph2');
			parent.removeChild(child);

			child = document.createElement('canvas');
			child.id = 'graph2';
			parent.appendChild(child);
			makeDoughnutChart(allMonths[i], 2);
		}
	}


}

startUpCheckStorage();


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
