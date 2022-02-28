import React from "react";

import "./Calculator.css";
import Button from "../components/Button";
import Display from "../components/Display";

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0,
    displayHistory: '0'
}

class Calculator extends React.Component{

    state = {...initialState}

    constructor(props){
        super(props);
        this.addDigit = this.addDigit.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.clearMemory = this.clearMemory.bind(this);
    }

    clearMemory() {
        this.setState({...initialState})
    }

    setOperation(operation) {
        if(this.state.current === 0){
            this.setState({
                clearDisplay: true,
                operation,
                current: 1,
                history: `${this.state.displayValue} ${operation}`
            })
        }else{
            const equals = operation === '=';
            const currentOperation = this.state.operation;

            const values = [...this.state.values];
            
            try{
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
            }catch(e){
                values[0] = this.state.values[0]
            }
            values[1] = 0;

            this.setState({
                displayValue: values[0],
                clearDisplay: !equals,
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                values,
                history: values[0]
            })
        }
    }

    addDigit(n) {
        if(n === '.' && this.state.displayValue.includes('.')) return;

        const clearDisplay = this.state.displayValue === "0" || this.state.clearDisplay;
        const curretValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = curretValue + n;

        this.setState({
            displayValue,
            clearDisplay: false
        });

        if(n != '.'){
            const i = this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue;
            this.setState({
                values
            });
        }
    }

    render(){
        return (
            <div className="calculator">
                <Display history={this.state.history} value={this.state.displayValue}></Display>
                <Button label="AC" click={this.clearMemory} triple></Button>
                <Button label="/" click={this.setOperation} operation></Button>
                <Button label="7" click={this.addDigit}></Button>
                <Button label="8" click={this.addDigit}></Button>
                <Button label="9" click={this.addDigit}></Button>
                <Button label="*" click={this.setOperation} operation></Button>
                <Button label="4" click={this.addDigit}></Button>
                <Button label="5" click={this.addDigit}></Button>
                <Button label="6" click={this.addDigit}></Button>
                <Button label="-" click={this.setOperation} operation></Button>
                <Button label="1" click={this.addDigit}></Button>
                <Button label="2" click={this.addDigit}></Button>
                <Button label="3" click={this.addDigit}></Button>
                <Button label="+" click={this.setOperation} operation></Button>
                <Button label="0" click={this.addDigit} double></Button>
                <Button label="." click={this.addDigit}></Button>
                <Button label="=" click={this.setOperation} operation></Button>
            </div>
        );
    }
}

export default Calculator;