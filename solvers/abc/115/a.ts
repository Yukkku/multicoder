export default (input: string[][]) => {
  const d = Number(input[0][0]);
  if (d === 25) console.log("Christmas");
  else console.log("Christmas" + " Eve".repeat(25 - d));
};
