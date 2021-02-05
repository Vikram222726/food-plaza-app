import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import axios from "axios";
import URLS from "./comp/urls";
import RecipeDetails from "./comp/recDetail";
import Alert from "./comp/alert";

function App() {
  const [item, setItem] = useState({});
  const [query, setQuery] = useState("");
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);
  const [alert, setAlert] = useState("");

  const APP_ID = "619c77f8";
  const APP_KEY = "9360a0cdb535af26ddc0d78151e62a08";

  const handleSearch = async (q) => {
    if (q !== "") {
      const datas = await axios.get(
        `https://api.edamam.com/search?q=${q}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      if (!datas.data.more) {
        return setAlert("No Food with such name..");
      }
      setItem(datas);
      setAlert("");
      setQuery("");
    } else {
      setAlert("");
      setAlert("Enter your favourite food...");
    }
  };

  const foodName = (id) => {
    return item.data.hits[id - 1].recipe.label;
  };

  const fillImg = (id) => {
    return item.data.hits[id - 1].recipe.image;
  };
  return (
    <div className="App">
      <div className="heading">
        <div className="firstName">
          <div className="HofHead">F</div>
          <div className="o1" />
          <div className="o2" />
          <div className="DofHead">D</div>
        </div>
        <div className="lastName">
          <div className="PofLast">P</div>
          <div className="restofLast">LAZA</div>
        </div>
      </div>
      <div className="headImg"></div>
      <div className="logs">
        <button className="login">Login</button>
        <button className="signup">SignUp</button>
      </div>
      <div className="letsTalk">
        <div className="text">Craving for something Tasty..</div>
        <div className="text2">Order your favourite food NOW!</div>
      </div>
      {query === "" && <Alert alert={alert} />}
      <div className="searchBar">
        <input
          type="text"
          className="search-bar"
          id="inputtext"
          placeholder="Mangwa lo G.."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search" onClick={() => handleSearch(query)}>
          Find Food
        </button>
      </div>
      {item.status !== undefined ? (
        <div>
          <div className="container">
            <div className="row">
              <div className="col cols1">
                <div className="subcol">
                  <div className="foodImg">
                    <img
                      src={fillImg(1)}
                      alt={foodName(1)}
                      style={{ width: "100%", borderRadius: "18px" }}
                    />
                    <div className="foodName">{foodName(1)}</div>
                  </div>
                  <div className="url">
                    <URLS item={item} id={1} />
                  </div>
                  <div className="ingdnt" onClick={() => setShow1(!show1)}>
                    Ingredients
                  </div>
                  {show1 && (
                    <RecipeDetails
                      ingredients={item.data.hits[0].recipe.ingredientLines}
                    />
                  )}
                </div>
              </div>
              <div className="col cols2">
                <div className="subcol">
                  <div className="foodImg">
                    <img
                      src={fillImg(2)}
                      alt={foodName(2)}
                      style={{ width: "100%", borderRadius: "18px" }}
                    />
                    <div className="foodName">{foodName(2)}</div>
                  </div>
                  <div className="url">
                    <URLS item={item} id={2} />
                  </div>
                  <div className="ingdnt" onClick={() => setShow2(!show2)}>
                    Ingredients
                  </div>
                  {show2 && (
                    <RecipeDetails
                      ingredients={item.data.hits[1].recipe.ingredientLines}
                    />
                  )}
                </div>
              </div>
              <div className="col cols1">
                <div className="subcol">
                  <div className="foodImg">
                    <img
                      src={fillImg(3)}
                      alt={foodName(3)}
                      style={{ width: "100%", borderRadius: "18px" }}
                    />
                    <div className="foodName">{foodName(3)}</div>
                  </div>
                  <div className="url">
                    <URLS item={item} id={3} />
                  </div>
                  <div className="ingdnt" onClick={() => setShow3(!show3)}>
                    Ingredients
                  </div>
                  {show3 && (
                    <RecipeDetails
                      ingredients={item.data.hits[2].recipe.ingredientLines}
                    />
                  )}
                </div>
              </div>
              <div className="col cols1">
                <div className="subcol">
                  <div className="foodImg">
                    <img
                      src={fillImg(4)}
                      alt={foodName(4)}
                      style={{ width: "100%", borderRadius: "18px" }}
                    />
                    <div className="foodName">{foodName(4)}</div>
                  </div>
                  <div className="url">
                    <URLS item={item} id={4} />
                  </div>
                  <div className="ingdnt" onClick={() => setShow4(!show4)}>
                    Ingredients
                  </div>
                  {show4 && (
                    <RecipeDetails
                      ingredients={item.data.hits[3].recipe.ingredientLines}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col cols1">
                <div className="subcol">
                  <div className="foodImg">
                    <img
                      src={fillImg(5)}
                      alt={foodName(5)}
                      style={{ width: "100%", borderRadius: "18px" }}
                    />
                    <div className="foodName">{foodName(5)}</div>
                  </div>
                  <div className="url">
                    <URLS item={item} id={5} />
                  </div>
                  <div className="ingdnt" onClick={() => setShow5(!show5)}>
                    Ingredients
                  </div>
                  {show5 && (
                    <RecipeDetails
                      ingredients={item.data.hits[4].recipe.ingredientLines}
                    />
                  )}
                </div>
              </div>
              <div className="col cols2">
                <div className="subcol">
                  <div className="foodImg">
                    <img
                      src={fillImg(6)}
                      alt={foodName(6)}
                      style={{ width: "100%", borderRadius: "18px" }}
                    />
                    <div className="foodName">{foodName(6)}</div>
                  </div>
                  <div className="url">
                    <URLS item={item} id={6} />
                  </div>
                  <div className="ingdnt" onClick={() => setShow6(!show6)}>
                    Ingredients
                  </div>
                  {show6 && (
                    <RecipeDetails
                      ingredients={item.data.hits[5].recipe.ingredientLines}
                    />
                  )}
                </div>
              </div>
              <div className="col cols1">
                <div className="subcol">
                  <div className="foodImg">
                    <img
                      src={fillImg(7)}
                      alt={foodName(7)}
                      style={{ width: "100%", borderRadius: "18px" }}
                    />
                    <div className="foodName">{foodName(7)}</div>
                  </div>
                  <div className="url">
                    <URLS item={item} id={7} />
                  </div>
                  <div className="ingdnt" onClick={() => setShow7(!show7)}>
                    Ingredients
                  </div>
                  {show7 && (
                    <RecipeDetails
                      ingredients={item.data.hits[6].recipe.ingredientLines}
                    />
                  )}
                </div>
              </div>
              <div className="col cols1">
                <div className="subcol">
                  <div className="foodImg">
                    <img
                      src={fillImg(8)}
                      alt={foodName(8)}
                      style={{ width: "100%", borderRadius: "18px" }}
                    />
                    <div className="foodName">{foodName(8)}</div>
                  </div>
                  <div className="url">
                    <URLS item={item} id={8} />
                  </div>
                  <div className="ingdnt" onClick={() => setShow8(!show8)}>
                    Ingredients
                  </div>
                  {show8 && (
                    <RecipeDetails
                      ingredients={item.data.hits[7].recipe.ingredientLines}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col cols1"></div>
              <div className="col cols2">
                <div className="subcol">
                  <div className="foodImg">
                    <img
                      src={fillImg(9)}
                      alt={foodName(9)}
                      style={{ width: "100%", borderRadius: "18px" }}
                    />
                    <div className="foodName">{foodName(9)}</div>
                  </div>
                  <div className="url">
                    <URLS item={item} id={9} />
                  </div>
                  <div className="ingdnt" onClick={() => setShow9(!show9)}>
                    Ingredients
                  </div>
                  {show9 && (
                    <RecipeDetails
                      ingredients={item.data.hits[8].recipe.ingredientLines}
                    />
                  )}
                </div>
              </div>
              <div className="col cols1">
                <div className="subcol">
                  <div className="foodImg">
                    <img
                      src={fillImg(10)}
                      alt={foodName(10)}
                      style={{ width: "100%", borderRadius: "18px" }}
                    />
                    <div
                      className="foodName"
                      onClick={() => setShow10(!show10)}
                    >
                      {foodName(10)}
                    </div>
                  </div>
                  <div className="url">
                    <URLS item={item} id={10} />
                  </div>
                  <div className="ingdnt" onClick={() => setShow10(!show10)}>
                    Ingredients
                  </div>
                  {show10 && (
                    <RecipeDetails
                      ingredients={item.data.hits[9].recipe.ingredientLines}
                    />
                  )}
                </div>
              </div>
              <div className="col cols1"></div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
