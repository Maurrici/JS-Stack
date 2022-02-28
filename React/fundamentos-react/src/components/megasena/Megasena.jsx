import React, { useState } from "react";

import generateNumbers from "./generateNumbers";

import FormQuantity from "./FormQuantity";
import FormInterval from "./FormInterval";
import DisplayNumbers from "./DisplayNumbers";

export default props => {
    const [state, setState] = useState({
        quantity: props.quantity || 6,
        min: props.min || 1,
        max: props.max || 60,
        numbers: []
    });

    const setQuantity = (newQuantity) =>{
        setState({
            quantity: newQuantity,
            min: state.min,
            max: state.max,
            numbers: state.numbers
        });
    }

    const setMin = (min) =>{
        setState({
            quantity: state.quantity,
            min: min,
            max: state.max,
            numbers: state.numbers
        });
    }

    const setMax = (max) =>{
        setState({
            quantity: state.quantity,
            min: state.min,
            max: max,
            numbers: state.numbers
        });
    }

    const onGenerate = () => {
        const numbers = generateNumbers(state.quantity, state.min, state.max);

        setState({
            quantity: state.quantity,
            min: state.min,
            max: state.max,
            numbers: numbers
        })
    }

    return(
        <div>
            <h2>Sorteio de números Mega Sena</h2>
            <FormQuantity quantity={state.quantity} onQuantity={setQuantity}></FormQuantity>
            <FormInterval min={state.min} max={state.max} onMin={setMin} onMax={setMax}></FormInterval>
            <DisplayNumbers numbers={state.numbers} onGenerate={onGenerate}></DisplayNumbers>
        </div>
    );
}