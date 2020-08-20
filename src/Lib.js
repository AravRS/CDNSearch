import React from "react";
import "./Libs.css";

export default function Lib({ lib }) {
  // TODO: display gtihub stats (and repo link ), filetype logo, link name to homepage

  return (
    <div className="libs-container">
      <h1 className="libs-name">{lib.name}</h1>
      <sup>
        {lib.version} - {lib.filename}
      </sup>
      <p>{lib.description}</p>
      <p>{lib.latest}</p>
    </div>
  );
}
