export default (input: string[][]) => {
  if (input[0][0].indexOf("R") < input[0][0].indexOf("M")) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};
