function  CaesarCipher(str){
  let result = "";

  for (let i = 0; i < str.length; i++){
    let asciiNum = str[i].charCodeAt();

    if (asciiNum>= 65 && asciiNum <= 77) {
      result += String.fromCharCode(asciiNum + 13);
     
    } else if (asciiNum >= 78 && asciiNum <= 90) {
      result += String.fromCharCode(asciiNum - 13);
    } else {
      result += str[i];
    }
        
  }
  return result;
}

console.log(CaesarCipher("A"));