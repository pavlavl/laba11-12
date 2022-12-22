import MainPage from '../../objects/main.page';


describe("Find product", () => {

    it("Should find product", async () => {
        await MainPage.open();
        await MainPage.clickElement(MainPage.cookiesButton);
        await MainPage.clickElement(MainPage.searchActiveButton);
        await MainPage.clickElement(MainPage.searchInputField);
        await MainPage.inputSearchField('major iv');
        await MainPage.enterSearchField();

        expect(await MainPage.searchResultProduct).toBeDisplayed();
    });

});