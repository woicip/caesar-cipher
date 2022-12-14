import drawCipherRight from './drawCipherRight.ts';

interface Result {
	shift_right: number,
	time: string,
	result: string
}

interface Encrypt {
	text: string,
	shiftAmount: number
}

export default function caesarEncrypt(data: Encrypt): Result{
	const startTime: any = new Date();
	const ciphered: object = drawCipherRight(data.shiftAmount);
	const message: string = data.text.toLowerCase();
	let result = "";

	for(let i = 0; i < data.text.length; i++){
		const shifted = ciphered[message[i]];
		if(shifted !== undefined){
			result += shifted;
		} else {
			result += message[i]
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
