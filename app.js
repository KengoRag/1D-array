/*
* Demonstrates array declarions by storing single variables into an array.
*
* Return	Cars (array), Cars length	
*/
function cars(){
	var car1 = "Toyota";
	var car2 = "Jeep Wrangler";
	var car3 = "Mazda";

	//Create an array declaration named cars and set each car variable as the values.
	//Print the created array
	//Print the array length
	//Return the created array and the array length
	var cars = ["Toyota", "Jeep Wrangler", "Mazda"];
	console.log(cars);
	console.log(cars.length);
	return cars;
}

console.log(cars());

/*
* Demonstrates array declarions by storing parameters into a single array.
*
* Parameters 	food (string), drink (string), dessert (string)
* Return 	An order as a complete sentence represented as a string
*/
function order(food, drink, dessert){

	//Store the parameters in an array called "order"
	//Print the array named "order"
	//Print the length of the array named "order"
	//Return the order as a complete sentence represented as a string
	var order = ["food", "drink", "dessert"];
	console.log(order);
	console.log(order.length);
	return "I'd like a " + food + " a " + drink + " and a " + dessert;
}

console.log(order("Burger", "root beer", "frosty"));

var currentClasses = [
	"Band", 
	"Biology", 
	"Chemistry", 
	"Orchestra",
	"Physical Education",
	"Physics",
	"Web Development"
];

/*
* Uses for loop to iterate through array passed as a parameter
* and replaces content at specified index within for loop
*
* Return 	classes (array, changed after iteration)
*/
function loopToChange(classes){
	//Print the parameter that is being passed through the function
	//Use a For loop to iterate through each value in the passed array
	//Return classes
	console.log(classes);
	for (i = 0; i <classes.length; i++) {
		console.log(classes[i]);
	}
	return classes;
}

console.log(loopToChange(currentClasses));

/*
* Uses array method, forEach(), to add the integer 5 to each value in the 
* passed array and sort() to sort the values in increasing order
*
* Return 	numbers (array, incremented and sorted)
*/
function arrayMethodToLoop(numbers){
	//Print the parameter that is being passed through the function
	//Use the forEach() method to add 5 to each value in the passed array
	//Return the changed array
	console.log(numbers);
		var forEachArray = [];

numbers.forEach(function(currentValue, result){
	forEachArray.push(currentValue + 5);
	forEachArray.sort();
})
	return forEachArray ;
}

console.log(arrayMethodToLoop([5, 7, 3, 4, 5]));
console.log(arrayMethodToLoop([5 + 1, 3]));

/*
* Demonstrates the array methods: sort(), indexOf(), pop(), and push()
*
* Return 	priorties (array)
*/
function moreArrayMethods(priorities){
	//Print the parameter that is being passed through the function
	console.log(priorities);
	//Use the method sort() to sort your priorities
	priorities.sort();
	//Use the method indexOf() to replace "Not Going to Class" to "Going to Class"
	var replace = priorities.indexOf("Not Goint to Class");
	replace= "Going to Class";
	//Use the method pop() to remove the item at the end of the array
	priorities.pop();
	//Use the method push() to add a priority that is important to the success of this class and don't forget to sort() them afterwards!
	priorities.push("日本語勉強");
	//Return the changed array
	return priorities;
}

console.log(moreArrayMethods(["Zero Play", "Sleeping", "HW", "Work", "School", "Planning For Future", "Not Going to Class"]));
