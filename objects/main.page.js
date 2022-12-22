import Page from "./page";


class MainPage extends Page {
    get cookiesButton() {
        return $('#onetrust-accept-btn-handler');
    }

    get languageActiveButton() {
        return $('body > div.page > div.header-container > div > div.header__wrapper > div.header__country-selector-container.hide-for-small.hide-for-medium > div.header__country-selector.country-dropdown-state-trigger > div')
    }

    get countyActiveButton() {
        return $('body > div.page > div.state-container--country-dropdown > div.country-dropdown__selection-container > div:nth-child(1) > div.dropdown-header.active-country > a')
    }

    get franceActiveButton() {
        return $('body > div.page > div.state-container--country-dropdown > div.country-dropdown__selection-container > div.dropdown.active > div.dropdown-content.popular-countries > div.country.country-fr')
    }

    get selectLanguageButton() {
        return $('body > div.page > div.state-container--country-dropdown > div.country-dropdown__selection-container > div.dropdown.language-dropdown > div.dropdown-header.language-default > a')
    }

    
    get searchActiveButton() {
        return $('body > div.page > div.header-container > div > div.header__wrapper > div.header__country-selector-container.hide-for-small.hide-for-medium > div.show-for-large > div > div.header__menu-icons__item.search-state-trigger')
    }

    get searchInputField() {
        return $('#search-state-container > div > form > input.form-control.search-field')
    }

    get searchResultProduct(){
        return $('body > div.page > div.results-container > div > div.product-tiles__container.gtm-product-list.product-tiles > div.product-tile.life-style_product');
    }


    async open() {
        await super.open('https://www.marshallheadphones.com/us/en/');
    }

    async inputSearchField(searchString) {
        await (await this.searchInputField).setValue(searchString);
    }

    async enterSearchField() {
        await browser.keys('Enter');
    }
}

export default new MainPage();