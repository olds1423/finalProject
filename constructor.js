var tracker = {
  monthNameArray: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],

  billObjectArray: [],      //array of all bill obejcts
  roommateNameArray: [],
  billNameArray: [],        //array to hold chart data
  billAmountArray: [],      //array to hold chart data
  totalRentAndBills: 0,
	monthObjectArray:[]
};

var allMonths = [];

function Month(name){
  this.monthName = name;
  this.billObjectArray = [];
  this.billNameArray = [];
  this.billAmountArray = [];
  this.roommateNameArray = [];
  this.totalRentAndBills = 0;
  allMonths.push(this);   //push newly instantiated billobject to array in tracker
  console.log("working?");

	// var BarData = {
	//       labels: this.billNameArray,
	//       datasets: [
	//         {
	//           data: this.billAmountArray,
	//           backgroundColor: randColor(this.billObjectArray),
	//           borderColor: '#000000',
	//           borderWidth: 3,
	//           hoverBackgroundColor: '#000000',
	//           hoverBorderColor: '#ffffff',
	//         }
	//       ]
	//     }
  //
  //
	// var DoughnutData = {
	// 	labels: this.doAllMethods(),
	// 	datasets: [
	// 		{
	// 			data: this.divideRentEvenly(),
	// 			backgroundColor: randColor(this.billObjectArray),
	// 			borderColor: '#000000',
	// 			borderWidth: 3,
	// 			hoverBackgroundColor: '#000000',
	// 			hoverBorderColor: '#ffffff',
	// 		}
	// 	]
	// }

}

// To-Do: Rstructure these
function addAllBills(object){
  object.totalRentAndBills += object.billAmount;  //update running total for all bills during each new instantiation
};
function divideRentEvenly(object){
  var divisor = 0;
  for (each in object.roommateNameArray) {
    divisor += 1;
  }
  return this.totalRentAndBills /= divisor;

};
function doAllMethods(object){
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

BillObject.prototype.findMyMonth = function () {
  for (var i = 0; i < allMonths.length; i++) {
    allMonths[i].billObjectArray.push(this.BillObject);
    allMonths[i].billAmountArray.push(this.billAmount);
    allMonths[i].billName.push(this.billNameArray);
  };

BillObject.prototype.doAllMethods = function() {
  this.addAllBills();
  this.divideRentEvenly();
  this.pushNameAndAmountToArray();
};



//Months:

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

//end
