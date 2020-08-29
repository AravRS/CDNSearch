import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ReactTooltip from "react-tooltip";
import "./Libs.css";

export default function Lib({ lib }) {
  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num;
  };

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
          <a
            className="libs-github glow"
            href={`https://github.com/${lib.github.user}/${lib.github.repo}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
            {formatNumber(lib.github.stargazers_count)}
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

      <div className="copy-btns">
        <CopyToClipboard onCopy="" text={lib.latest}>
          <div
            className={
              "url glow " +
              (lib.fileType === "js" ? "js-url-btn" : "css-url-btn")
            }
            data-tip
            data-for="copy-url"
          >
            <i className="fas fa-link fa-2x"></i>
          </div>
        </CopyToClipboard>

        <CopyToClipboard
          onCopy=""
          text={
            lib.fileType === "js"
              ? `<script src="${lib.latest}"></script>`
              : `<link rel="stylesheet" href="${lib.latest}" />`
          }
        >
          <div
            className={
              "tag glow " + (lib.fileType === "js" ? "js-btn" : "css-btn")
            }
            data-tip
            data-for="copy-tag"
          >
            <i className="fas fa-code fa-2x"></i>
          </div>
        </CopyToClipboard>

        <CopyToClipboard onCopy="" text={lib.sri}>
          <div
            className={
              "sri glow " +
              (lib.fileType === "js" ? "js-sri-btn" : "css-sri-btn")
            }
            data-tip
            data-for="copy-sri"
          >
            <i className="fas fa-shield-alt fa-2x"></i>
          </div>
        </CopyToClipboard>
      </div>

      <ReactTooltip
        id="copy-url"
        place="bottom"
        type="light"
        effect="solid"
        event="mouseenter"
        eventOff="mouseleave click"
        className="tooltip"
      >
        <span>Copy URL</span>
      </ReactTooltip>
      <ReactTooltip
        id="copy-tag"
        place="bottom"
        type="light"
        effect="solid"
        event="mouseenter"
        eventOff="mouseleave click"
        className="tooltip"
      >
        <span>Copy Tag</span>
      </ReactTooltip>
      <ReactTooltip
        id="copy-sri"
        place="bottom"
        type="light"
        effect="solid"
        event="mouseenter"
        eventOff="mouseleave click"
        className="tooltip"
      >
        <span>Copy SRI</span>
      </ReactTooltip>
    </div>
  );
}
