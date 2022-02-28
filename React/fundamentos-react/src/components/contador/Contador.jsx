import React from "react";

import Display from "./Display";
import Form from "./Form";
import Buttons from "./Buttons";

class Contador extends React.Component{

    state = {
        number: this.props.numberInitial || 0,
        step: this.props.step || 1
    }

    increment = () => {
        this.setState({
            number: this.state.number + this.state.step
        });
    }

    decrement = () => {
        this.setState({
            number: this.state.number - this.state.step
        });
    }

    setStep = (newStep) => {
        this.setState({
            step: newStep
        });
    }

    render(){
        return (
            <>
                <h2>Componente baseado em classe - Contador</h2>
                <Display number={this.state.number}></Display>

                <Form step={this.state.step} setStep={this.setStep}></Form>

                <Buttons increment={this.increment} decrement={this.decrement}></Buttons>
            </>
        );
    }
}

export default Contador;