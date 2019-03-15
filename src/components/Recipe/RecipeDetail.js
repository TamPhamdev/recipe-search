import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import "./RecipeDetail.css";

class RecipeDetail extends Component {
  render() {
    let { recipe } = this.props.location.state;
    console.log("object :", recipe);
    return (
      <div className="container" style={{marginTop: "50px"}}>
        <div className="row">
          <div className="col-sm-6 Text-center ">
            <h4 className="Title">{recipe.label}</h4>
            <p>Provide by {recipe.source}</p>
            <img src={recipe.image} alt={recipe.label} style={{width:"50%"}} />
          </div>
          <div className="col-sm-6 ">
            <h3>{recipe.ingredientLines.length} Ingredients</h3>
            <ul className="list-ul">
              {recipe.ingredientLines.map((data,index) => (
                <li key={index.toString()} className="list-li">{data}</li>
              ))}
            </ul>
            <h3>Nutrition</h3>
            <p>Total calories: {Math.floor(recipe.calories)} </p>
            <p>
              Caloreis/Serving: {Math.floor(recipe.calories / recipe.yield)}
            </p>
            <p>Serving: {recipe.yield}</p>
          </div>
        </div>
        <div className="row nav-button" style={{padding: "20px 0"}}>
          <Link to="/">
            <Button color="primary"> Back to recipe list</Button>
          </Link>
          <a href={recipe.url}>
            <Button color="success">See full recipe & repartion</Button>
          </a>
        </div>
      </div>
    );
  }
}
export default RecipeDetail;
