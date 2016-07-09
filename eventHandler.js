//EVENT HANDLING SECTION
function formSubmitFunction(event) {
  event.preventDefault();

  //get variables from user
  var bill = event.target.billName.value;
  var amount = parseInt(event.target.billAmount.value);
  var frequency = parseInt(event.target.billFrequency.value);
  var month = event.target.monthName.value;
  var rent = parseInt(event.target.totalRent.value);
  var roomie = event.target.roommateName.value;

  tracker.totalRent = rent;              // total rent
  tracker.roommateNameArray.push(roomie); //push name to array SHOULD BE SEPARATE INPUT FORM!!!!!

  var newBill = new BillObject(month, amount, frequency, bill); //instantiate new object with user variables
  newBill.doAllMethods();
  console.log(newBill);

//clear values
  event.target.monthName.value = '';
  event.target.billName.value = '';
  event.target.billAmount.value = null;
  event.target.billFrequency.value = null;
  event.target.totalRent.value = null;
}

// trying to get the value of newRoomate into the list
function newBillEvent(event){
  event.preventDefault();
  var inputBillName = document.getElementById("billName");
  var inputBillAmount = document.getElementById("billAmount");
  var currentBillsList = document.getElementById("billList");
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
  child.textContent = inputRoommate.value;
  tracker.roommateNameArray.push(inputRoommate.value);
  currentRoommateList.appendChild(child);
  inputRoommate.value = "";
}

//LISTEN FOR EVENT AND RESPOND
var nbnr = document.getElementById('nbnr');   //reference form
nbnr.addEventListener('submit', formSubmitFunction);

var newBillButton = document.getElementById("nb");
newBillButton.addEventListener("click", newBillEvent);

var newRoommateButton = document.getElementById("nr");
newRoommateButton.addEventListener("click", newRoommateEvent);
