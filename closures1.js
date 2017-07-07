//Just giving a simple example for closures

//Lexical Scoping 
	//Anything that is defined outside the function is accessible inside - Closure
	//Anything that is defined inside the function is not accessible outside

//CLOSURE
	//In order to execute a function, it will look through the variable needed

	//Explanation - So In some method, If some variable is not defined inside the method, the JS will search for that variable outside that method 

	var firstName = "yogaraj";

	function fullName(){
		var lastName = "s";
		console.log(firstName + lastName);
	}

	console.log(fullName);
