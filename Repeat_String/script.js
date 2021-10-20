 function repeatStr(string, times) {
   return (times > 0 && (!isNaN(times))) ? string + repeatStr(string, times - 1) : "";
 }

//Arrow Function
//const repeatStr = (string, times) => (times > 0 && (!isNaN(times))) ? string + repeatStr(string, times - 1) : "";

console.log (repeatStr("pinkey", 3));
