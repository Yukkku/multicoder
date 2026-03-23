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

pub fn solve(input: String) {
    match input.as_str() {
        "ABC" | "ARC" => abc166a(&input),
        "Monday" | "Tuesday" | "Wednesday" | "Thursdat" | "Friday" => abc267a(&input),
        _ => todo!(),
    }
}
