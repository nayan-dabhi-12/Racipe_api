import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function SearchResults() {
  let [apidata, setApidata] = useState([]);

  let query = new URLSearchParams(useLocation().search).get("query") || "";
  const api = `https://dummyjson.com/recipes/search?q=${query}`;

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setApidata(data["recipes"] || []));
  }, [api]);

  return (
    <div>
      <div className="uk-section uk-section-default uk-padding-remove-top">
        <div className="uk-container">
          <div data-uk-grid></div>
          <div className="uk-section uk-section-default">
            <div className="uk-container">
              <div data-uk-grid>
                <div className="uk-width-expand@m">
                  <div data-uk-grid></div>
                  <div
                    className="uk-child-width-1-2 uk-child-width-1-3@s"
                    data-uk-grid
                  >
                    {apidata.length > 0 ? (
                      apidata.map((value) => (
                        <div key={value.id}>
                          <div className="uk-card">
                            <div className="uk-card-media-top uk-inline uk-light">
                              <img
                                className="uk-border-rounded-medium"
                                src={value.image}
                                alt="Recipe"
                              />
                              <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                              <div className="uk-position-xsmall uk-position-top-right">
                                <a
                                  href="#"
                                  className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                                  data-uk-icon="heart"
                                />
                              </div>
                            </div>
                            <div>
                              <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                                {value.name}
                              </h3>
                              <div
                                className="uk-text-xsmall uk-text-muted"
                                data-uk-grid
                              >
                                <div className="uk-width-auto uk-flex uk-flex-middle">
                                  <span
                                    className="uk-rating-filled"
                                    data-uk-icon="icon: star; ratio: 0.7"
                                  />
                                  <span className="uk-margin-xsmall-left">
                                    {value.rating}
                                  </span>
                                  <span>({value.reviewCount})</span>
                                </div>
                                <div className="uk-width-expand uk-text-right"></div>
                              </div>
                            </div>
                            <Link
                              to={`/recipedetails/${value.id}`}
                              className="uk-position-cover"
                            />
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No recipes found</p>
                    )}
                  </div>
                  <div className="uk-margin-large-top uk-text-small">
                    <ul
                      className="uk-pagination uk-flex-center uk-text-500 uk-margin-remove"
                      data-uk-margin
                    >
                      <li>
                        <a href="#">
                          <span data-uk-pagination-previous />
                        </a>
                      </li>
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li className="uk-active">
                        <span>2</span>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">4</a>
                      </li>
                      <li>
                        <a href="#">
                          <span data-uk-pagination-next />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
