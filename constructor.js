var tracker = {
  monthNameArray: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],

  billObjectArray: [],      //array of all bill obejcts
  roommateNameArray: [],
  billNameArray: [],        //array to hold chart data
  billAmountArray: [],      //array to hold chart data

  totalRentAndBills: 0,
};

function BillObject(month, amount, frequency, bill) {   //bill constructor
  this.monthName = month;
  this.billAmount = amount;
  this.billFrequency = frequency;      //frequency inside of month
  this.billName = bill;

  tracker.billObjectArray.push(this);   //push newly instantiated billobject to array in tracker
}

BillObject.prototype.addAllBills = function() {
  tracker.totalRentAndBills += this.billAmount;  //update running total for all bills during each new instantiation
};

BillObject.prototype.divideRentEvenly = function() {
  var divisor = 0;
  for (each in tracker.roommateNameArray) {
    divisor += 1;
  }
  tracker.totalRentAndBills /= divisor;
};

BillObject.prototype.pushNameAndAmountToArray = function() {
  tracker.billNameArray.push(this.billName);
  tracker.billAmountArray.push(this.billAmount);  //add this bill to rent to get total sum of rent and bill
};

BillObject.prototype.doAllMethods = function() {
  this.addAllBills();
  this.divideRentEvenly();
  this.pushNameAndAmountToArray();
};
