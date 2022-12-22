import CustomizePage from '../../objects/customize.page';


describe("Customize site", () => {

    it("Should customize colors and font", async () => {
        await CustomizePage.open();
        await CustomizePage.clickElement(CustomizePage.cookiesButton);
        await CustomizePage.clickElement(CustomizePage.castomizeActiveButton);
        await CustomizePage.adjustTextColor.scrollIntoView();
        await CustomizePage.adjustTextColor.moveTo();
        await CustomizePage.clickElement(CustomizePage.adjustTextColor);
        await CustomizePage.adjustTitleColor.moveTo();
        await CustomizePage.clickElement(CustomizePage.adjustTitleColor);
        await CustomizePage.adjustFontSizing.scrollIntoView();
        await CustomizePage.adjustFontSizing.moveTo();
        await CustomizePage.clickElement(CustomizePage.adjustFontSizing);
        await CustomizePage.clickElement(CustomizePage.adjustFontSizing);

        expect(await CustomizePage.adjustFontSizingBlock.getText()).toEqual("+20%");
    });

});