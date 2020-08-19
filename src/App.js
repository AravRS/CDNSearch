import React, { useState } from "react";
import useFetchLibs from "./useFetchLibs";
import SearchForm from "./SearchForm";
import Lib from "./Lib";

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
      <SearchForm params={params} onParamChange={handleParamChange} />

      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}

      {libs.results &&
        libs.results.map((lib) => {
          return <Lib lib={lib} />;
        })}

      <h3>
        Showing {libs.total} / {libs.available}
      </h3>
    </div>
  );
}

export default App;
