/*
var delTimeName ="Delivery time";
var avg =" AVG ";
var delTime = 30;
var delTimeMinutes =" mins."

alert (delTimeName + avg + delTime + delTimeMinutes);

*/
/*
function saySomething (num,str) {

    var add = num + str;
    alert (add)
}
saySomething (455," program to write");

*/
/*
var number1 = 7;
var number2 = 4;

var number1 = number1 + number2;

document.write (number1);
*/

/*
var food ="apple";

if (food=="apple") {
    document.write ("we ate somefood and specifically an apple")

}

else if (food == "Meat") {

}

else {
    document.write ("we ate something else")
}
*/

/*document.write ("this is the statement")

var delTime =" Delivery time"
var avg =" AVG: "
var delTimeValue = 35


document.write (delTime + avg + delTimeValue);
*/

/*var food ="meat"

if (food =="apple") {

    document.write ("we ate some apples")
}

else if (food=="meat") {
    document.write ("we ate some junk")
}

else {
    document.write ("we ate some embe")
}
*/

/*var i = 1;
while (i < 5 ) {

    document.write ("This is a while loop");

    i++;
}
*/


/*for (var i = 1; i < 5; i++ ) {

    document.write ("This is a while loop");

}
*/

/*function batting (player, distance) {

    if (distance <= 350 && distance > 0){
        document.write (player + " hit the ball");
    }
    else if (distance <= 0) {
        document.write (player + "STRUCK OUT");
    }
    else {
        document.write (player + " hit a home run")
    }
}

batting ("Steve ", 0);
*/


/*function add(x,y) {

    result = x + y;
    return result;
}

var theResult = add (5,5);
document.write (theResult); */


/*function batting (player,distance) {

    var more = player + " hit the ball " + distance + " feet";
    document.write(more);

}

batting ("Steve", 351); */


// ARRAYS

/* var roads = ['stone', 'dirt', 'cement', 'tar',];

roads[1] = "coblestone";

var roadTravelled = roads[1];

document.write(roadTravelled);

alert ('Hello Umpoto') */


/*var orc = {

    hair: "green",
    age: 26,
    stomachFull: true,
    eat: function() {
        document.write('Yum Yum')
    }
};

orc.stomachFull = false;

if (orc.stomachFull == true) {
    orc.eat();
}

else {
    document.write ('not eating')
}

*/

/*var orc = {

hair: "green",
age: 26,
stomachFull: false,

shibe: function() {
    document.write ("Yum Yum");
}

};

orc.stomachFull = false;

if (orc.stomachFull == true) {
    orc.shibe ();

}

else {

    document.write ("not eating")
}

*/

/*var newAge = orc.age + 2;
/*orc.hair = "purple";
orc.hair = 1;
orc.hair2 = "red"; */

/*document.write (newAge); */

/*var orc = {

hair: "green",
age: 26,
stomachFull: false,

};
*/

/*var hello = "Hello how are you doing?";

hello = hello.italics('doing', 'today');

document.write (hello); */

/*var number = 100;

var newNumber = 900 + Math.ceil(number/100)*1000;

document.write(newNumber);
*/


/* var todayDate = new Date ();

var useString = todayDate.toDateString();

document.write (useString);
*/



/* function changeStyle() {
 
    document.getElementById("image").src="images/cloud2.jpg";
}
function newParagraph() {
 
    var element = document.createElement("p");
     
    var main = document.getElementById("main");
     
    main.appendChild(element);
     
    var text = document.createTextNode("The Battle of Salamis was fought between an alliance of Greek cities and the Persian Empire in 480 BC.  The Greeks decisively defeated the Persian navy.");
     
    element.appendChild(text);
     
    }


function myFunc ()  {
      
    var element = document.crea


*/

/*
var today = new Date();
var Christmas = new Date("2020-12-25");
var diffMs = (Christmas - today); // milliseconds between now & Christmas
var diffDays = Math.floor(diffMs / 86400000); // days
var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
alert(diffDays + " days, " + diffHrs + " hours, " + diffMins + " minutes until Christmas 2020 =)");
*/
//var text = document.getElementById ("para1").style.color ="blue";
    //var text = document.getElementById ("para1").style.backgroundColor ="pink";
    //var text = document.getElementById ("para1").style.fontSize ="xx-large";





    /*var firstParaText = paragraph [0].innerHTML;
    var secondParaText = paragraph [1].innerHTML;
    var addThem = paragraph[2].innerHTML = firstParaText + secondParaText ;

    var hideText = paragraph [0].innerHTML = "";
    var hideText = paragraph [1].innerHTML = "";
    var addThem = paragraph[2].innerHTML = firstParaText + secondParaText ;
*/
   // for (var i = 0; i < paragraph.length; i++)

  //  paragraph[i].style.fontStyle ="italic";


  function changeText () {
 
    var parent = document.getElementById('main');
    var child = 
    child.style.color = "blue";
     
    // var child = parent.childNodes[3];
    }



