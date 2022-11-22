import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./ux-elements/layout/Layout";
import { useState } from "react";

function App() {
  const [pageIntentifier, setPageIndentifier] = useState(1);
  console.log(`The page intendity is currently ${pageIntentifier}`);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              pageIntentifier={pageIntentifier}
              setPageIndentifier={setPageIndentifier}
            />
          }
        />
      </Routes>
      <button
        onClick={() => {
          setPageIndentifier(1);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
