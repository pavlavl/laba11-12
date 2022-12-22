import Page from "./page";

class HelpPage extends Page {
    get cookiesButton() {
        return $('#onetrust-accept-btn-handler');
    }

    get helpSearchInputField() {
        return $('#query');
    }

    get firstProblemSolutionLink() {
        return $('body > main > div.container > div > section > ul > li:nth-child(1) > a');
    }

    get answerBodyBlock(){
        return $('#article-container > article > section');
    }

    async open() {
        await super.open('https://support.marshallheadphones.com/hc/en-us');
    }

    async setInputFieldValue(input, searchString) {
        await (await input).setValue(searchString);
    }

    async enterSearchField() {
        await browser.keys('Enter');
    }
}

export default new HelpPage();