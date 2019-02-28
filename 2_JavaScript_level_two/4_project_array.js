
var arr = []


// add name
function addNew() {
	// body...

	var newName = prompt("what name you add :");
	arr.push(newName);
}

// remove name

function remove() {
	// body...
	var reName = prompt("what name you want to remove : ");
	var index = arr.indexOf(reName);
	arr.splice(index,1)
}


//display arr

function display() {
	// body...
	console.log(arr)
}



var start = prompt("would you like to start array app say  y/n:");
var req = "empty";

if(start === 'y')
{
	while(req !== "quit")
	{
		req = prompt("Please select an option : add,remove,display,quit ");
		if(req === 'add')
		{
			addNew()
		}
		else if(req === 'remove')
		{
			remove()
		}
		else if(req === 'display')
		{
			display()
		}		
	}
}

alert("Thank you for using this app! Please refresh the page to reuse")