import "../css/style.css";
import "./plugins";
import locations from "./store/locations";
import formUI from "./views/form";
import ticketsUI from "./views/tickets";
import currencyUI from "./views/currency";

document.addEventListener("DOMContentLoaded", () => {
  // console.log("DOMContentLoaded");
  initApp();
  const form = formUI.form;
  // console.log("formUI =", formUI);
  // console.log("formUI.form =", formUI.form);
  // console.log("form =", form);

  //Events
  form.addEventListener("submit", (e) => {
    // console.log("e =", e);
    e.preventDefault();
    onFormSubmit();
  });

  //Handlers
  async function initApp() {
    await locations.init();
    formUI.setAutoCompleteData(locations.shortCitiesList);
  }

  async function onFormSubmit() {
    // собрать данные из input
    const origin = locations.getCityCodeByKey(formUI.originValue);
    const destination = locations.getCityCodeByKey(formUI.destinationValue);
    const depart_date = formUI.departDateValue;
    const return_date = formUI.returnDateValue;
    const currency = currencyUI.currencyValue;
    // CODE, CODE, 2019-09, 2019-10
    // console.log(
    //   "origin, destination, depart_date, return_date =",
    //   origin,
    //   destination,
    //   depart_date,
    //   return_date,
    //   currency
    // );

    // console.log("currency = ", currency);
    // console.log("currencyUI = ", currencyUI);

    await locations.fetchTickets({
      origin,
      destination,
      depart_date,
      return_date,
      currency,
    });

    console.log("locations.lastSearch = ", locations.lastSearch);
    ticketsUI.renderTickets(locations.lastSearch);
  }
});
