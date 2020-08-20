import React from "react";
import "./SearchForm.css";

export default function SearchForm({ params, onParamChange }) {
  return (
    <form>
      <input
        type="text"
        name="search"
        className="search"
        placeholder="Search"
        onChange={onParamChange}
        value={params.search}
        autoFocus
      />
    </form>
  );
}
