var tracker = {
  monthNameArray: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
  billObjectArray: [],      ////array of all bill obejcts
  roommateNameArray: [],
  totalBills: 0,
  totalRent: 0,
  totalRentAndBill: 0,
};

function BillObject(month, amount, frequency, bill) {   //bill constructor
  this.monthName = month;
  this.billAmount = amount;
  this.billFrequency = frequency;      //frequency inside of month
  this.billName = bill;

  tracker.billObjectArray.push(this);   //push newly instantiated billobject to array in tracker
}

BillObject.prototype.addAllBills = function() {
  tracker.totalBills += this.billAmount;  //update running total for all bills during each new instantiation
};

BillObject.prototype.sumTotalRentAndBill = function() {
  var sum = this.billAmount + tracker.totalRent;
  tracker.totalRentAndBill += sum;  //add this bill to rent to get total sum of rent and bill
};

BillObject.prototype.divideRentEvenly = function() {
  var divisor = 0;
  for (each in tracker.roommateNameArray) {
    divisor += 1;
  }
  tracker.totalRentAndBill /= divisor;
};

BillObject.prototype.doAllMethods = function() {
  this.addAllBills();
  this.sumTotalRentAndBill();
  this.divideRentEvenly();
};

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
  tracker.roommateNameArray.push(roomie); //push name to array SHOULD BE SEPARATE FORM!!!!!

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
var form = document.getElementById('dummyForm');   //reference form
form.addEventListener('submit', formSubmitFunction);
