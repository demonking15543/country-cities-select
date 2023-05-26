import React, { useState, ChangeEvent } from 'react';
import logo from './logo.svg';
import './App.css';

type Tcountry = {
  id:number,
  name:string,
  label:string,
  cities:string[]

}
function App() {
  const [country, setCountry] = useState<Tcountry>(
    {id:0, name:"", label:"", cities:[]

  })
const countries = [
  {id:1, name:"India", label:"IN", cities: ["Delhi", "Odisa"]},
    {id:2, name:"America", label:"US", cities: ["Washington DC", "New York"]},
  {id:3, name:"Australia", label:"AUS", cities: ["Sydney", "Melbourn"]},
  {id:4, name:"Pakistan", label:"PAK", cities: ["Lahore", "Islamabad"]},

]

const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry({...countries[1]})

}
console.log(country)
  return (
    <div className="App">

      <select 
      onChange={handleChange}     
       >
        {
        countries.map((country, index)=>(
          <option key={index} value={index}>{country?.label}</option>
        ))
        }
      </select>

      <select>
        {country?.cities?.map(city=>(
          <option>{city}</option>
        ))}
        </select>
    </div>
  );
}

export default App;
