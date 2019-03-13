import React from "react";
import { Link } from "react-router-dom";
import "./Recipe.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

const Recipes = props => (
  <div className="container">
    <div className="row">
      {props.recipes &&
        props.recipes.map(recipe => {
          return (
            <div
              key={recipe.totalWeight}
              className="col-sm-4"
              style={{ marginBottom: "20px" }}
            >
              <Card className="recipes-box">
                <CardImg
                  width="100%"
                  height="220px"  
                  src={recipe.image}
                  alt={recipe.label}
                />
                <CardBody>
                  <CardTitle className="recipes-title">
                    <h5>
                      {recipe.label.length > 16
                        ? `${recipe.label.substring(0, 20)}...`
                        : `${recipe.label}` }
                    </h5>
                  </CardTitle>
                  <CardText>Source by: {recipe.source}</CardText>
                  <Link
                    to={{ // remove white space from router
                      pathname: `/recipe/${recipe.label.split(" ").join("")}`,
                      state: { recipe }
                    }}
                  >
                    <Button className="active-recipe__button">View Recipe Detail</Button>
                  </Link>
                </CardBody>
              </Card>
            </div>
          );
        })}
    </div>
  </div>
);

export default Recipes;
