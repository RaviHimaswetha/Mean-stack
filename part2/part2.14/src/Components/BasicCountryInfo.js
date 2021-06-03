import React from "react";
import Climate from './Climate'

const BasicCountryInfo = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h2>languages</h2>
      <ul>
        {country.languages.map(language => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img
        src={country.flag}
        alt={country.flag}
        style={{ width: "150px" ,height:"100px"}}
      />
      <Climate country={country}/>
    </div>
  );
};

export default BasicCountryInfo