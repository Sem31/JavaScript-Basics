// PROBLEM 1: SLEEPING IN
// output like : 
// sleepIn(false, false) → true
// sleepIn(true, false) → false
// sleepIn(false, true) → true


function sleepIn(weekday, vacation) {
    return (!weekday || vacation)
}



// PROBLEM 2: MONKEY TROUBLE
//
// Example Input and Output
//
// monkeyTrouble(true, true) → true
// monkeyTrouble(false, false) → true
// monkeyTrouble(true, false) → false

function monkeyTrouble(aSmile, bSmile) {
    //Code Goes Here
    return (aSmile && bSmile) || (!aSmile && !bSmile)
}



// PROBLEM 3: STRING TIMES
//
// Example input and output:
//
// stringTimes("Hi", 2) → "HiHi"
// stringTimes("Hi", 3) → "HiHiHi"
// stringTimes("Hi", 1) → "Hi"

function stringTimes(str, n) {
	var returnstr = "";
	var i = 0;

	while(i<n)
	{
		returnstr += str;
		i++;
	}
	return returnstr;
}


// PROBLEM 4: LUCKY SUM
//
// all number are under in 13
// Example input and output
//
// luckySum(1, 2, 3) → 6
// luckySum(1, 2, 13) → 3
// luckySum(1, 13, 3) → 1

function luckySum(a, b, c){
	if(a == 13)
	{
		return a;
	}
	if (b ==13) {
		return a;
	}
	if (c == 13) {
		return a+b;
	}
	return a+b+c;
  
}



// PROBLEM 5:

// You are driving a little too fast, and a police officer stops you. Write code to
// compute the result, encoded as an int value: 0=no ticket, 1=small ticket,
// 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61
// and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2.
// Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.
//
// Here are some example inputs and outputs:
//
// caught_speeding(60, false) → 0
// caught_speeding(65, false) → 1
// caught_speeding(65, true) → 0

function caught_speeding(speed, is_birthday){
  //Code Goes Here
  if(is_birthday)
  {
  	speed -= 5;
  }
  if(speed <= 60)
  {
  	return 0;
  }
  if(speed >=61 && speed <=80)
  {
  	return 1;
  }
  if(speed >=81)
  {
  	return 2;
  }
}
