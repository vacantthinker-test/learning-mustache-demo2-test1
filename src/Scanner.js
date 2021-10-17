export default class Scanner {
    constructor(template) {
        this.template = template;
        this.position = 0
        this.tail = this.template
    }

    scan(tag) {
        if (this.tail.indexOf(tag) === 0){
            this.position += tag.length;
            this.tail = this.template.substring(this.position)
        }
    }

    /**
     * move one step, until touch the stopTag
     * @param stopTag
     */
    scanUntil(stopTag) {
        const startIndex = this.position
        // if the this.position is right
        // && the stopTag index is not the start.
        while (!(this.eos()) && this.tail.indexOf(stopTag) !== 0) {
            this.position++;
            this.tail = this.template.substring(this.position)
        }
        return this.template.substring(startIndex, this.position)
    }

    /**
     * end of string
     * @returns {boolean}
     */
    eos() {
        return this.position >= this.template.length
    }
}