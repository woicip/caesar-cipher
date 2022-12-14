export default function generateAlphabets(amount: number): Array<string>{
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

