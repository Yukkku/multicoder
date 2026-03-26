export default (input: string[][]) => {
  const n = Number(input[0][0]);
  console.log(2 ** n - 2 * n);
};
