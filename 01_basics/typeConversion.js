let score="33"
console.log(typeof score);
let valueInNumber= Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);// after you change the score to a number using typeof its value changes 
// for eg:; if it is a "33abs"=> NaN
 //                     33=>33
 //                     "33"=>33 
 //                     null=> 0 and befor changing it to a Number its type was "object"
 //                     UNDEFINED=> NaN and befor changing it to a Number its type was "UNDEFINED"
 //                     true=>1,false=>0
 //                     "Divya"=> NaN, coz string's VALUE cant be changed to a number
