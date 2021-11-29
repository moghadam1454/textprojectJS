
var year =  prompt("سال تولد:" , 1373);

var age = 1400 - year;

if(isNaN(age)) {
	alert("تاریخ تولد شما معتبر نیست.");
} else {
	alert(age);
}
