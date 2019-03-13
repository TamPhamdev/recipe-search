import React from "react";
import "./Form.css";

const Form = props => {
  return (
    <form onSubmit={props.getRecipe} className="form-input">
      <input
        type="text"
        name="recipeName"
        placeholder="Type here..."
      />
      <button type="submit" className="form-button">
        Search
      </button>
    </form>
  );
};

export default Form;
