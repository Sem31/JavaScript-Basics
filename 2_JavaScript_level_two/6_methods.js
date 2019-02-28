

//method

var simple = {name : "sem",
	method : function() {
		// body...
		console.log("method is called!")
	}
}

//inside the object we are create the method how we run 
//see
// objectName.methodName()
// for calling the method



//this keyword
// it is use for the refrence of the give variable see

var simple1 = {name : "kamlesh",
	method : function () {
		console.log("Hello "+this.name)
	}
 }

 //run same as above