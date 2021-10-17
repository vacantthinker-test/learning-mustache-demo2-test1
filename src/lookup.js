/**
 *
 * @param dataObject
 * @param keyName
 * @returns {*}
 */
export default function lookup(dataObject, keyName) {
    if (keyName.indexOf('.') !== -1 && keyName !== '.') {
        let tmp = dataObject;
        let splits = keyName.split('.');
        for (let i = 0; i < splits.length; i++) {
            let item = splits[i];
            tmp = tmp[item]
        }
        return tmp;
    }
    return dataObject[keyName]
}