export default (input: string[][]) => {
  switch (input[0][0]) {
    case "A":
      console.log("T");
      break;
    case "C":
      console.log("G");
      break;
    case "G":
      console.log("C");
      break;
    case "T":
      console.log("A");
      break;
  }
};
