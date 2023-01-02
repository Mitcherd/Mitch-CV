function btntog(){
var relationDate = fdate
var currentDate = ldate
// Take number of days
var relationDays = relationDate.slice(0,2);
var currentDays = currentDate.slice(0,2);
var numberofDays = currentDays - relationDays;

// Turn months into days
var relationMonths = relationDate.slice(3,5);
var currentMonths = currentDate.slice(3,5);
var numberofMonths = (currentMonths - relationMonths) * 30.5;


// Turn years into days
var relationYears = relationDate.slice(6,10);
var currentYears = currentDate.slice(6,10);
var numberofYears = (currentYears - relationYears) * 12;

var daysTogether = numberofDays + numberofMonths + numberofYears;

document.querySelector(".resultaat h1").textContent = "Gefeliciteerd, jullie zijn " + daysTogether + " dagen samen";
}