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
          Showing {libs.total} / {libs.available}
        </div>
      </header>

      <main>
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error...</h1>}

        {libs.results &&
          libs.results.map((lib) => {
            return <Lib lib={lib} />;
          })}
      </main>

      <footer className="footer"></footer>
    </div>
  );
}

export default App;
