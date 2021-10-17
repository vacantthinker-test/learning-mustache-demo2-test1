import Scanner from "./Scanner";
import nestTokens from "./nestTokens";

export default function parseTemplate(template) {
    // console.log(template)
    let tokens = []
    let scanner = new Scanner(template)
    let startTag = '{{'
    let stopTag = '}}'

    while (!scanner.eos()) {
        let text = scanner.scanUntil(startTag)
        if (text !== '') {
            tokens.push(['text', text])
        }
        scanner.scan(startTag)

        let name = scanner.scanUntil(stopTag)
        if (name !== '') {
            let first = name[0]
            if (first === '#') {
                tokens.push([first, name.substring(1)])
            } else if (first === '/') {
                tokens.push([first, name.substring(1)])
            } else {
                tokens.push(['name', name])
            }
        }
        scanner.scan(stopTag)

    }
    // console.log(tokens)
    let newTokens = tokens.map(value => Object.assign([], value))
    return nestTokens(newTokens);
}