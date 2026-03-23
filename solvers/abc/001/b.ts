export default (input: string[][]) => {
  const m = Number(input[0][0]);
  if (m < 100) console.log("00");
  else if (m <= 5000) console.log(String(m / 100).padStart(2, "0"));
  else if (m <= 30000) console.log(m / 1000 + 50);
  else if (m <= 70000) console.log((m - 30000) / 5000 + 80);
  else console.log(89);
};
