var time = prompt("زمان بر حسب دقیقه:" , 30);

var timehourse = time / 60 ;

if (isNaN(timehourse)) {
	 alert("زمان شما معتبر نیست");
} else {
	alert(timehourse + "hourse");
}