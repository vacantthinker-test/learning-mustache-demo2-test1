export default function nestTokens(tokens) {
    let nestTokens = []
    let collector = nestTokens
    let stack = []

    let token;
    for (let i = 0; i < tokens.length; i++) {
        token = tokens[i]
        let type = token[0]
        switch (type) {
            case '#':
                collector.push(token)
                stack.push(token)

                collector = token[2] = []
                break
            case '/':
                stack.pop()
                collector = stack.length > 0
                    ? stack[stack.length - 1][2]
                    : nestTokens;
                break
            default:
                collector.push(token)
                break
        }
    }

    // console.log(nestTokens)
    return nestTokens
}