import Page from "./page";

class CustomizePage extends Page {
    get cookiesButton() {
        return $('#onetrust-accept-btn-handler');
    }

    get castomizeActiveButton() {
        return $('body > div.acsb-trigger.acsb-bg-lead.acsb-trigger-size-medium.acsb-trigger-position-x-left.acsb-trigger-position-y-bottom.acsb-ready > span.acsb-trigger-icon > svg');
    }

    get adjustTextColor() {
        return $('body > div.acsb-widget.acsb-widget-position-left.acsb-ready.acsb-active > div.acsb-main > div.acsb-main-options > div > div.acsb-actions-box.acsb-actions-box-colorAdjustments > div.acsb-actions-group > div.acsb-action-box.acsb-action-box-textColor.acsb-action-box-big > div.acsb-big-box-element.acsb-big-box-element-color > div > span:nth-child(4)');
    }

    get adjustTitleColor(){
        return $('body > div.acsb-widget.acsb-widget-position-left.acsb-ready.acsb-active > div.acsb-main > div.acsb-main-options > div > div.acsb-actions-box.acsb-actions-box-colorAdjustments > div.acsb-actions-group > div.acsb-action-box.acsb-action-box-titleColor.acsb-action-box-big > div.acsb-big-box-element.acsb-big-box-element-color > div > span:nth-child(7)');
    }

    get adjustFontSizing(){
        return $('body > div.acsb-widget.acsb-widget-position-left.acsb-ready.acsb-active.acsb-actions-active > div.acsb-main > div.acsb-main-options > div > div.acsb-actions-box.acsb-actions-box-textAdjustments > div.acsb-actions-group > div.acsb-action-box.acsb-action-box-fontSize.acsb-action-box-big > div.acsb-big-box-element.acsb-big-box-element-range > div > div.acsb-range-plus.acsb-range-button.acsb-bg-lead');
    }

    get adjustFontSizingBlock(){
        return $('body > div.acsb-widget.acsb-widget-position-left.acsb-ready.acsb-active.acsb-actions-active > div.acsb-main > div.acsb-main-options > div > div.acsb-actions-box.acsb-actions-box-textAdjustments > div.acsb-actions-group > div.acsb-action-box.acsb-action-box-fontSize.acsb-action-box-big > div.acsb-big-box-element.acsb-big-box-element-range > div > div.acsb-range-base.acsb-color-lead');
    }

    async open() {
        await super.open('https://www.marshallheadphones.com/us/en/');
    }
}

export default new CustomizePage();