import React from "react";
import "./Form.css";

const Form = React.forwardRef((props,ref) => {
  return (
    <form onSubmit={props.getRecipe} className="form-input">
      <input
        ref={ref}
        type="text"
        name="recipeName"
        placeholder="Type ingredients separate with a comma..."
      />
      <button type="submit" className="form-button">
        Search
      </button>
    </form>
  );
});

export default Form;
