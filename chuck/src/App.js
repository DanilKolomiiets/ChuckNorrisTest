import "./App.css";
import { useEffect, useState } from "react";
import CategoriesList from "./Components/CategoriesList";

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App-Wrapper">
      {data ? (
        <div className="App">
          <header className="App-header">
            <div className="App-header-content">
              <img src={data.icon_url} alt="Chuck Norris Face" />
              <p>Chuck Norris</p>
            </div>
          </header>
          <article>
            <CategoriesList />
          </article>
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
};

export default App;
