const input = (await Bun.stdin.text())
  .trim()
  .split("\n")
  .map((line) => line.trim().split(/\s+/));

import abc048a from "./solvers/abc/048/a";
import abc051a from "./solvers/abc/051/a";
import tenka1_2017a from "./solvers/other/tenka1-2017-beginner/a";
import abc085a from "./solvers/abc/085/a";
import abc095a from "./solvers/abc/095/a";
import abc101a from "./solvers/abc/101/a";
import abc115a from "./solvers/abc/115/a";
import abc122a from "./solvers/abc/122/a";
import abc141a from "./solvers/abc/141/a";
import abc146a from "./solvers/abc/146/a";
import abc166a from "./solvers/abc/166/a";
import abc175a from "./solvers/abc/175/a";
import abc178a from "./solvers/abc/178/a";
import abc232a_abc389a from "./solvers/multi/abc232a_abc389a";
import abc247a from "./solvers/abc/247/a";
import abc262a from "./solvers/abc/262/a";
import abc267a_arc012a from "./solvers/multi/abc267a_arc012a";
import abc323a from "./solvers/abc/323/a";
import abc350a from "./solvers/abc/350/a";
import abc360a from "./solvers/abc/360/a";
import abc422a from "./solvers/abc/422/a";

if (input.length === 1) {
  if (input[0].length === 1) {
    const sym = input[0][0];
    if (/^[a-z]{5},[a-z]{7},[a-z]{5}$/.test(sym)) abc051a(input);
    else if (/^2017\/01\/(0[1-9]|[12]\d|3[01])$/.test(sym)) abc085a(input);
    else if (/^[ox]{3}$/.test(sym)) abc095a(input);
    else if (/^[+-]{4}$/.test(sym)) abc101a(input);
    else if (/^[ACGT]$/.test(sym)) abc122a(input);
    else if (/^(Sunny|Cloudy|Rainy)$/.test(sym)) abc141a(input);
    else if (/^(SUN|MON|TUE|WED|THU|FRI|SAT)$/.test(sym)) abc146a(input);
    else if (/^A[BR]C$/.test(sym)) abc166a(input);
    else if (/^[SR]{3}$/.test(sym)) abc175a(input);
    else if (/^\dx\d$/.test(sym)) abc232a_abc389a(input);
    else if (/^(Mon|Thues|Wednes|Thurs|Fri|Satur|Sun)day$/.test(sym))
      abc267a_arc012a(input);
    else if (/^ABC\d{3}$/.test(sym)) abc350a(input);
    else if (/^(RMS|RSM|MRS|MSR|SRM|SMR)$/.test(sym)) abc360a(input);
    else if (/^\d-\d$/.test(sym)) abc422a(input);
    else if (/^[01]{4}$/.test(sym)) abc247a(input);
    else if (/^[01]{6}$/.test(sym)) tenka1_2017a(input);
    else if (/^[01]{16}$/.test(sym)) abc323a(input);
    else if (/^(0|-?[1-9][0-9]*)$/.test(sym)) {
      const num = BigInt(sym);
      if (0n <= num && num <= 1n) abc178a(input);
      if (22n <= num && num <= 25n) abc115a(input);
      if (2000n <= num && num <= 3000n) abc262a(input);
    }
  } else if (input[0].length === 3) {
    if (
      input[0][0] === "AtCoder" &&
      /^[A-Z][a-z]{0,99}$/.test(input[0][1]) &&
      input[0][2] === "Contest"
    )
      abc048a(input);
  }
}
