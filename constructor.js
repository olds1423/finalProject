var allMonths = [];

function Month(name){
  this.monthName = name;
  this.billObjectArray = [];
  this.billNameArray = [];
  this.billAmountArray = [];
  this.roommateNameArray = [];
  this.grandTotal = 0;
  allMonths.push(this);   //push newly instantiated billobject to array in tracker
}

Month.prototype.addAllBills = function() {

};

var helperFunctions = {

  addAllBills: function (object){
    object.totalRentAndBills += object.billAmount;  //update running total for all bills during each new instantiation
  },

  divideRentEvenly: function (object){
    var divisor = 0;
    for (each in object.roommateNameArray) {
      divisor += 1;
    }
    return this.totalRentAndBills /= divisor;
  },

  doAllMethods: function (object){
    this.addAllBills(object);
    this.divideRentEvenly(object);
    return object.totalRentAndBills;
  },
}

var january = new Month('january');
var february = new Month('february');
var march = new Month('march');
var april = new Month('april');
var may = new Month('may');
var june = new Month('june');
var july = new Month('july');
var august = new Month('august');
var september = new Month('september');
var october = new Month('october');
var november = new Month('november');
var december = new Month('december');


function BillObject(month, amount, frequency, bill) {   //bill constructor
  this.billMonthName = month;
  this.billAmount = parseInt(amount);
  this.billFrequency = parseInt(frequency);      //frequency inside of month
  this.billName = bill;
}

BillObject.prototype.findAndUpdateMonth = function () {
  for (var i = 0; i < allMonths.length; i++) {
    if (allMonths[i].monthName === this.billMonthName) {
      allMonths[i].billObjectArray.push(this);
      allMonths[i].billNameArray.push(this.billName);
      allMonths[i].billAmountArray.push(this.billAmount);
      allMonths[i].grandTotal += this.billAmount;
    }
  }
};

//end
