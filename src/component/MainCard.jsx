import React, { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import "./MainCard.css";
import Searchbutton from "./Searchbutton";

export const MainCard = () => {
  const [Contries, setContries] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const requestDAta = async () => {
    const countries = await fetch("https://restcountries.com/v3.1/all");
    const contriesjson = await countries.json();
    setContries(contriesjson);
  };
  useEffect(() => {
    requestDAta();
  }, []);

  function handleSearch(query) {
    const newData = Contries.filter((Contries) =>
      Contries.name.common.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(newData);
  }

  return (
    <>
      <Searchbutton onSearch={handleSearch} />
      <section className="cardcontainer">
        {filteredData.map((item) => {
          return <Card {...item} />;
        })}
      </section>
    </>
  );
};
