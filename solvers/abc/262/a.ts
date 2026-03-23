export default (input: string[][]) => {
  const y = Number(input[0][0]);
  console.log(Math.ceil((y - 2) / 4) * 4 + 2);
};
