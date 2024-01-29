import React, { useEffect, useState } from "react";
import axios from "axios";
import "./github.css";
export default function Crypto() {
  const [cryptos, setCrypto] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://openapiv1.coinstats.app/coins?limit=50&currency=INR",
          {
            headers: {
              accept: "application/json",
              "X-API-KEY": "GLoe8TnYaodS/5CfJVQ+/eoSEp3ApyClrAp49af+YJU=",
            },
          }
        );
        setCrypto(response.data.result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "m") {
        document.getElementById("search").focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div>
      <h1>All Cryptocurrencies</h1>
      <div className="search-form">
        <input
          type="text"
          id="search"
          placeholder="Search..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          style={{
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
          }}
        />
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col"> Rank</th>
            <th scope="col">Name</th>
            <th scope="col"> Symbol</th>
            <th scope="col">Market Cap</th>
            <th scope="col">Price</th>
            <th scope="col">Available Supply</th>
            <th scope="col">Volume(24hrs)</th>
          </tr>
        </thead>
        <tbody>
          {cryptos
            .filter((val) => {
              return val.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((val, index) => {
              return (
                <tr key={index}>
                  <td className="rank">{val.rank}</td>
                  <td className="logo">
                    <a href={val.websiteUrl}>
                      <img src={val.icon} alt="logo" width="30px" />
                    </a>

                    <p>{val.name}</p>
                  </td>
                  <td className="symbol">{val.symbol}</td>
                  <td>₹{val.marketCap}</td>
                  <td>₹{val.price.toFixed(2)}</td>
                  <td>{val.availableSupply}</td>
                  <td>{val.volume.toFixed(0)}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
