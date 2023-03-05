import React, { useState } from "react";
import "./serchinput.css";

export default function Searchbutton({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  function handleChange(event) {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleChange}
        className="searchinput"
      />
    </div>
  );
}
