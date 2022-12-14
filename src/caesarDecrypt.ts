import drawCipherRight from "./drawCipherRight.ts";
import drawReverseCipher from "./drawReverseCipher.ts";

interface Result {
	shift_right: number,
	time: string,
	result: string
}

interface Decrypt {
	text: string,
	shiftAmount: number
}

export default function caesarDecrypt(data: Decrypt): Result{
	const startTime: any = new Date();
	const message: string = data.text.toLowerCase();
	const cipher: object = drawCipherRight(data.shiftAmount);
	const reversedCipher: object = drawReverseCipher(cipher);
	let result = "";

	for(let i = 0; i < message.length; i++){
		const word = message[i];
		if(reversedCipher[word] !== undefined){
			result += `${reversedCipher[word]}`
		} else {
			result += word;
		}
	}

	const stopTime: any = new Date();
	const second = (stopTime - startTime)/1000;

	return {
		shift_right: data.shiftAmount,
		time: `${second * 1000}ms`,
		result
	}
};
