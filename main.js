let palindromeAnwser = document.querySelectorAll('p');
let palindromeOuter = document.getElementById('palindromeOuter');
let userText = document.getElementById('userText');

animationOn = () => {
	palindromeOuter.style.animationName = 'hover';
	palindromeOuter.style.animationDuration = '1s';
	palindromeOuter.style.animationIterationCount = '1';
	palindromeOuter.style.animationFillMode = 'forwards';
};

animationOff = () => {
	palindromeOuter.style.animationName = 'none';
};

checkWord = () => {
	let storedWord = userText.value;
	let reverseWord = '';
	for (let i = storedWord.length - 1; i >= 0; i--) {
		reverseWord += storedWord[i];
	}

	if (storedWord === reverseWord) {
		palindromeAnwser[0].style.display = 'inline-block';
		palindromeAnwser[1].style.display = 'none';
	} else {
		palindromeAnwser[0].style.display = 'none';
		palindromeAnwser[1].style.display = 'inline-block';
	}
	return (userText.value = '');
};
