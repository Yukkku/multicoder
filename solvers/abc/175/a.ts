export default (input: string[][]) => {
  if (input[0][0].includes("RRR")) {
    console.log(3);
  } else if (input[0][0].includes("RR")) {
    console.log(2);
  } else if (input[0][0].includes("R")) {
    console.log(1);
  } else {
    console.log(0);
  }
};
