export default (input: string[][]) => {
  const n = Number(input[0][0].slice(3));
  if (1 <= n && n <= 349 && n !== 316) console.log("Yes");
  else console.log("No");
};
