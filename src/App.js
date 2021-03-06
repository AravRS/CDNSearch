import React, { useState } from "react";
import useFetchLibs from "./useFetchLibs";
import SearchForm from "./SearchForm";
import Lib from "./Lib";
import "./App.css";

function App() {
  const [params, setParams] = useState({});
  const { libs, loading, error } = useFetchLibs(params);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setParams((prevPrams) => {
      return { ...prevPrams, [param]: value };
    });
  }

  return (
    <div>
      <header className="header">
        <h1 className="header-title">CDN SEARCH</h1>
        <SearchForm params={params} onParamChange={handleParamChange} />
        <div className="info-text">
          {loading && <span>Loading...</span>}
          {error && <span className="error-text">Error!</span>}
          {!loading && !error && (
            <span>
              Showing {libs.total} / {libs.available}
            </span>
          )}
        </div>
      </header>

      <main>
        {libs.results &&
          libs.results.map((lib) => {
            return <Lib key={lib.name} lib={lib} />;
          })}
      </main>

      <footer className="footer">
        <div>
          <a
            href="https://cdnsearch.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas glow fa-globe"></i>
          </a>
          &nbsp;
          <a
            href="https://github.com/AravRS/CDNSearch/releases"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab glow fa-chrome"></i>
          </a>
        </div>
        <div>
          <a
            href="https://github.com/AravRS/CDNSearch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab glow fa-github"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
