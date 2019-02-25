import React, { Component } from 'react';
import './App.css'

class Card  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const renderCardNumber = number => {
            number = number.toString()
            let resultStr = ''
            for(let i =0; i < number.length; i += 4) {
              resultStr += number.slice(i, i + 4) + ' '
            }
            return resultStr.trim()
          }
          
     
          const renderValidThru = number => {
            number = number.toString()
            return number.slice(0, 2) + '/' + number.slice(2)
          }
        return ( 
            <div className="cardbody">
              <div className="title">
                <h1>      {this.props.companyName.toUpperCase()} </h1>
              </div>
              <div className="serialnumber">
              <img src="https://previews.123rf.com/images/suppakij1017/suppakij10171211/suppakij1017121100126/16373925-puce-%C3%A9lectronique.jpg" height="42" width="48" ></img>
                <h4>{renderCardNumber(this.props.cardNumber)}</h4>
                <div className="info">
                <h3>5422</h3>
                <div className="valid"> 
                  <p>VALID THRU</p> <h3>{renderValidThru(this.props.validThru)}</h3>
                </div>
                <div className="visa">
                <img  src="https://www.logolynx.com/images/logolynx/b0/b03963a1d18613c6a627f2d7ffc0ee9a.png" height="52" width="70"></img>
                </div>
                </div>
                <h3 className="cardholder">{this.props.cardHolder.toUpperCase()}</h3>
                
              </div>
          </div>
         );
    }
}
 
export default Card ;