export default (input: string[][]) => {
  let r = 0;
  for (const c of input[0][0]) r += c === "+" ? 1 : -1;
  console.log(r);
};
