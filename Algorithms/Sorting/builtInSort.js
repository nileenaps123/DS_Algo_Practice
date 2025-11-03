const numberArray = [40, 1, 5, 200];

function compareNumbers(a, b) {
  console.log("a",a,"b",b)  
  return a - b;
}





/* 
 a 1 b 40
 a 5 b 40
 a 5 b 1
 a 200 b 5
 a 200 b 40
9 (4) [1, 5, 40, 200]


*/

console.log(numberArray.sort(compareNumbers)); // [1, 5, 40, 200]