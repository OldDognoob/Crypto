import React, { useState, useEffect } from "react";
//axios
import axios from "axios";
import "./App.css";
import Crypto from './Crypto';

function App() {
  const [crypto, setCrypto] = useState([]);
  const [search, setSearch]=useState('');

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setCrypto(response.data);
        // console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange=e=>{
    setSearch(e.target.value)
  }

  const filteredCrypto = crypto.filter(crypto => {
  crypto.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="crypto-app">
      <div className="crypto-search">
        <h1 className="crypto-text">Search a crypto currency</h1>
        <form>
          <input type="text" placeholder="Search" className="crypto-input" onChange={handleChange}/>
        </form>
      </div>
      {filteredCrypto.map(crypto =>{
        
      })}

    </div>

  );
}

export default App;
