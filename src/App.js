import React, { useState } from "react";
import {Switch, Route, Link } from "react-router-dom";
import OrderForm from "./components/OrderForm";
import "./App.css"
import PizzaForm from "./components/PizzaForm";
function App() {
const date = new Date 
const [year, setYear] = useState(date.getFullYear())





return (
    <>
    <header>
      <img src="/Assets/jaws.jpg" alt="pizza logo"/> 
      <Link to="/">Home</Link>
      {/* <Link to="/pizza">Pizza!</Link> */}
      <Link to="/pizza" id="order-pizza">Order Your Pizza!</Link>
     

    </header>
      <main>
        <Switch>
          <Route exact path="/">
           <section className="home">
           <h2>Bloomtech Eats!</h2>
           <form className="homeBtn" action="/order-pizza">
              <input type="submit" value="Order your Pizza"/>
            </form>
            <img src="/assets/spacecat.jpg" alt="cat with a piece of pizza on it's head." />
           </section>
        </Route>
        <Route exact path="/order-pizza">
           <OrderForm />
        </Route>
        <Route exact path="/pizza">
            <PizzaForm id="pizza-form" />
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
