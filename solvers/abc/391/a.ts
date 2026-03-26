export default (input: string[][]) => {
  console.log(
    input[0][0].replace(/./g, (c) => {
      if (c === "N") return "S";
      if (c === "E") return "W";
      if (c === "W") return "E";
      if (c === "S") return "N";
      throw new Error();
    }),
  );
};
