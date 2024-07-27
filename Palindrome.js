let word = prompt("Enter word")

function palindrome() {
    let j = word.length - 1
    for (let i = 0; i < j / 2; i++) {
		if (word[i] != word[j]) {
			return "word in not palindrome"
		}
		j--
	}
    return "word in  palindrome"

}

console.log(palindrome())