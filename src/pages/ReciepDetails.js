import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ReciepDetails() {
  let id = useLocation().pathname.split("/")[2];

  let [recipedetails, setRecipedetails] = useState({});
  let [ingredients, setIngredients] = useState([]);
  let [instructions, setInstructions] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setRecipedetails(data);
        setIngredients(data["ingredients"]);
        setInstructions(data["instructions"]);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, [id]);

  return (
    <div>
      <div className="uk-container">
        <div data-uk-grid>
          <div className="uk-width-1-2@s">
            <div>
              <img
                className="uk-border-rounded-large"
                src={recipedetails.image}
                alt="Recipe"
              />
            </div>
          </div>
          <div className="uk-width-expand@s uk-flex uk-flex-middle">
            <div>
              <h1>{recipedetails.name}</h1>
              <h4>Ingredients :</h4>
              <ul>
                {ingredients.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
              <div
                className="uk-margin-medium-top uk-child-width-expand uk-text-center uk-grid-divider"
                data-uk-grid
              >
                <div>
                  <span data-uk-icon="icon: clock; ratio: 1.4" />
                  <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">
                    Active Time
                  </h5>
                  <span className="uk-text-small">
                    {recipedetails.prepTimeMinutes} mins
                  </span>
                </div>
                <div>
                  <span data-uk-icon="icon: future; ratio: 1.4" />
                  <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">
                    Total Time
                  </h5>
                  <span className="uk-text-small">
                    {recipedetails.cookTimeMinutes} mins
                  </span>
                </div>
                <div>
                  <span data-uk-icon="icon: users; ratio: 1.4" />
                  <h5 className="uk-text-500 uk-margin-small-top uk-margin-remove-bottom">
                    Yield
                  </h5>
                  <span className="uk-text-small">
                    Serves {recipedetails.servings}
                  </span>
                </div>
              </div>
              <hr />
              <div data-uk-grid>
                <div className="uk-width-auto@s uk-text-small">
                  <p className="uk-margin-small-top uk-margin-remove-bottom">
                    Created by <a href="#">Alex Williamns</a>
                  </p>
                  <span className="uk-text-muted">21 recipes</span>
                </div>
                <div className="uk-width-expand@s uk-flex uk-flex-middle uk-flex-right@s">
                  <a
                    href="#"
                    className="uk-icon-link"
                    data-uk-icon="icon: plus-circle; ratio: 1.2"
                    data-uk-tooltip="title: Save Recipe"
                  />
                  <a
                    href="#"
                    className="uk-icon-link uk-margin-left"
                    data-uk-icon="icon: cart; ratio: 1.2"
                    data-uk-tooltip="title: Shopping List"
                  />
                  <a
                    href="#"
                    className="uk-icon-link uk-margin-left"
                    data-uk-icon="icon: print; ratio: 1.2"
                    data-uk-tooltip="title: Print Recipe"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="uk-section uk-section-default">
        <div className="uk-container uk-container-small">
          <div className="uk-grid-large" data-uk-grid>
            <div className="uk-width-expand@m">
              <div className="uk-article">
                <h3>How to Make It</h3>
                {instructions.map((value, index) => (
                  <div
                    key={index}
                    id={`step-${index + 1}`}
                    className="uk-grid-small uk-margin-medium-top"
                    data-uk-grid
                  >
                    <div className="uk-width-auto">
                      <a
                        href="#"
                        className="uk-step-icon"
                        data-uk-icon="icon: check; ratio: 0.8"
                        data-uk-toggle={`target: #step-${
                          index + 1
                        }; cls: uk-step-active`}
                      />
                    </div>
                    <div className="uk-width-expand">
                      <h5
                        className="uk-step-title uk-text-500 uk-text-uppercase uk-text-primary"
                        data-uk-leader="fill:—"
                      >
                        {index + 1}. Step
                      </h5>
                      <div className="uk-step-content">{value}</div>
                    </div>
                  </div>
                ))}
                <hr className="uk-margin-medium-top uk-margin-large-bottom" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
