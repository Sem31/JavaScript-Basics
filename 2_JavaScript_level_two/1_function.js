// run on the console of the right click by inspect



function hello() {
	console.log("your are in function Hello")	
}



function Name(name) {
	console.log("your are "+name);
}

//  factorial

function fact(num) {
	// body...
	var k = 1;
	for(var i=1;i<=num; i++)
	{
		k = i*k;
	}
	console.log("factorial "+num+" is : "+k);
}