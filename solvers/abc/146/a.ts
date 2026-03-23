export default (input: string[][]) => {
  switch (input[0][0]) {
    case "SUN":
      console.log(7);
      break;
    case "MON":
      console.log(6);
      break;
    case "TUE":
      console.log(5);
      break;
    case "WED":
      console.log(4);
      break;
    case "THU":
      console.log(3);
      break;
    case "FRI":
      console.log(2);
      break;
    case "SAT":
      console.log(1);
      break;
  }
};
