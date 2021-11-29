/* یک زمان را بر حسب دقیقه از کاربر دریافت کرده و آن را به ساعت تبدیل کنید و نمایش دهید*/


var time = prompt("زمان بر حسب دقیقه:" , 30);

var timehourse = time / 60 ;

if (isNaN(timehourse)) {
	 alert("زمان شما معتبر نیست");
} else {
	alert(timehourse + "hourse");
}