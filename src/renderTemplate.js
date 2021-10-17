import lookup from "./lookup";
import parseArray from "./parseArray";

export default function renderTemplate(tokens, data) {
    // console.log('tokens',tokens)
    // console.log('data',data)
    let result = '';

    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i]
        let type = token[0] // 'text'| 'name'| '#'
        let value = token[1]
        switch (type) {
            case 'text':
                result += value;
                break
            case 'name':
                result += lookup(data, value)
                break
            case '#':
                // token ['#', 'arr', Array]
                result += parseArray(token , data)
                break
        }
    }

    // console.log('result', result)
    return result;
}