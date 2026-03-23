fn get_stdin() -> Box<[Box<[String]>]> {
    use std::io::BufRead;
    std::io::stdin()
        .lock()
        .lines()
        .filter_map(Result::ok)
        .map(|s| s.split_whitespace().map(ToOwned::to_owned).collect())
        .collect()
}

fn main() {
    let input = get_stdin();
    let lens = input.iter().map(|l| l.len()).collect::<Box<_>>();
    match lens.as_ref() {
        _ => todo!(),
    }
}
