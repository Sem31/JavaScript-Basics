var fname = prompt("Enter your first Name :");
var lname = prompt("Enter your last Name :");
var age = prompt("Enter your age b/w (20 to 30) :");
var weight = prompt("Enter your weight in lbs :");
alert("Thank you for give me your information!")

var result = false;

//logic first name

if (fname === "kmalesh") {
	result = true;
}

//logic last name

if (lname === "prajapat") {
	result = true;
}

// logic of age

if(age >=20 && age <=30)
{
	result = true;
}

//logic of weight

if (weight >=50) {
	result = true;
}

if (result) {
	console.log("welcome bro are you feeling well")
}
else{
	console.log("your are a hacker!");
}
