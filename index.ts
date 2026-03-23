const input = (await Bun.stdin.text())
  .trim()
  .split("\n")
  .map((line) => line.trim().split(/\s+/));

import abc095a from "./solvers/abc/095/a";
import abc101a from "./solvers/abc/101/a";
import abc122a from "./solvers/abc/122/a";
import abc141a from "./solvers/abc/141/a";
import abc146a from "./solvers/abc/146/a";
import abc166a from "./solvers/abc/166/a";
import abc175a from "./solvers/abc/175/a";
import abc232a_abc389a from "./solvers/multi/abc232a_abc389a";
import abc267a_arc012a from "./solvers/multi/abc267a_arc012a";

if (input.length === 1) {
  if (input[0].length === 1) {
    const sym = input[0][0];
    if (/^[ox]{3}$/.test(sym)) abc095a(input);
    else if (/^[+-]{4}$/.test(sym)) abc101a(input);
    else if (/^[ACGT]$/.test(sym)) abc122a(input);
    else if (/^(Sunny|Cloudy|Rainy)$/.test(sym)) abc141a(input);
    else if (/^(SUN|MON|TUE|WED|THU|FRI|SAT)$/.test(sym)) abc146a(input);
    else if (/^A[BR]C$/.test(sym)) abc166a(input);
    else if (/^[SR]{3}$/.test(sym)) abc175a(input);
    else if (/^\dx\d$/.test(sym)) abc232a_abc389a(input);
    else if (/^(Mon|Thues|Wednes|Thurs|Fri|Satur|Sun)day$/.test(sym))
      abc267a_arc012a(input);
  }
}
