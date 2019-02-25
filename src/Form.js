import React, { Component } from 'react';
import './App.css'
import Card from './Card'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "Bank name",
          sm: "4556 4565 4565 4565",
          dv : "1119",
          ch :"CARDHOLDER"
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

    
        this.setState({
          [name]: value
        });
      }
    
    
    render() { 
        return ( 
<div className="form">
<form className="inputs">
<label>
   Cardholder :
    <input 
            type="text" 
            name="ch" 
            
            value={this.state.ch}
            onChange={this.handleInputChange}/>
  </label>
  <label>
    Company Name:
    <input 
            type="text" 
            name="name" 
            
            value={this.state.name}
            onChange={this.handleInputChange}/>
  </label>
  <label>
    Serial Number:
    <input 
            type="text" 
            name="sm" 
            value={this.state.sm}
            onChange={this.handleInputChange}/>
  </label>
  <label>
    Date Validation:
    <input
            type="text" 
            name="dv"
            value={this.state.dv}
            onChange={this.handleInputChange} />
  </label>
</form>
<Card 
       companyName={this.state.name}
       cardNumber={this.state.sm}
        validThru={this.state.dv}
        cardHolder={this.state.ch}/>
</div>
         );
    }
}
 
export default Form;