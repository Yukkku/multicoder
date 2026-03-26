export default (input: string[][]) => {
  if (/[aeiou]/.test(input[0][0])) {
    console.log("vowel");
  } else {
    console.log("consonant");
  }
};
