import React, { useState, useEffect } from "react";
import {Switch, Route, Link } from "react-router-dom";
import OrderForm from "./OrderForm";
import "./App.css"
import PizzaForm from "./PizzaForm";
import * as yup from "yup";
import schema from "./formSchema";
import axios from "axios";


function App() {
const date = new Date 
const [year, setYear] = useState(date.getFullYear())

const initialFormValues = {

  name: ''
}
const initialFormErrors = {
  name: '',
}
const initialDisabled = true
const [formValues, setFormValues] = useState(initialFormValues) 
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled) 
const [users, setUsers] = useState([]);

const validate = (name, value) => {
  yup.reach(schema, name)
    .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
}

const inputChange = (name, value) => {
  validate(name, value);
  setFormValues({
    ...formValues,
    [name]: value 
  })
}

const formSubmit = () => {
  const newFriend = {
    name: formValues.name.trim(),
  }
  
  // postNewFriend(newFriend);
}

 const handleSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
    .then(res => {
      setUsers([ res.data, ...users ])
    })
    .catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  }

// axios.post("http://buddies.com/api/friends", newFriend)
// .then(res => {
//   setFriends([res.data, ...friends]);
// }).catch(err => console.error(err))
// .finally(() => setFormValues(initialFormValues))
// }
 
const handleChange = (name, value) => {
  validate(name, value);
  setFormValues({ ...setFormValues, [name]: value })
}

return (
    <>
    <header>
      {/* pizza jaws image my DanielBThorne */}
      <img src="/Assets/jaws.jpg" alt="pizza logo"/> 
      <Link to="/">Home</Link>
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
            <img src="/assets/spacecat.jpg" alt="Cat with a piece of pizza on it's head." />
           </section>
        </Route>
        <Route exact path="/order-pizza">
           <OrderForm />
        </Route>
        <Route exact path="/pizza">
            <PizzaForm  
            values={formValues}
            change={handleChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
            />
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
