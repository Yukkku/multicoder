export default (input: string[][]) => {
  switch (input[0][0]) {
    case "Sunny":
      console.log("Cloudy");
      break;
    case "Cloudy":
      console.log("Rainy");
      break;
    case "Rainy":
      console.log("Sunny");
      break;
  }
};
