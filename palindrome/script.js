


// let array = Array.from(str);


// str.split("")  // ["p", "i", "n", "k", "e", "y"]

// str.split("").reverse()  // ["y", "e", "k", "n", "i", "p
// "]

// str.split("").reverse().join("") // " yeknip"

function reverseStr(str) {
  let arr= str.split("").reverse().join("");
  let forward = str.split("").join("");
  if (forward == arr) {
    return true
  } else {
    return false;
  }
}
 console.log(reverseStr("racecar"))
  

  


