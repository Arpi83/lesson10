function myfunction(a,b) {
	return a*b;
}
var x = myfunction(5,6);
console.log(x);
console.log(myfunction(7,8));

//------------------------

function calculateDogAge(age) {
	var dogYears = 7*age;
console.log("Your doggie is " + dogYears + " years old in dog years!");

}

console.log(calculateDogAge(1));
//-----------------------------

function calculateAge(age, numPerDay) {
	var maxAge = 100;
	var totalNeeded = (numPerDay * 365) * (maxAge - age);
	var message = ("You will need " + totalNeeded + "");
	console.log(message);
}
calculateAge(33,10);
 
 //-----------------
 
 var cube = function(x) {
	 return x * x * x;
 };
 console.log(cube(5));
 console.log(cube("test"));
 
 //---------------------
 var cube = function(x) {
	 if (typeof(x) !== 'number') return false;
	 return x * x * x;
 };
 cube('test');
 console.log(cube('test'));
 
 //-----------
 var cubeStr = function(y) {
	 if (typeof(y) === 'string') return true;
	 return false;
 };
 cubeStr('test');
 console.log(cubeStr('test'));
 console.log(cubeStr(3));
 
 //-----------------------
 /*var w = 15;
 var volume = function(w, l, h) {
	 return w * l * h;
	 console.log(w); 
 };
 volume(2,3,4);
console.log(w);*/ 
 //-------------
 var volume = function(w, l, h) {
	 var area = w * l;
	 console.log("The area is " + area);
	 return area * h;
 };
  var area = 40;
 console.log("The volume is " + volume(2,3,4));
 console.log ("Outside the function, area is " + area);
 
 
 //-----------------------
 
 
 var area = 36;
 var volume = function(w, l, h) {
	  var area = w * l;
	 
	 return area * h;
 };
 
 console.log(volume(2,3,4));
 console.log(area);
 //---------------------------
 
/* function getMaxnumb(n1, n2) {
	 if(n1<n2) {
		 return n2;
	 } else {
		 return n1;
	 }
 }
console.log(getMaxnumb(5,9));
//-------------------------------

var num1 = 5;
var num2 = 9;

var  getMaxnumb = function(n1, n2) {
	 if(n1<n2) {
		 return n2;
	 } else {
		 return n1;
	 }
 }
 
 console.log(getMaxnumb(num1,num2));*/
 
 
 function doubleMax(x, y) {
	 return 2 * getMaxNum(x,y);
 };
 function getMaxNum(n1, n2) {
	 if(n1<n2) {
		 return n2;
	 } else {
		 return n1;
	 }
 };
 console.log(doubleMax(10,8));
 
 //------------------------------

 function luckyNum(a, b, c){
	 var lucky = b * getMin(a, c);
	 return lucky;
};
function getMin(n1,n2) {
	if (n1>n2){
		return n2;
	}
	else {
		return n1;
	}
}
console.log(luckyNum(5, 6.5, 2));
 