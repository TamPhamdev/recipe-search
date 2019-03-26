import "./App.css";
import { Spinner } from "reactstrap";
import React, { Component } from "react";
import Form from "./components/Form/Form";
import Recipes from "./components/Recipe/Recipe";

const APP_KEY = process.env.REACT_APP_KEY;
const APP_ID = process.env.REACT_APP_ID;

class App extends Component {
  input = [];
  state = {
    recipes: [],
    loading: false
  };
  // submit form & fetch data from API
  getRecipe = async e => {
    this.setState({ loading: true });
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch(
      `https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=9`
    ).then(res => res.json());
    let data = api_call.hits.map(value => value.recipe);
    this.setState({ recipes: data, loading: false });
  };

  focus = () => this.input[0].focus();
  inputRef = ref => this.input.push(ref);
  // get data from localStorage
  componentDidMount() {
    this.focus();
    const recipes = JSON.parse(localStorage.getItem("recipes"));
    this.setState({ recipes });
  }
  //set data to localStorage
  componentDidUpdate() {
    localStorage.setItem("recipes", JSON.stringify(this.state.recipes));
  }

  render() {
    const { loading, recipes } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Search for recipe with React</h1>
        </header>
        {loading ? (
          <Spinner className="Spinner" style={{marginTop: '20%'}}/>
        ) : (
          <div width="100%">
            <Form getRecipe={this.getRecipe} ref={this.inputRef} />
            { !recipes.length  ? (
              <h4> Your search return nothing !!! !!!</h4>
            ) : (
              <Recipes recipes={this.state.recipes} />
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
