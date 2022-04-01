import React, { useState } from "react";

const initialFormValues ={
    instructions: "", 
    name: "", 
    pepperoni: false,
    mushrooms: false, 
    cheese: false,
    gluten: false
}

const PizzaForm = () => {

const [form, setForm] = useState({})    

   
    return (
        <section className="pizzaForm">
           <aside>
                <img src="/assets/fire.jpg" alt="a dog wearing a chef's hat in front  of a pizza" /> 
                </aside>
            <article>
            <h2>YUMMMMM</h2>
            <form id="pizza-form">
                <button type="submit">Show me the money!</button><br/><br/>
                <label>Special Instructions:
                    <input type="text" name="instructions" id="special-text" />
                </label><br/>
                <label>Tell Me Your Name:
                    <input type="text" name="name" id="name-input" />
                </label><br/><br/>
                <label>
                    Pepperoni!
                    <input type="checkbox" name="pepperoni" id="" /><br/>
                    Mushrooms! 
                    <input type="checkbox" name="mushrooms" id="" /><br/>
                    Vegan Cheese please!
                    <input type="checkbox" name="cheese" id="" /><br/>
                    Gluten-free!
                    <input type="checkbox" name="gluten" id="" />
                </label>
            </form>

            </article>
        </section>
    )
    
}

export default PizzaForm;