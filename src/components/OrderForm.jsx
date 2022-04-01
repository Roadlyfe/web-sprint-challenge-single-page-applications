import React from "react";
import { useParams } from "react-router-dom";

const OrderForm = () => {

    const {pizza} = useParams()

    return (
        <>
            <h2>Order Pizza {pizza}</h2>
        </>
    )
}

export default OrderForm;