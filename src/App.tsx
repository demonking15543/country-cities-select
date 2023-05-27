import React, { useState } from 'react';
import './App.css';

type Tcountry = {
  id:number,
  name:string,
  label:string,
  cities:string[]

}
function App(): JSX.Element{
  const [idx, setIdx] = useState<number>(0)
  const [selectedCountry, setSelectedCountry] = useState<string>('')
  const [selectedCity, setSelectedCity] = useState<string>('')
  
const countries = [
  {id:1, name:"India", label:"IN", cities: ["Delhi", "Odisa"]},
    {id:2, name:"America", label:"US", cities: ["Washington DC", "New York"]},
  {id:3, name:"Australia", label:"AUS", cities: ["Sydney", "Melbourn"]},
  {id:4, name:"Pakistan", label:"PAK", cities: ["Lahore", "Islamabad"]},

]

// Get selected option and update setIdx and reset selectedCity
const handleChange = (e: React.ChangeEvent<HTMLSelectElement>):void => {
    setIdx(parseInt(e.target.value, 10))
    setSelectedCountry(countries[parseInt(e.target.value, 10)].name)
    setSelectedCity('')
    

}


console.log("selected  country and city ", selectedCountry, selectedCity)
  return (
    <div className="App">

      <select
      defaultValue={selectedCountry} 
      onChange={handleChange} 
         
       >
        <option value="">Selcet a Country...</option>

        {
        countries.map((country:Tcountry, index:number)=>(
          <option key={index} value={index}>{country?.label}</option>
        ))
        }
      </select>
        
      <select 
      value={selectedCity}
      onChange={(e:React.ChangeEvent<HTMLSelectElement>):void=>setSelectedCity(e.target.value)}
      >
        <option value="">Selcet city</option>
        {countries[idx]?.cities?.map((city:string, index:number)=>(

          <option key={index} value={city}>{city}</option>
        ))}
        </select>
    </div>
  );
}

export default App;
