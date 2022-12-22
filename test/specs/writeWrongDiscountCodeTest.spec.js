import CartPage from '../../objects/cart.page';


describe("Write wrong discount code", () => {

    it("Should write wrong code", async () => {
        await CartPage.open();
        await CartPage.clickElement(CartPage.cookiesButton);
        await CartPage.clickElement(CartPage.productStyleButton);
        await CartPage.wait(1000);
        await CartPage.clickElement(CartPage.addToCartButton);
        await CartPage.clickElement(CartPage.addDiscountCodeButton);
        await CartPage.setInputFieldValue(CartPage.discountCodeInputField, 'wrong code');
        await CartPage.clickElement(CartPage.submitDiscountCodeButton);

        expect(await CartPage.wrongCodeBlock).toBeDisplayed();
    });

});