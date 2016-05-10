/*
  Chapter1 : Functions & Declarations
There are 2 ways to declare a Function
1. Function Declaration
2. Definition Expression
They differ the way they are invoked
*/


//Function Declaration
function plus(a,b) {
  var sum = a + b;
  return sum;
};

console.log(plus (2,4));


//Definition Expression or Function Literal or Anonymous Function
var iplus = function(a,b){
  var sum = a + b;
  return sum;
};
console.log(iplus(5,9));

//Advantages of Definition Expression is : Can execute immediately by putting paranthesis and passing args
var eplus = function(a,b){
  var sum = a+b;
  console.log(sum);
}(2,7);


/*
Chapter2 - Invoking a function
There are 4 ways to invoke a function
1. Traditional Functions
2. Methods
3. Constructors
4. Call & Apply


Invoking as Traditional Functions :
few important Properties of Functions
1. Receive argumants & this
2. invoking stops current execution
3. Traditional invocation - dont call a function as a property of an object
4. this parameter - with traditional invocation function gets a global this parameter

*/

function aplus (a,b){
  //return is also a function taking 3 paramters here
  return(
    console.log(a+b),
    console.log(this),
    console.log(arguments)
  )
}
aplus(3,4);

//Need to be careful here because traditional way of invoking will get us the window object(global) when 'this' is used.
//This is like the entire browser is with us


/*
Invoking as Methods :
Method is nothing more than a function assigned as a property of an object
Here plus is a method
*/
console.log('delimiter');

var calc = {
  status : "Awesome",
  plus : function(a,b){
    return (
      console.log(this),
      console.log(a+b),
      console.log(arguments),
      console.log(this.status)
    )
  }
};

calc.plus(2,5);

/*
Notice that instead of returning global object it has returned object that has the function
By using this attribute i was able to query the pamater 'status' in of the object.
advantage of calling functions as methods. the 'this' attribute can get the value of the object
this argument points to the object in which the function is in
binding of 'this' happens at invocation time. hence this is reusable
*/



/*
Invoking as a Constructor
Use function keyword to create a copy of an object with variables from functions as its properties
creating your own objects through functions. functions become constructor
*/
var Dog = function(){
  var name, breed;
  console.dir(this);
}

oneDog = new Dog;
oneDog.name = "fluffy";
oneDog.breed = "bomber";

twoDog = new Dog;
twoDog.name = "duffy";
twoDog.breed = "shady";

/*
here you can see new creates a new instance of the object
'this' argument points to the instance of the object
here function is special because it creates an object
*/

/*
expanding the functionality of a constructor by adding a method. this is achieved through prototype.
expanding objects through prototype */

var Cat = function(){
  var name;
}

var Speak = function(saywhat){
  console.log(saywhat);
}
Cat.prototype.speak = Speak;

var Pig = function(){
  var name;
}
Pig.prototype.speak = Speak;

oneCat = new Cat;
oneCat.name = "dumma";
oneCat.speak("purrr");

onePig = new Pig;
onePig.name = "Filthy";
onePig.speak('oink');



/* Call & Apply
This invokation method is called indirect invocation
This executes function in a different way. Gives better control of 'this' argument
we can define the value of 'this' argument
*/

var iSpeak = function(saywhat){
    console.log(saywhat);
    console.log(this);
}

iSpeak("newo");

/*
There this gives the global window object which is useless.it would be good if we get an object and do a dot on it. this is what Call&Apply is all about
You can control 'this' and pass an argument also. 
Call & Apply take 2 parameters. what you want value of 'this' to be inside the function and what arguments to pass to the function.
Call passes a value and Apply passes an array
*/


var uSpeak = function(saywhat){
    console.log(this.normal);
    console.log(this.abnormal);
    
}

var isaysomething = {normal : "woooff", abnormal : "druooff"};
uSpeak.call(isaysomething);

//we can also do something like this. pass both isaysomething and individual variable.
//you can see has the ability to control 'this' and pass something as the parameter

var xSpeak = function(what){
    console.log(what);
    console.log(this.normal);
}
xSpeak.call(isaysomething,isaysomething.abnormal);


//usage of apply. with apply instead of passing an object or an element you can pass an array
//here you can see that instead of the object we can pass an array and still control the 'this' parameter
//the array gets collected in 'what' variable
xSpeak.apply(isaysomething,["muhaha"]);

//Summary 
//Call & Apply gives power to bind objects to functions and include them as the 'this' parameter



/* 
Using arguments parameter 
sometimes you want functions to accept as many arguments without hardcodign the number of arguments.
You sepacial object called 'argument' parameter. This holds the list of all the parameters passed as arguments
Is an array like object.This looks like an array and does things like an array
you can get the argumemts length by calling arguments.length
we can index them like an array
we can loop through
cannot use array methods like pop, push etc.
*/

//this is a function lieteral so wont have a name
var iplus = function(){
    var sum = 0;
    for(i=0;i<arguments.length;i++){
        sum += arguments[i];
    }
    console.log(sum);
}

iplus(1,2,13,1,25,6);
//you can add as many as possible. it just accepts as many arguments as possible


/*
The return statement 
this is basic which i know
*/



//Do Social media navigation challenge





/* 
Chapter 3 - Using Functions
*/













