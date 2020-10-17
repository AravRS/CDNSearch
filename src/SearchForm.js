import React from "react";
import "./SearchForm.css";
import { PropTypes } from "prop-types";

export default function SearchForm({ params, onParamChange }) {
  return (
    <form>
      <input
        type="text"
        name="search"
        className="search"
        placeholder="Search"
        onChange={(e) => onParamChange(e)}
        value={params.search || ""}
        autoFocus
      />
    </form>
  );
}
SearchForm.propTypes = {
  params: PropTypes.object,
  onParamChange: PropTypes.func,
};
