import HelpPage from '../../objects/help.page';


describe("Customize site", () => {

    it("Should customize colors and font", async () => {
        await HelpPage.open();
        await HelpPage.setInputFieldValue(HelpPage.helpSearchInputField, "The speaker is not using the latest firmware version");
        await HelpPage.enterSearchField();
        await HelpPage.clickElement(HelpPage.firstProblemSolutionLink);

        expect(await HelpPage.answerBodyBlock).toBeDisplayed();
    });

});