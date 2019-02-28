//problem 1

// Add a method called nameLength that prints out the
// length of the employees name to the console.

var employees = {
	name : "kamlesh",
	age : 36,
	work : "programmer",
	nameLength : function() {
		// body...
		var name1 = this.name
		console.log(name1.length)
	}
};



// Problem 2

// Write program that will create an Alert in the browser of each of the
// object's values for the key value pairs. For example, it should alert:

// Name is John Smith, Job is Programmer, Age is 31.


var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  report : function(){
  	alert("Name is "+this.name+" ,Job is " +this.job+ " ,age is "+this.age)
  }
}



///////////////////
// PROBLEM 3 /////
/////////////////

// Given the object:
var employee = {
  name: "John Smith kamlesh",
  job: "Programmer",
  age: 31,
  lastName : function(){
  	var name1 = this.name
  	console.log(name1.split(" ")[2]) // space is used for split the name into to part by the space that's why 
  }
}

// Add a method called lastName that prints
// out the employee's last name to the console.

// You will need to figure out how to split a string to an array.
// Hint: http://www.w3schools.com/jsref/jsref_split.asp

