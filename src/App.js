import React, { useEffect, useState } from "react";
import "./App.css";
import { MenuItem, Select, FormControl } from "@material-ui/core";

function App() {
  const [countries, setCountries] = useState([]);

  //

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
            {/* <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Option 2</MenuItem>
            <MenuItem value="worldwide">Clearly</MenuItem>
  <MenuItem value="worldwide">Yoo</MenuItem> */}
          </Select>
        </FormControl>
      </div>

      {/*Header*/}
      {/*Title + select input dropdown field*/}
      {/*InfoBoxs*/}
      {/*InfoBoxs*/}
      {/*InfoBoxs*/}
      {/*Table*/}
      {/*Graph*/}
      {/*Map*/}
    </div>
  );
}

export default App;
