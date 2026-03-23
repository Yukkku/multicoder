export default (input: string[][]) => {
  switch (input[0][0]) {
    case "Monday":
      console.log(5);
      break;
    case "Tuesday":
      console.log(4);
      break;
    case "Wednesday":
      console.log(3);
      break;
    case "Thursday":
      console.log(2);
      break;
    case "Friday":
      console.log(1);
      break;
    case "Saturday":
      console.log(0);
      break;
    case "Sunday":
      console.log(0);
      break;
  }
};
