import React, { useState, useEffect } from 'react';
import ApiService from './ApiService';
import CountryDetail from './CountryDetail';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await ApiService.getCountries();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  let filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (regionFilter) {
    filteredCountries = filteredCountries.filter(
      (country) => country.region === regionFilter
    );
  }

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const getCountriesRegions = () => {
    const regions = new Set();
    countries.forEach((country) => {
      regions.add(country.region);
    });
    return Array.from(regions);
  };

  return (
    <div>
      <header className="app-header">
        <h1>This app is created by RUKUNDO JANVIER</h1>
      </header>
      <div className="search-filters">
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select
          value={regionFilter}
          onChange={(e) => setRegionFilter(e.target.value)}
          className="region-filter"
        >
          <option value="">All Regions</option>
          {getCountriesRegions().map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      {selectedCountry && <CountryDetail country={selectedCountry} />}

      <ul className="country-list">
        {filteredCountries.map((country) => (
          <li
            key={country.cca3}
            className="country-card"
            onClick={() => handleCountryClick(country)}
          >
            {country.name.common}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
