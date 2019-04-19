function palindrome(string){
	console.log("["+string+"]");
        string = string.toLocaleLowerCase();        
	function killPunc(str) { 
 		if(str.length==0){return ""} 
 		let ch=str[0]; 
 		if ("\"'=!<>(){}[]/\\,.? ;:#".indexOf(ch)==-1){ 
  			return(ch+killPunc(str.slice(1))) 
		 } else {
  			return (killPunc(str.slice(1))) 
 			} 
		}
	string = killPunc(string);
 	let stringLength = string.length;
	if (stringLength === 0 || stringLength ===1) {
		return true;
	} 
	if (string[0] === string[stringLength -1]){
		return palindrome(string.slice(1,  stringLength -1));
	}
		return false;
	};
console.log(palindrome("aba"))
console.log(palindrome('Дима'));
console.log(palindrome('Do geese see god?'));
console.log(palindrome('ABBA'));
console.log(palindrome('Dennis and Edna sinned.'));
console.log(palindrome('Dennis and Alice sinned.'));
console.log(palindrome('А# Роза,, упала?? на лапу Азора<'));
console.log(palindrome("Madam, I'm Adam"));
