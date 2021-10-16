 function repeatStr(string, times) {
   if (times > 0 && (!isNaN(times))) {
     return string.repeat(times);
   } else
    
     return "";
 }
console.log (repeatStr("pinkey", 3));
