// object 
// var objectName = {key : 'value of key'};
//is also called as a dictionary

var carInfo = {brand : "tata", year : 1998, model : "leamborghini"};

console.log(carInfo);


// how we use one key and multiple value

var data = {a : "Hello", b : [1,2,3,4], c : {k : [11,23,33]}};

console.log(data)
console.log(data["a"])
//output : "Hello"
console.log(data["b"][2])
//output : 3
console.log(data["c"]["k"][1]);
//output : 23

//if you want to see your complete data then
console.dir(data);