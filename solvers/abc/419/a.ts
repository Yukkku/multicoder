export default (input: string[][]) => {
  switch (input[0][0]) {
    case "red":
      console.log("SSS");
      break;
    case "blue":
      console.log("FFF");
      break;
    case "green":
      console.log("MMM");
      break;
    default:
      console.log("Unknown");
  }
};
