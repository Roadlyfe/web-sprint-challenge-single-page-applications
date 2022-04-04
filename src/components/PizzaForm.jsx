import React, { useState } from "react";
import * as yup from "yup";


const initialFormValues ={
    instructions: "", 
    name: "", 
    pepperoni: false,
    mushrooms: false, 
    cheese: false,
    gluten: false,
    size: "",
}



const PizzaForm = (props) => {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props

// const [form, setForm] = useState({})    

   
  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value, type } = evt.target
    console.log("inside onchange", name, value)
    change(name, value)
  }
    return (

        <section className="pizzaForm-container">
           <aside>
                <img src="/assets/fire.jpg" alt="a dog wearing a chef's hat in front of a pizza" /> 
                </aside>
            <article>
            <h2>YUMMMMM</h2>
            <div className='errors'>
          
          <div>{errors.name}</div>
        
        </div>
        
            <form id="pizza-form">
                <button type="submit">Show me the money!</button><br/><br/>
                <label>Special Instructions: 
                    <input   
                    value={values.instructions}
                    onChange={onChange}
                    name='instructions'
                    type='text'
                    id="special-text"
                />
                </label><br/>
                <br/>
                <label> Tell Me Your Name: 
                <input
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                    id="name-input"
                />
                </label><br/><br/>
                <label>Pepperoni!     
                <input 
                    value={values.pepperoni}
                    onChange={onChange}
                    name='pepperoni'
                    type='checkbox'
                    id=""
                />
                </label>
                <label>Gluten-Free-Crust     
                <input 
                    value={values.gluten}
                    onChange={onChange}
                    name='gluten'
                    type='checkbox'
                    id=""
                />
                </label>
                <label>Mushrooms!   
                <input 
                    value={values.mushrooms}
                    onChange={onChange}
                    name='mushrooms'
                    type='checkbox'
                    id=""
                />
                </label>
                <label>Vegan Cheese?    
                <input 
                    value={values.cheese}
                    onChange={onChange}
                    name='cheese'
                    type='checkbox'
                    id=""
                />
                </label><br/><br/>
                <label>What Size Would You Like?
          <select
            onChange={onChange}
            value={values.role}
            name='size'
            id="size-dropdown"
          >
            <option value=''>- Tell Me That You Love Me -</option>
            <option value='giant'>Giant</option>
            <option value='uge'>UGE</option>
            <option value='colossal'>Colossal</option>
          </select>
        </label>
            </form>

                </article>
        </section>
    )
    
}

export default PizzaForm;