function palindrome(string){
console.log("["+string+"]");
	let stringLength = string.length;
	string = string.toLocaleLowerCase();
	
	if (stringLength === 0 || stringLength ===1) {
		return true;
	}
 	else if ((string[0] == "," || string[0] == "." || string[0] == "?" || string[0] == "#" || string[0] == "<" || string[0] == "'" || string[0] == " ")&&(string[stringLength-1] == "," || 
string[stringLength-1] == "." || string[stringLength-1] =="?" || string[stringLength-1] == "#" || string[stringLength-1] =="<" || 
string[stringLength-1] == "'" || string[stringLength-1] == " ")){
	 	if (string[1] === string[stringLength-2]){
			return palindrome(string.slice(2, stringLength-2));
		}
	}
	else if (string[0] == "," || string[0] == "." || string[0] == "?" || string[0] == "#" || string[0] == "<" || string[0] == "'" || string[0] == " "){
		if (string[1] === string[stringLength-1]){
			return palindrome(string.slice(2, stringLength -1));
		}
	} 
	else if (string[stringLength-1] == "," || string[stringLength-1] == "." || string[stringLength-1] =="?" || string[stringLength-1] == "#" || string[stringLength-1] =="<" || string[stringLength-1] == "'" || string[stringLength-1] == ' '){
		if (string[0] === string[stringLength -2]){
			return palindrome(string.slice(1, stringLength-2));
		}
	}
	else if (string[0] === string[stringLength -1]){
		return palindrome(string.slice(1, stringLength-1));
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

