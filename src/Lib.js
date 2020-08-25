import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ReactTooltip from "react-tooltip";
import "./Libs.css";

export default function Lib({ lib }) {
  // TODO: display gtihub stats

  return (
    <div className="libs-container">
      <div className="libs-main">
        <div className="libs-header">
          <a
            className="libs-name glow"
            href={lib.homepage}
            target="_blank"
            rel="noopener noreferrer"
          >
            {lib.name}
          </a>
        </div>
        <div className="libs-info">
          <span className="libs-version">{lib.version}</span> -{" "}
          <span className={lib.fileType === "js" ? "js" : "css"}>
            {lib.filename}
          </span>
        </div>
        <div className="libs-description">
          <p>{lib.description}</p>
        </div>
      </div>

      <CopyToClipboard onCopy="" text={lib.latest}>
        <div
          className={
            "glow btn " + (lib.fileType === "js" ? "js-btn" : "css-btn")
          }
          data-tip
          data-for="copy-script"
        >
          <i className="fas fa-code fa-3x"></i>
        </div>
      </CopyToClipboard>

      <ReactTooltip
        id="copy-script"
        place="bottom"
        type="light"
        effect="solid"
        event="mouseenter"
        eventOff="mouseleave click"
        className="tooltip"
      >
        <span>Click to copy!</span>
      </ReactTooltip>
    </div>
  );
}
