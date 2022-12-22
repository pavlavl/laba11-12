export default class Page {
    constructor() {
        console.log(this.title)
        this.title = '';
    }

    async open(path) {
        await browser.url(path);
    }

    async clickElement(element) {
        await (await element).click();
    }
}