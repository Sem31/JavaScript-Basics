
// Problem 1 ... Print 'Hello' 5 times using while and for loops
var n = 1;

while(n<=5)
{
	console.log("Hello By While loop!");
	n++;
}


for (var i = 0; i < 5; i++)
{
	console.log("Hello By For Loop!");
}


// Problem 2 ... Print 'odd Number form 1-25' using the while and for loops

var j = 1;

while(j <= 25)
{
	if(j%2 == 1)
	{
		console.log("that is Odd one : "+j);
	}
	j++;
}


for(var l = 1; l<=25;l++)
{
	if(l%2 == 1)
	{
		console.log("that is Odd one : "+l);
	}
}