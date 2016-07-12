var tracker = {
  monthNameArray: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],

  billObjectArray: [],      //array of all bill obejcts
  roommateNameArray: [],
  billNameArray: [],        //array to hold chart data
  billAmountArray: [],      //array to hold chart data
  totalRentAndBills: 0,
	monthObjectArray: []
};

function Month(name){
	this.name = name;
	this.billObjectArray = [];
	this.billNameArray = [];
	this.billAmountArray = [];
	this.roommateNameArray = [];
	this.totalRentAndBills = 0;
	tracker.monthObjectArray.push(this);   //push newly instantiated billobject to array in tracker


	var BarData = {
	      labels: billNameArray,
	      datasets: [
	        {
	          data: billAmountArray,
	          backgroundColor: randColor(this.billObjectArray),
	          borderColor: '#000000',
	          borderWidth: 3,
	          hoverBackgroundColor: '#000000',
	          hoverBorderColor: '#ffffff',
	        }
	      ]
	    }


	var DoughnutData = {
		labels: this.doAllMethods(),
		datasets: [
			{
				data: this.divideRentEvenly(),
				backgroundColor: randColor(this.billObjectArray),
				borderColor: '#000000',
				borderWidth: 3,
				hoverBackgroundColor: '#000000',
				hoverBorderColor: '#ffffff',
			}
		]
	}

}

Month.prototype.addAllBills = function() {
  this.totalRentAndBills += this.billAmount;  //update running total for all bills during each new instantiation
};
Month.prototype.divideRentEvenly = function() {
  var divisor = 0;
  for (each in this.roommateNameArray) {
    divisor += 1;
  }
  return this.totalRentAndBills /= divisor;

};
Month.prototype.doAllMethods = function() {
  this.addAllBills();
  this.divideRentEvenly();
};


function BillObject(month, amount, frequency, bill) {   //bill constructor
  this.monthName = month;
  this.billAmount = parseInt(amount);
  this.billFrequency = parseInt(frequency);      //frequency inside of month
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
