import React from "react";

export default function Lib({ lib }) {
  // TODO: display gtihub stats (and repo link ), filetype logo, link name to homepage

  return (
    <div>
      <h1>{lib.name}</h1>
      <sup>
        {lib.version} - {lib.filename}
      </sup>
      <p>{lib.description}</p>
      <p>{lib.latest}</p>
      <hr />
    </div>
  );
}
