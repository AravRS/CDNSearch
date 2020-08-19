import React from "react";

export default function SearchForm({ params, onParamChange }) {
  return (
    <form>
      <input
        type="text"
        name="search"
        placeholder="Search"
        onChange={onParamChange}
        value={params.search}
      />
    </form>
  );
}
