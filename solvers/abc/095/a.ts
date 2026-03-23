export default (input: string[][]) => {
  console.log(
    700 + 100 * input[0][0].split("").filter((c) => c === "o").length,
  );
};
