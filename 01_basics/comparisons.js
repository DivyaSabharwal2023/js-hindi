console.log("2">1)//returns true as js automatically casts string 2 as number coz comparison has to be made
console.log("02">1)// returns true too

//here the reason is that equality check == and comparisons <, > ,>=,<= are treated differently.
console.log(null>0)//comparison is converting null to a number; treating it as 0 so it is false
console.log(null==0)//equality check is treated differently in JS SO it is false.
console.log(null>=0)// comparison is converting null to a number , so it is true 