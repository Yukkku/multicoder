export default (input: string[][]) => {
  let p = input[0].toSorted();
  if (p[0] === p[1] && p[2] === p[3]) {
    console.log(2);
  } else if (p[0] === p[1] || p[1] === p[2] || p[2] === p[3]) {
    console.log(1);
  } else {
    console.log(0);
  }
};
