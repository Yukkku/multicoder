export default (input: string[][]) => {
  console.log(input[0][0].replaceAll(/[aiueo]/g, ""));
};
