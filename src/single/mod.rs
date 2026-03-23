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

fn abc166a(input: &str) {
    if input == "ABC" {
        println!("ARC");
    } else {
        println!("ABC");
    }
}

fn abc267a(input: &str) {
    println!(
        "{}",
        match input {
            "Monday" => 5,
            "Tuesday" => 4,
            "Wednesday" => 3,
            "Thursdat" => 2,
            "Friday" => 1,
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

pub fn solve(input: String) {
    match input.as_str() {
        "Sunny" | "Cloudy" | "Rainy" => abc141a(&input),
        "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" => abc146a(&input),
        "ABC" | "ARC" => abc166a(&input),
        "Monday" | "Tuesday" | "Wednesday" | "Thursdat" | "Friday" => abc267a(&input),
        "tourist" | "ksun48" | "Benq" | "Um_nik" | "apiad" | "Stonefeang" | "ecnerwala"
        | "mnbvmar" | "newbiedmy" | "semiexp" => abc319a(&input),
        _ => todo!(),
    }
}
