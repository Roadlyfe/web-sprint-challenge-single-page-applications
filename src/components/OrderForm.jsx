import React from "react";
import { useParams, useHistory } from "react-router-dom";

const OrderForm = () => {

    const {pizza} = useParams()
    const history = useHistory()

    const SubmitHandler = (e) => {
        e.preventDefault()
        history.push("/order-pizza")
    }
   
    return (
        <section className="orderForm">
            <h2>Cool Cats Love Pizza {pizza}</h2>
           <aside>
                <img src="/assets/spacekitten.jpg" alt="a dog wearing a chef's hat in front  of a pizza" /> 
                </aside>
            <article>
            <form onSubmit={SubmitHandler}>
                {/* <button type="submit">Show me the money!</button>
                <label>
                    Name:
                    <input type="text" name="name   " id="name-input" />
                </label> */}
            </form>

            </article>
        </section>
    )
    
}

export default OrderForm;