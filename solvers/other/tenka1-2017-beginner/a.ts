export default (input:string[][]) => {
	console.log(input[0][0].split('').filter(x => x === '1').length);
};
