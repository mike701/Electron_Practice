import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {

  

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <h1>One Page</h1>
          }
        />
      </Routes>
    </div>
  );
}

export default App;