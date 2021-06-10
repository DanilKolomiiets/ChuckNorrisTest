import "./CategoriesList.css";
import { useEffect, useState } from "react";
import Quote from "./Quote";

const CategoriesList = () => {
  const [phrase, setPhrase] = useState();
  const [categoriesList, setCategoriesList] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((response) => response.json())
      .then((data) => setCategoriesList(data));
  }, []);

  useEffect(() => {
    if (category === "random" || !category) {
      fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => response.json())
        .then((data) => setPhrase(data.value));
    } else if (category) {
      fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then((response) => response.json())
        .then((data) => setPhrase(data.value));
    }
  }, [category]);

  const findByCategory = (Category) => {
    setCategory(Category);
  };

  const getRandomString = () =>
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  return (
    <div className="Categories-Wrapper">
      {categoriesList ? (
        <div className="Categories-List">
          <h1>Categories</h1>
          <div className="Categories">
            {categoriesList.map((element) => (
              <button
                key={getRandomString()}
                onClick={(e) => {
                  e.preventDefault();
                  findByCategory(element);
                }}
              >
                {element}
              </button>
            ))}
            <button
              key={getRandomString()}
              onClick={(e) => {
                e.preventDefault();
                findByCategory("random");
              }}
            >
              random
            </button>
          </div>
          <Quote quote={phrase} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CategoriesList;
