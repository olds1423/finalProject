//EVENT HANDLING SECTION
// trying to get the value of newRoomate into the list
function newBillEvent(event){
  event.preventDefault();
  var inputBillName = document.getElementById("billName");
  var inputBillAmount = document.getElementById("billAmount");
  var currentBillsList = document.getElementById("billList");
  var currentMonth = document.getElementById("monthName");
  var billFrequency = document.getElementById("billFrequency");
  new BillObject(currentMonth.value, inputBillAmount.value, billFrequency.value, inputBillName.value);
  // tracker.billObjectArray.BillObject.pushNameAndAmountToArray();
  var newListItem = document.createElement("li");
  newListItem.textContent = inputBillName.value + " $" + inputBillAmount.value;
  currentBillsList.appendChild(newListItem);
  inputBillName.value = "";
  inputBillAmount.value = "";

}

function newRoommateEvent(event){
  event.preventDefault();
  var inputRoommate = document.getElementById("newRoomate");
  var currentRoommateList = document.getElementById("roommateList");
  var child = document.createElement("li");
  tracker.roommateNameArray.push(inputRoommate.value);
  child.textContent = inputRoommate.value;
  tracker.roommateNameArray.push(inputRoommate.value);
  currentRoommateList.appendChild(child);
  inputRoommate.value = "";
}

//LISTEN FOR EVENT AND RESPOND


var newBillButton = document.getElementById("nb");
newBillButton.addEventListener("click", newBillEvent);

var newRoommateButton = document.getElementById("nr");
newRoommateButton.addEventListener("click", newRoommateEvent);
