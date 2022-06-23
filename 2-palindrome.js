/*
  Given a string, return true if the string is a palindrome or false if it is not.

  Palindromes are strings that form the same word if it is reversed.

  It include spaces and punctuation in determining if the string is a palindrome.

  Example:

  palindrome("nitin") === true ("nitin")
  palindrome("nano") === false ("onan")
*/

// --Solution 1: Using Array.prototype.reverse() to reverse string
function palindrome(str) {
	// Reverse the given string
	const reversedStr = str.split('').reverse().join('');

	// Return boolean
	return str === reversedStr;
}

// --Solution 2: Using Array.prototype.every()
function palindrome2(str) {
	// Compare every char at index str[i] with char at index str[str.length - i]
	// str[i] === str[str.length - i]

	const strLength = str.length;

	return str.split('').every((char, idx) => char === str[strLength - (idx + 1)]);
}
// Solution 2 is not the best way, as it compares every element twice.

console.log(palindrome('nitin'));
console.log(palindrome2('nitin'));
console.log(palindrome('nano'));
console.log(palindrome2('nano'));
