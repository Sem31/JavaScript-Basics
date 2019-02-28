var a = prompt("enter the value a : ");
var b =  prompt("enter the value b : ");
var c =  prompt("enter the value c : ");



if (a>b && a>c){
	alert(a +" a is big")

}
else{
	if (b>a && b>c) {
		alert(b+" b is big")
	}
	else
	{
		alert(c+" c is big")
	}
}



var x = false;
var y = 40;

if(y>20)
{
	x = true;
}

console.log(x+ "kjasdfkla sdklfj")



var jam = 10;
var chees = 10;

var report = "blank"
if (jam >= 10 && chees >=10)
{
	report = "Some items are sold!"
}
else
{
	if(jam == 0 && chees == 0)
	{
		report = "Nothing to be Sold!"
	}
	else
	{
		report = "Wait for a Customer!"
	}
}

console.log(report)
