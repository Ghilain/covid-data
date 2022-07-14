import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BiRightArrowCircle } from 'react-icons/bi';
import FetchData from '../redux/fetchapidata';
import { GetData } from '../redux/appreducer';
import './HomePage.css';

function HomePage() {
  const CountryData = useSelector((fetch) => fetch.moredetails);
  const dispatch = useDispatch();

  useEffect(() => {
    if (CountryData.length === 0) {
      FetchData()
        .then((response) => dispatch(GetData(response)));
    }
  }, []);

  let CountryHighCases = CountryData.filter((item) => item.country_cases > 10000000);
  const currentlocation = useLocation();
  const params = new URLSearchParams(currentlocation.search);
  const search = params.get('search') || '';
  CountryHighCases = CountryHighCases.filter((countries) => countries.country_name.toString().split('').join('')
    .toUpperCase()
    .toLowerCase()
    .replace(/\s/g, '')
    .includes(search));
  const navigation = useNavigate();
  const [searchData, setSearchData] = useState(search);

  const countryOnChange = (e) => {
    navigation(e.target.value ? `?search=${e.target.value}` : '');
    setSearchData(e.target.value);
  };

  return (
    <section>
      <h1>Countries with high cases</h1>
      <form>
        <input
          type="text"
          value={searchData}
          placeholder="Search for country..."
          onChange={countryOnChange}
        />
      </form>
      <ul className="countrycontainer">
        {
        CountryHighCases.map((countries) => (
          <li key={countries.country_name}>
            <Link key={countries.country_name} to={{ pathname: `/country/${countries.country_name}` }}>
              <BiRightArrowCircle />
            </Link>
            <div>
              <h3>
                Country:
                <br />
                {countries.country_name}
              </h3>
              <h3>
                Continent:
                <br />
                {countries.country_continent}
              </h3>
              <h3>
                Population:
                <br />
                {countries.population.toLocaleString()}
              </h3>
            </div>
            <div>
              <img src={countries.country_flag} alt="country flag" />
            </div>
          </li>
        ))
      }
      </ul>
    </section>
  );
}

export default HomePage;
