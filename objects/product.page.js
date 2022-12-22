import Page from "./page";

class ProductPage extends Page {
    get cookiesButton() {
        return $('#onetrust-accept-btn-handler');
    }

    get categoryButton() {
        return $('body > div.page > div.header-container > div > div.header__wrapper > div.header__menu-container > div > div.header__menu-categories > div:nth-child(1) > a');
    }

    get productBlock() {
        return $('#splide01-clone06 > div > span > div > img.product-tile__image.image-life-style.ls-is-cached.lazyloaded');
    }

    get productVariantButton(){
        return $('body > div.page > div.product_container > div.product-detail.gtm-product-details.standard > div.product__container > div.product-detail__attributes > div > div > a:nth-child(3) > span > img');
    }

    get addToCartButton(){
        return $('body > div.page > div.product_container > div.product-detail.gtm-product-details.standard > div.product__container > div.product-detail__prices-add-to-cart > div.product-detail__add-to-cart');
    }

    get cartProduct(){
        return $('#cart-state-container > div.minicart > div > div.cart__details > div.cart__details__wrapper > div.cart__details__content > div.cart__products > div > div');
    }


    get writeReviewButton(){
        return $('#yotpo-reviews-top-div > div > span > div.yotpo-regular-box.yotpo-bottomline.yotpo-bottomline-2-boxes.yotpo-bottomline-empty-state > div.yotpo-default-button.yotpo-icon-btn.pull-right.yotpo-hidden-mobile.write-button.write-review-button > span.yotpo-icon-button-text');
    }

    get ratingButton(){
        return $('#yotpo-reviews-top-div > div > form:nth-child(3) > div > div > div.yotpo-header > div:nth-child(3) > span > span:nth-child(4)');
    }

    get postReviewButton(){
        return $('#yotpo-reviews-top-div > div > form:nth-child(3) > div > div > input');
    }

    get titleInputField(){
        return $('#yotpo_input_review_title');
    }

    get reviewInputField(){
        return $('#yotpo_input_review_content');
    }

    get usernameInputField(){
        return $('#yotpo_input_review_username');
    }

    get emailInputField(){
        return $('#yotpo_input_review_email');
    }

    get reviewWritenBlock(){
        return $('#yotpo-reviews-top-div > div > div:nth-child(4)');
    }


    async open() {
        await super.open('https://www.marshallheadphones.com/us/en/');
    }

    async openProduct() {
        await super.open('https://www.marshallheadphones.com/us/en/emberton-ii.html');
    }

    async setInputFieldValue(input, searchString) {
        await (await input).setValue(searchString);
    }
}

export default new ProductPage();