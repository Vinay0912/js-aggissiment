console.log("ABOUT STRING METHODS");
var name="murthy is a bad boy and bad at all is works ";
console.log(name.replace("bad","good"));
var name1="murthy is a bad boy and bad at all is works"
console.log(name1.replace(/bad/g,"good"));
console.log(name1.slice(8,20));
//console.log(name.splice(0,4));
var b=name.replace(/ /g,"");
// lenght of the variable name with out count of space
console.log("length of variable name without space:",b.length)


console.log("ABOUT ARRAY METHODS");
var fame=["vinay",2,3,4,5];

console.log(fame[0]);
console.log(fame.splice(0,2));
var newarr=fame.length
console.log("array length:",newarr);
 var new2=fame.splice(0,2)
 console.log("after splice:",new2);
 