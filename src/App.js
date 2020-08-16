import React, { useState } from "react";
import useFetchLibs from "./useFetchLibs";
import Lib from "./Lib";

function App() {
  const [params, setParams] = useState({});
  const { libs, loading, error } = useFetchLibs(params);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}

      {libs.results &&
        libs.results.map((lib) => {
          return <Lib lib={lib} />;
        })}

      {/* {console.log(libs.results)} */}

      <h3>
        Showing {libs.total} / {libs.available}
      </h3>
    </div>
  );
}

export default App;
