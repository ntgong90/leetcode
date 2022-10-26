//solution - flashed
/**
 * @param {string} s
 * @return {boolean}
 */
 let isPalindrome = function(s) {
	let res = s.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();
	return res == res.split('').reverse().join('')
 };;