import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import FetchData from '../redux/fetchapidata';
import { GetData } from '../redux/appreducer';
import worldmap from '../image/worldcovidmap.png';
import './DetailsPage.css';

function CountryDetails() {
  const CountryData = useSelector((fetch) => fetch.moredetails);
  const dispatched = useDispatch();
  const { countryname } = useParams();
  const searchCountry = CountryData.find((country) => country.country_name === countryname);

  useEffect(() => {
    if (CountryData.length === 0) {
      FetchData()
        .then((response) => dispatched(GetData(response)));
    }
  });

  return (
    <section className="section">
      <div>
        <div className="imgcontainer">
          <img src={worldmap} alt="world map" className="worldmap" />
        </div>
        <h1>Country details information</h1>
        <div className="detailscontainer">
          <div>
            <h2>Continent:</h2>
            <h2>{searchCountry.country_continent}</h2>
            <h2>Name:</h2>
            <h2>{countryname}</h2>
            <img src={searchCountry.country_flag} alt="country flag" />
          </div>

          <div>
            <div>
              <ul>
                <h4>Update&apos;s info</h4>
                <li>
                  <h5>Today&apos;s cases:</h5>
                  {searchCountry.country_todaycases.toLocaleString()}
                </li>
                <li>
                  <h5>Today&apos;s deaths:</h5>
                  {searchCountry.country_todaydeaths.toLocaleString()}
                </li>
                <li>
                  <h5>Today&apos;s Recoveries:</h5>
                  {searchCountry.country_todayrecovered.toLocaleString()}
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <h4>Total</h4>
                <li>
                  <h5>Cases:</h5>
                  {searchCountry.country_cases.toLocaleString()}
                </li>
                <li>
                  <h5>Recovered:</h5>
                  {searchCountry.country_recovered.toLocaleString()}
                </li>
                <li>
                  <h5>Active Cases:</h5>
                  {searchCountry.country_active.toLocaleString()}
                </li>
                <li>
                  <h5>Tests:</h5>
                  {searchCountry.country_tests.toLocaleString()}
                </li>
                <li>
                  <h5>Deaths:</h5>
                  {searchCountry.country_deaths.toLocaleString()}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountryDetails;
