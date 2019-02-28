var n=5;

for(var i=1;i<=10;i++)
{
	var k = i*n;
	console.log("Table "+n+" is : "+k);
}



// For Loops

for(var i=0; i<5; i++)
{
	console.log("Number is : "+i);
}


var word = "ABCDEFGH";

for(var i=0;i<=word.length; i++)
{
	console.log(word[i]);
}


var word = "ABABABABAB";

for(var i=0;i<=word.length; i = i+2)
{
	console.log("Shows the repeatation of the 'B' : "+word[i]);
}