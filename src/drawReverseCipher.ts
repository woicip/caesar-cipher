export default function drawReverseCipher(cipher: object): object{
	const reversed = {};

	for(const word in cipher){
		reversed[cipher[word]] = word;
	}

	return reversed;
}

