  
  
  var moadel = prompt("معدل خود را وارد کنید:", 0)
  
  /*
  switch (moadel) {
	  case "18":
	  case "19":
	  case "20":
		alert('A')
		break
	  case "15":
	  case "16":
	  case "17":
		alert('B')
		break
	  case "14":
	  case "13":
	  case "12":
		alert('C')
		break
	  default :
		alert("شما مشروط هستید")
  }
  */
  
  if (moadel==18 || moadel == 19 || moadel == 20){
	  alert('A');
  } 
  if (moadel==15 || moadel == 16 || moadel == 17){
	  alert('B');
  }
  if (moadel==12 || moadel == 13 || moadel == 14){
	  alert('C');
  } else {
	  alert('شما مشروط هستید');
  }