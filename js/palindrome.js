function palindrome(string){
	let stringLength = string.length;
	string = string.toLocaleLowerCase();
	
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
