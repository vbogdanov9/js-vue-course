class СurrencyUI {
  constructor() {
    this.currency = document.getElementById("currency");
    this.dictionary = {
      USD: "$",
      EUR: "€",
    };
  }

  get currencyValue() {
    return this.currency.value;
  }

  getCurrencySymbol() {

    console.log("currency.js: this.currencyValue = ", this.currencyValue);
    console.log("currency.js: this = ", this);

    return this.dictionary[this.currencyValue];
  }
}

const currencyUI = new СurrencyUI();

export default currencyUI;
