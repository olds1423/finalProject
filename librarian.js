// Global variables
var allMonths = [];
var billOptions = ["Placeholder"];
// Constructors
function BillObject(month, amount, frequency, bill) {   //bill constructor
  this.billMonthName = month || '';
  this.billAmount = parseInt(amount) || 0;
  this.billFrequency = parseInt(frequency) || 0;      //frequency inside of month
  this.billName = bill || '';



}

BillObject.prototype.findAndUpdateMonth = function () {
  for (var i = 0; i < allMonths.length; i++) {
    if (allMonths[i].monthName === this.billMonthName) {
      allMonths[i].billObjectArray.push(this);
      allMonths[i].billNameArray.push(this.billName);
      allMonths[i].billAmountArray.push(this.billAmount);
      allMonths[i].grandTotal += this.billAmount;

			console.log(allMonths[i] + ': ' + allMonths[i].grandTotal);
    }
  }
};

function Month(name){

  this.monthName = name;
  this.billObjectArray = [];
  this.billNameArray = [];
  this.billAmountArray = [];
  this.roommateNameArray = [];
  this.grandTotal = 0;
  allMonths.push(this);   //push newly instantiated billobject to array in tracker
}

// Helper Functions
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

  pushToLocalStorage: function() {


    var tempBillObjArray = [];
    var allRoommates = {

    }
    for (var i = 0; i < allMonths.length; i++) {
      var billObjArr = allMonths[i].billObjectArray;
      for (var j = 0; j < allMonths[i].billObjectArray.length; j++) {
        tempBillObjArray.push(billObjArr[j]);
      }
    }
    var strAllMonthsBillObjects = JSON.stringify(tempBillObjArray);
    localStorage.setItem("storedBills", strAllMonthsBillObjects);

    var strBillOptions = JSON.stringify(billOptions);
    localStorage.setItem("storedBillOptions", strBillOptions);


  },

  doAllMethods: function (object){
    this.addAllBills(object);
    this.divideRentEvenly(object);
    return object.totalRentAndBills;


  },
};

function startUpCheckStorage() {

  var newBill = [];
  if (localStorage.storedBills) {
    var parsedBills = JSON.parse(localStorage.getItem('storedBills'));
    for (var i = 0; i < parsedBills.length; i++){
			var currentBill = new BillObject(parsedBills[i].billMonthName, parsedBills[i].billAmount, parsedBills[i].billFrequency, parsedBills[i].billName);
			newBill.push(currentBill);
			// new BillObject(each.billMonthName, each.billAmount, each.billFrequency, each.billName)
    }

    for (var j = 0; j < newBill.length; j++) {

      newBill[j].findAndUpdateMonth();
    }
  }
  if (localStorage.storedBills) {


    for (var i = 0; i < allMonths.length; i++) {
      for (var j = 0; j < allMonths[i].billNameArray.length; j++) {

        var currentObject = allMonths[i].billObjectArray[j];
				var billSelector = document.getElementById('selectedBill')
      	var billOption = document.createElement('option');

      	billOption.value = currentObject.billName;
      	billOption.textContent = currentObject.billName + " - " + currentObject.billMonthName;
      	billOption.id = currentObject.billName;
      	billSelector.appendChild(billOption);


        var currentBillsList = document.getElementById("billList");
        var newListItem = document.createElement("li");
        newListItem.textContent = currentObject.billName + " $" + currentObject.billAmount + " - " + currentObject.billMonthName;
        newListItem.id = currentObject.billName + '-li';
        currentBillsList.appendChild(newListItem);
      }
    }
  }
}

function makeDoughnutChart(object, placement) {

	var dataArray = [];
  for (var i = 0; i < object.billObjectArray.length; i++) {
    dataArray[i] = object.billAmountArray[i] / object.roommateNameArray.length;
  }
  var DoughnutData = {
    labels: object.billNameArray,
    datasets: [
      {
        data: dataArray,
        backgroundColor: randColor(object.billObjectArray),
        borderColor: '#000000',
        borderWidth: 3,
        hoverBackgroundColor: '#000000',
        hoverBorderColor: '#ffffff',
      }
    ]
  };

  var canvas = document.getElementById('graph' + placement);
  var ctx = canvas.getContext('2d');

  var chart = new Chart(ctx, {
    type: 'doughnut',
    data: DoughnutData
  });
}

function makeBarChart(object, placement) {
  var BarData = {
    labels: object.billNameArray,
    datasets: [
      {
        data: object.billAmountArray,
        backgroundColor: randColor(object.billObjectArray),
        borderColor: '#000000',
        borderWidth: 3,
        hoverBackgroundColor: '#000000',
        hoverBorderColor: '#ffffff',
      }
    ]
  };

  var canvas = document.getElementById('graph' + placement);
  var ctx = canvas.getContext('2d');

  var chart = new Chart(ctx, {
    type: 'bar',
    data: BarData
  });
}


// Object Declarations
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
