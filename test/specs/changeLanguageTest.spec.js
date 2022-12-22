import MainPage from '../../objects/main.page';


describe("Change site lang", () => {

    it("Should change lang", async () => {
        await MainPage.open();
        await MainPage.clickElement(MainPage.cookiesButton);
        await MainPage.clickElement(MainPage.languageActiveButton);
        await MainPage.clickElement(MainPage.countyActiveButton);
        await MainPage.clickElement(MainPage.franceActiveButton);

        expect(await MainPage.countyActiveButton.getText()).toEqual("FRANCE");
        expect(await MainPage.selectLanguageButton.getText()).toEqual("FRENCH");
    });

});