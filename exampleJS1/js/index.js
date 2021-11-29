/* برنامه ای بنویسید که 2 عدد از کاربر دریافت کرده و عملیات ضرب ، تقسیم ، جمع یا تفریق  را روی آن ها پیاده سازی کند*/
		var number1 = prompt("لطفا عدد اول را وارد کنید:")
		
		var number2 = prompt("لطفا عدد دوم را وارد کنید:")
		
		var number1TypeNumber =+number1
		
		var number2TypeNumber =+number2

		var jamResult = number1TypeNumber + number2TypeNumber

		var tafriqResult = number1TypeNumber - number2TypeNumber
		
		var taqsimResult = number1TypeNumber / number2TypeNumber

		var zarbResult = number1TypeNumber * number2TypeNumber

		alert(zarbResult);