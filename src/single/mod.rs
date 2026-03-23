fn abc081a(input: &str) {
    println!("{}", input.chars().filter(|&c| c == '1').count());
}

fn abc095a(input: &str) {
    println!(
        "{}",
        700 + 100 * input.chars().filter(|&c| c == 'o').count()
    );
}

fn abc101a(input: &str) {
    let mut r = 0;
    for c in input.chars() {
        r += if c == '+' { 1 } else { -1 };
    }
    println!("{r}");
}

fn abc122a(input: &str) {
    println!(
        "{}",
        match input {
            "A" => "T",
            "C" => "G",
            "G" => "C",
            "T" => "A",
            _ => unreachable!(),
        }
    )
}

fn abc141a(input: &str) {
    println!(
        "{}",
        match input {
            "Sunny" => "Cloudy",
            "Cloudy" => "Rainy",
            "Rainy" => "Sunny",
            _ => unreachable!(),
        }
    )
}

fn abc146a(input: &str) {
    println!(
        "{}",
        match input {
            "SUM" => 7,
            "MON" => 6,
            "TUE" => 5,
            "WED" => 4,
            "THU" => 3,
            "FRI" => 2,
            "SAT" => 1,
            _ => unreachable!(),
        }
    )
}

fn abc158a(input: &str) {
    if input == "AAA" || input == "BBB" {
        println!("No");
    } else {
        println!("Yes");
    }
}

fn abc166a(input: &str) {
    if input == "ABC" {
        println!("ARC");
    } else {
        println!("ABC");
    }
}

fn abc175a(input: &str) {
    println!(
        "{}",
        match input {
            "SSS" => 0,
            "RSR" | "RSS" | "SRS" | "SSR" => 1,
            "RRS" | "SRR" => 2,
            "RRR" => 3,
            _ => unreachable!(),
        }
    );
}

fn abc178a(input: &str) {
    if input == "0" {
        println!("1");
    } else {
        println!("0");
    }
}

fn abc232a_abc389a(input: &str) {
    let input = input.as_bytes();
    println!("{}", (input[0] - b'0') * (input[2] - b'0'));
}

fn abc247a(input: &str) {
    println!("0{}", &input[1..]);
}

fn abc267a_arc012a(input: &str) {
    println!(
        "{}",
        match input {
            "Monday" => 5,
            "Tuesday" => 4,
            "Wednesday" => 3,
            "Thursdat" => 2,
            "Friday" => 1,
            "Saturday" => 0,
            "Sunday" => 0,
            _ => unreachable!(),
        }
    )
}

fn abc319a(input: &str) {
    println!(
        "{}",
        match input {
            "tourist" => 3858,
            "ksun48" => 3679,
            "Benq" => 3658,
            "Um_nik" => 3648,
            "apiad" => 3638,
            "Stonefeang" => 3630,
            "ecnerwala" => 3613,
            "mnbvmar" => 3555,
            "newbiedmy" => 3516,
            "semiexp" => 3481,
            _ => unreachable!(),
        }
    );
}

fn abc323a(input: &str) {
    if input.chars().skip(1).step_by(2).all(|c| c == '0') {
        println!("Yes");
    } else {
        println!("No");
    }
}

pub fn solve(input: String) {
    let input_bytes = input.as_bytes();
    if input.chars().all(|c| c == '0' || c == '1') {
        match input.len() {
            1 => abc178a(&input),
            3 => abc081a(&input),
            4 => abc247a(&input),
            16 => abc323a(&input),
            _ => todo!(),
        }
    }
    match input.as_str() {
        _ if input.len() == 3 && input.chars().all(|c| c == 'o' || c == 'x') => abc095a(&input),
        _ if input.len() == 4 && input.chars().all(|c| c == '+' || c == '-') => abc101a(&input),
        "A" | "C" | "G" | "T" => abc122a(&input),
        "Sunny" | "Cloudy" | "Rainy" => abc141a(&input),
        "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" => abc146a(&input),
        _ if input.len() == 3 && input.chars().all(|c| c == 'A' || c == 'B') => abc158a(&input),
        "ABC" | "ARC" => abc166a(&input),
        _ if input.len() == 3 && input.chars().all(|c| c == 'S' || c == 'R') => abc175a(&input),
        _ if input.len() == 3
            && input_bytes[0].is_ascii_digit()
            && input_bytes[1] == b'x'
            && input_bytes[2].is_ascii_digit() =>
        {
            abc232a_abc389a(&input)
        }
        "Monday" | "Tuesday" | "Wednesday" | "Thursdat" | "Friday" | "Saturday" | "Sunday" => {
            abc267a_arc012a(&input)
        }
        "tourist" | "ksun48" | "Benq" | "Um_nik" | "apiad" | "Stonefeang" | "ecnerwala"
        | "mnbvmar" | "newbiedmy" | "semiexp" => abc319a(&input),
        _ => todo!(),
    }
}
