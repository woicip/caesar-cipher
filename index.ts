//const shift = 1;
//const alphabets = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

//const ciphered = {};
//let nextIn = 0;

interface Encrypt {
	text: string,
	shiftAmount: number
}

interface Result {
	shift_right: number,
	time: string,
	result: string
}

interface Decrypt {
	text: string,
	shiftAmount: number
}

function generateAlphabets(amount: number): Array<string>{
    const alphabets = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0' ];

	let nextIn = 0;
	const result = [];

	for(let i = 0; i < amount * 2; i++){
		if(alphabets[i] !== undefined){
			result.push(alphabets[i]);
		} else {
			result.push(alphabets[nextIn]);
			if(nextIn < 35){
				nextIn++
			} else {
				nextIn = 0;
			}
		}
	}

	return result;
}

function drawReverseCipher(cipher: object): object{
	const reversed = {};

	for(const word in cipher){
		reversed[cipher[word]] = word;
	}

	return reversed;
}

function drawCipherRight(shift: number): object{
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

function caesarEncrypt(data: Encrypt): Result{
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

function caesarDecrypt(data: Decrypt): Result{
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

//const encrypt: Result = caesarEncrypt({ 
//	text: "beliau ini kocak gaming gaes",
//	shiftAmount: 39
//});
//console.log(encrypt);

for(let i = 1; i <= 50; i++){
	const decrypt: Result = caesarDecrypt({
		text: "dyvayv9 f6b dr5a a6 b5t6cv9 ayv 0vt9va0 6w ayv b5zcv90v, 69 f6b 1b0a dr5a a6 7b90bv r tr9vv9 z5 ayv ih0a tv5ab9f, sr0zt t647bav9 796x9r44z5x z0 r5 v00v5azr3 02z33 a6 3vr95 - 0av7yv5 yrd2z5x",
		shiftAmount: i
	});

	console.log(decrypt);
}

