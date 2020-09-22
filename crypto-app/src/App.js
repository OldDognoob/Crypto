import React, { useState, useEffect } from "react";
//axios
import axios from "axios";
import "./App.css";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setCoins(response.data);
        // console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="crypto-app">
      <div className="crypto-search">
        <h1 className="crypto-text">Search a crypto currency</h1>
        <form>
          <input type="text" placeholder="Search" className="crypto-input"/>
        </form>
      </div>
      
    </div>

  );
}

export default App;
