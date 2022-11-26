import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { initializePage } from "./services/pageInitService";
import MainPage from "./pages/main-page/MainPage";
import { PageIdentity } from "./models/pageIdentiy.model";

function App() {
  const [pageIdentifier, setPageIdentifier] = useState<PageIdentity>(undefined);
  console.log(`The current page ID is ${pageIdentifier}`);

  useEffect(() => {
    initializePage({ pageRoute: 1 }, setPageIdentifier);
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
