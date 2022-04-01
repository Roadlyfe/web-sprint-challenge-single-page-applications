import React, { useState } from "react";
import {Switch, Route, Link } from "react-router-dom";
import OrderForm from "./components/OrderForm";
import "./App.css"

function App() {
const date = new Date 
const [year, setYear] = useState(date.getFullYear())





return (
    <>
    <header>
      <Link to="/">Home</Link>
      <Link to="/order-pizza/">Order Pizza</Link>
      <Link to="/myorder">My Order</Link>
     

    </header>
      <main>
        <Switch>
          <Route exact path="/">
            <h2>Home</h2>
        </Route>
        <Route exact path="/order/:pizza">
           <OrderForm />
        </Route>
        <Route exact path="/myorder">
            <h2>My Order</h2>
        </Route>
      </Switch>
    </main>
    <footer>
      <p>&copy; Adam Smith {year}</p>
    </footer>
      
    </>
  );
};
export default App;
