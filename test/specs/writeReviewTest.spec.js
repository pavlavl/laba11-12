import ProductPage from '../../objects/product.page';


describe("Write review", () => {

    it("Should write review", async () => {
        await ProductPage.openProduct();
        await ProductPage.clickElement(ProductPage.cookiesButton);
        await ProductPage.reviewInputField.scrollIntoView({ block: 'center', inline: 'center' });
        await ProductPage.clickElement(ProductPage.writeReviewButton);
        ProductPage.ratingButton.moveTo();
        await ProductPage.clickElement(ProductPage.ratingButton);
        ProductPage.setInputFieldValue(ProductPage.titleInputField, 'nice');
        ProductPage.setInputFieldValue(ProductPage.reviewInputField, 'very nice product');
        ProductPage.setInputFieldValue(ProductPage.usernameInputField, 'egor');
        ProductPage.setInputFieldValue(ProductPage.emailInputField, 'mr.shchamel@mail.ru');
        await ProductPage.clickElement(ProductPage.postReviewButton);

        expect(await ProductPage.reviewInputField).toBeDisplayed();
    });

});