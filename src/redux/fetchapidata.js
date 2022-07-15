import axios from 'axios';

const URL = 'https://disease.sh/v3/covid-19/countries';

const FetchData = async () => {
  const statusdata = [];
  const response = await axios.get(URL);
  const storedData = response.data;

  storedData.map(({ countryInfo: { _id: id, flag }, ...data }) => {
    const covidInfo = {
      country_continent: data.continent,
      country_name: data.country,
      country_id: id,
      country_flag: flag,
      country_cases: data.cases,
      country_deaths: data.deaths,
      country_recovered: data.recovered,
      country_active: data.active,
      country_tests: data.tests,
      population: data.population,
      country_todaycases: data.todayCases,
      country_todaydeaths: data.todayDeaths,
      country_todayrecovered: data.todayRecovered,
    };

    return statusdata.push(covidInfo);
  });

  return statusdata;
};

export default FetchData;
