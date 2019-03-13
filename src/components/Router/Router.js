import React from "react";
import App from "../../App";
import RecipeDetail from "../Recipe/RecipeDetail";
import { BrowserRouter, Route } from "react-router-dom";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Route path="/" exact component={App} />
      <Route path="/recipe/:id" component={RecipeDetail} />
    </div>
  </BrowserRouter>
);

export default AppRouter;
