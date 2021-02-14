//importing React Router
import { BrowserRouter, Route } from "react-router-dom";

//Importing Components
import Customers from "./components/customers/customers";
import Home from "./components/Home/home.js";
import Products from "./components/products/products";

//Creating Routes
const Router = () => {
  return (
    <BrowserRouter>
      <switch>
        <Route path="/" exact component={Home} />
        <Route path="/customers" exact component={Customers} />
        <Route path="/products" exact component={Products} />
      </switch>
    </BrowserRouter>
  );
};

export default Router;
