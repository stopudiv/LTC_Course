function checkbrackets(string){
        let count1 = (string.split("(").length -1);
        let count2 = (string.split(")").length -1);
        let stringLength = string.length;
        if (string[0] != "(") {
          return false;
          }
        else if (string.indexOf("(") >=0 & count1 === count2) {
          return  true;
          }
        return false;
}

console.log(checkbrackets("(()())"))
console.log(checkbrackets("((()()))"))
console.log(checkbrackets("()))"))
console.log(checkbrackets(")("))
console.log(checkbrackets("()"))

