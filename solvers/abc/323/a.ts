export default (input: string[][]) => {
  if (/^(.0){8}$/.test(input[0][0])) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};
