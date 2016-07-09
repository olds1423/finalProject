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

//LISTEN FOR EVENT AND RESPOND
var form = document.getElementById('updateForm');   //reference form
form.addEventListener('submit', formSubmitFunction);
