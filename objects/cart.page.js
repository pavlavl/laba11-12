import Page from "./page";

class CartPage extends Page {
    get cookiesButton() {
        return $('#onetrust-accept-btn-handler');
    }

    get addDiscountCodeButton(){
        return $('#cart-state-container > div.minicart > div > div.cart__summary > div > div.cart__totals__wrapper > div.cart__coupon-codes > div.cart__coupon-codes__title');
    }

    get discountCodeInputField(){
        return $('#couponCode');
    }

    get submitDiscountCodeButton(){
        return $('#cart-state-container > div.minicart > div > div.cart__summary > div > div.cart__totals__wrapper > div.cart__coupon-codes.coupon-codes--expanded > div.cart__coupon-codes__form > form > div.form-group > div > div.promo-code-submit > button');
    }

    get wrongCodeBlock(){
        return $('#cart-state-container > div.minicart > div > div.cart__summary > div > div.cart__totals__wrapper > div.cart__coupon-codes.coupon-codes--expanded > div.cart__coupon-codes__form > form > div.coupon-error > span.coupon-error-message');
    }

    get productStyleButton(){
        return $('body > div.page > div.product_container > div.product-detail.gtm-product-details.standard > div.product__container > div.product-detail__attributes > div > div > a:nth-child(3) > span > img');
    }

    get addToCartButton(){
        return $('body > div.page > div.product_container > div.product-detail.gtm-product-details.standard > div.product__container > div.product-detail__prices-add-to-cart > div.product-detail__add-to-cart');
    }

    get removeFromCartButton(){
        return $('#cart-state-container > div.minicart > div > div.cart__details > div.cart__details__wrapper > div.cart__details__content > div.cart__products > div > div > div.product-line-item__action-buttons > div.product-line-item__controls > div.product-line-item__remove');
    }

    get cartTotal(){
        return $('#cart-state-container > div.minicart > div > div.cart__summary > div > div.cart__totals__wrapper > div.cart__subtotals > div.order-subtotal > p.order-subtotal-value');
    }

    get openProtectionPlanWindowButton(){
        return $('#cart-state-container > div.minicart > div > div.cart__details > div.cart__details__wrapper > div.cart__details__content > div.cart__products > div > div > div.product-line-item__details > div.clyde-cta-1006127 > iframe');
    }

    get addProtectionPlanButton(){
        return $('body > div:nth-child(37) > iframe').shadow$$('#plandata_tab > div.sc-evZas.KipTr > div:nth-child(1) > button');
    }

    get protectionPlanBlock(){
        return $('#cart-state-container > div.minicart > div > div.cart__details > div.cart__details__wrapper > div.cart__details__content > div.cart__products > div:nth-child(2)');
    }

    get incrementCartProductButton(){
        return $('#cart-state-container > div.minicart > div > div.cart__details > div.cart__details__wrapper > div.cart__details__content > div.cart__products > div > div > div.product-line-item__action-buttons > div.product-line-item__controls > div.product-line-item__quantity > div > i.icon-circle-plus.increase-quantity.update-quantity');
    }

    get decrementCartProductButton(){
        return $('#cart-state-container > div.minicart > div > div.cart__details > div.cart__details__wrapper > div.cart__details__content > div.cart__products > div > div > div.product-line-item__action-buttons > div.product-line-item__controls > div.product-line-item__quantity > div > i.icon-circle-minus.icon--disabled.decrease-quantity');
    }

    get productCartCountInputField(){
        return $('#quantity');
    }

    async open() {
        await super.open('https://www.marshallheadphones.com/us/en/major-iv.html');
    }

    async setInputFieldValue(input, searchString) {
        await (await input).setValue(searchString);
    }

    async wait(waitVal){
        await browser.pause(waitVal);
    }
}

export default new CartPage();