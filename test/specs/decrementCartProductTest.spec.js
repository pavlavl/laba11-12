import ProductPage from '../../objects/product.page';
import CartPage from '../../objects/cart.page';


describe("Decrement cart product", () => {

    it("should open product", async () => {
        await ProductPage.open();
        await ProductPage.clickElement(ProductPage.cookiesButton);
        await ProductPage.clickElement(ProductPage.categoryButton);
        await ProductPage.productBlock.scrollIntoView({ block: 'center', inline: 'center' });
        await ProductPage.clickElement(ProductPage.productBlock);

        expect(await ProductPage.productVariantButton).toBeDisplayed();
    });

    it("should add to cart product", async () => {
        await ProductPage.productVariantButton.scrollIntoView({ block: 'center', inline: 'center' });
        await ProductPage.clickElement(ProductPage.productVariantButton);
        await CartPage.wait(1000);
        await ProductPage.clickElement(ProductPage.addToCartButton);

        expect(await ProductPage.cartProduct).toBeDisplayed();
    });

    it("should change cart products count", async () => {
        await CartPage.clickElement(CartPage.incrementCartProductButton);
        await CartPage.clickElement(CartPage.incrementCartProductButton);
        await CartPage.clickElement(CartPage.decrementCartProductButton);

        expect(await CartPage.productCartCountInputField).toHaveValue('1');
    });
});