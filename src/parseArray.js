import lookup from "./lookup";
import renderTemplate from "./renderTemplate";

/**
 *
 * @param token ['#', 'arr', Array]
 * @param originData
 * @returns {string}
 */
export default function parseArray(token, originData) {
    let result = ''
    let key = token[1] // arr
    let tokenArray = token[2] // Array
    let arrayData = lookup(originData, key)
    // console.log('arrayData', arrayData)

    for (let i = 0; i < arrayData.length; i++) {
        let wrapData = {
            ...arrayData[i],
            '.': arrayData[i]
        }
        result += renderTemplate(tokenArray, wrapData)
    }

    return result
}