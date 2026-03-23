export default (input: string[][]) => {
  const a = Number(input[0][0][0]);
  const b = Number(input[0][0][2]);
  if (b === 8) {
    console.log(`${a + 1}-1`);
  } else {
    console.log(`${a}-${b + 1}`);
  }
};
