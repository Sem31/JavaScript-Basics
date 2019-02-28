country = ['USA','India','japan']


// array iteration

var arr = ["A","B","C","D"]

for (var i =0; i < arr.length; i++) {
	console.log(arr[i]);
}

// also used like

for(i of arr)
{
	console.log(i)
}


//Example 

function addsome(name) {
	// body...
	console.log(name+ " is awesome!");
}

var items = ["python","django","science"];

items.forEach(addsome);
