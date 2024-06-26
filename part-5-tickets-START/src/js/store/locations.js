import api from "../services/apiService";
import { formatDate } from "../helpers/date";

class Locations {
  constructor(api, helpers) {
    this.api = api;
    this.countries = null;
    this.cities = null;
    this.shortCitiesList = null;
    this.airlines = {};
    this.formatDate = helpers.formatDate;
  }
  async init() {
    const response = await Promise.all([
      this.api.countries(),
      this.api.cities(),
      this.api.airlines(),
    ]);

    // console.log("response = ", response);

    const [countries, cities, airlines] = response;
    // console.log("countries = ", countries);
    // this.countries = countries;
    // console.log("airlines = ", airlines);

    this.countries = this.serializeCountries(countries);
    this.cities = this.serializeCities(cities);
    // console.log("this.cities = ", this.cities);
    // console.log("cities = ", cities);

    this.shortCitiesList = this.createShortCitiesList(this.cities);

    this.airlines = this.serializeAirlines(airlines);
    // console.log("this.airlines = ", this.airlines);
    // console.log("airlines = ", airlines);

    // console.log("this.shortCitiesList = ", this.shortCitiesList);

    return response;
  }

  getCityCodeByKey(key) {
    const city = Object.values(this.cities).find(
      (item) => item.full_name === key
    );
    return city.code;
  }

  getCityNameByCode(code) {
    return this.cities[code].name;
  }

  getAirlineNameByCode(code) {
    return this.airlines[code] ? this.airlines[code].name : "";
  }

  getAirlineLogoByCode(code) {
    return this.airlines[code] ? this.airlines[code].logo : "";
  }

  createShortCitiesList(cities) {
    // {'City, Country': null}
    // Object.entries => [key, value]
    return Object.entries(cities).reduce((acc, [, city]) => {
      acc[city.full_name] = null;
      return acc;
      // console.log("key = ", key);
    }, {});
  }

  serializeCountries(countries) {
    // console.log("countries = ", countries);
    return countries.reduce((acc, country) => {
      acc[country.code] = country;
      // console.log("acc[country.code] = ", acc[country.code]);
      return acc;
    }, {});
  }

  serializeCities(cities) {
    // { 'City name, Country name': {...}  }
    return cities.reduce((acc, city) => {
      const country_name = this.getCountryNameByCode(city.country_code);
      city.name = city.name || city.name_translations.en;
      const full_name = `${city.name}, ${country_name}`;
      // const key =
      acc[city.code] = {
        ...city,
        country_name,
        full_name,
      };
      return acc;
    }, {});
  }

  serializeAirlines(airlines) {
    // console.log("airlines = ", airlines);
    return airlines.reduce((acc, airline) => {
      // console.log("airline = ", airline);
      airline.logo = `http://pics.avs.io/200/200/${airline.code}.png`;
      airline.name = airline.name || airline.name_translations.en;
      acc[airline.code] = airline;
      // console.log("acc[country.code] = ", acc[country.code]);
      return acc;
    }, {});
  }

  getCountryNameByCode(code) {
    return this.countries[code].name;
  }

  async fetchTickets(params) {
    const response = await this.api.prices(params);
    this.lastSearch = this.serializeTickets(response.data);

    // console.log("this.lastSearch = ", this.lastSearch);
  }

  serializeTickets(tickets) {
    return Object.values(tickets).map((ticket) => {
      return {
        ...ticket,
        origin_name: this.getCityNameByCode(ticket.origin),
        destination_name: this.getCityNameByCode(ticket.destination),
        airline_logo: this.getAirlineLogoByCode(ticket.airline),
        airline_name: this.getAirlineNameByCode(ticket.airline),
        departure_at: this.formatDate(ticket.departure_at, "dd MMM yyyy hh:mm"),
        return_at: this.formatDate(ticket.return_at, "dd MMM yyyy hh:mm"),
      };
    });
  }
}

const locations = new Locations(api, { formatDate });

export default locations;
