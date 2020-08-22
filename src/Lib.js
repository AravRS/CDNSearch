import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ReactTooltip from "react-tooltip";
import "./Libs.css";

export default function Lib({ lib }) {
  // TODO: display gtihub stats (and repo link ), filetype logo, link name to homepage

  return (
    <div className="libs-container">
      <div className="libs-info">
        <h1 className="libs-name">{lib.name}</h1>
        <sup>
          {lib.version} - {lib.filename}
        </sup>
        <p>{lib.description}</p>
      </div>

      <CopyToClipboard onCopy="" text={lib.latest}>
        <button data-tip="React-tooltip" data-for="copy-script">
          Copy
        </button>
      </CopyToClipboard>

      <ReactTooltip
        id="copy-script"
        place="bottom"
        type="light"
        effect="solid"
        className="tooltip"
      >
        <span>Click to copy!</span>
      </ReactTooltip>
    </div>
  );
}
