import generateAlphabets from "./generateAlphabets.ts";

export default function drawCipherRight(shift: number): object{
	let alphabets: Array<string>;

	if(shift > 36){
		alphabets = generateAlphabets(shift);

	} else {
		alphabets = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];
	}

	const ciphered = {};
	let nextIn = 0;

	for(let i = 0; i < alphabets.length; i++){
		const word = alphabets[i];

		if(alphabets[i+shift] !== undefined){
			ciphered[word] = alphabets[i+shift];
		} else {
			ciphered[word] = alphabets[nextIn];
			nextIn += 1;
		}
	}

	return ciphered;
}
