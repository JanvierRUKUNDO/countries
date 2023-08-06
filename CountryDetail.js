import React from 'react';

const CountryDetail = ({ country }) => {
  if (!country) {
    return <div className="country-detail">No country selected.</div>;
  }

  const { flags, name, region, subregion, capital, population, languages, currencies, borders } = country;

  return (
    <div className="country-detail">
      <div className="country-flag">
        <img src={flags.png} alt={`${name.common} Flag`} />
      </div>
      <div className="country-info">
        <h2>{name.common}</h2>
        <div className="info">
          <p><strong>Official Name: </strong>{name.official}</p>
          <p><strong>Region: </strong>{region}</p>
          <p><strong>Subregion: </strong>{subregion}</p>
          <p><strong>Capital: </strong>{capital}</p>
          <p><strong>Population: </strong>{population ? population.toLocaleString() : 'N/A'}</p>
          <p><strong>Languages: </strong>{languages ? Object.values(languages).join(', ') : 'N/A'}</p>
          <p><strong>Currencies: </strong>{currencies ? Object.keys(currencies).join(', ') : 'N/A'}</p>
        </div>
        <div className="border-countries">
          <h3>Border Countries:</h3>
          <ul>
            {borders && borders.length > 0 ? (
              borders.map((border) => (
                <li key={border}>{border}</li>
              ))
            ) : (
              <li>No border countries.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
