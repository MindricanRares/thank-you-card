import React, { Component } from "react";
import "./App.css";
import {
  Checkbox,
  DropdownButton,
  MenuItem,
  ButtonToolbar,
  FormControl,
  Radio,
  FormGroup
} from "react-bootstrap";
import Result from "./Result";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "This is a test",
      thankSelectedOption: " you",
      whatForOption: "for",
      whatForSecondOption: "not leaving to early",
      fromSelectedRadio: "Your Collegue",
      other:false,
      otherValue:"",
      thanksList:[]
    };
    this.whatForDropDown = this.whatForDropDown.bind(this);
  };

  handleFromChange = (changeEvent) =>{
    this.setState({
      other:changeEvent.target.value==="Other",
      fromSelectedRadio:changeEvent.target.value
    })
  };

  handleThankChange = changeEvent => {
    this.setState({
      thankSelectedOption: changeEvent.target.value
    });
  };

  handleWhatForChange = changeEvent => {
    this.setState({
      whatForSecondOption: changeEvent.target.value
    });
  };

  whatForDropDown = changeEvent => {
    debugger;
    this.setState({ whatForOption: changeEvent.target.childNodes['0'].nodeValue  });
  };

  otherHandleChange = (e) =>{
    this.setState({
      otherValue:e.target.value
    })
  ;}

  componentDidMount(){
    var request = require("request");

    var options = { method: 'GET',
      url: 'https://thank-you-card-server.herokuapp.com/thanks',
      headers: 
      {
  
        'Content-Type': 'application/json' },
      json: true };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      this.setState({
        thanksList:body
      })
      console.log(body);
    }.bind(this));

  }

  populateThanksList = () =>{
    debugger;
    if(this.state.thanksList.length===0){
      return <li>Loading</li>
    }else{
      return this.state.thanksList.map(thanks=>{
        return <li>{thanks.title}</li>
      })
    }
  }

  render() {
    return (
      <div className="main-nav">
        <h1 className="container-title" >Welcome to thank-you-card</h1>
        <h3 className="container-title" >Thank</h3>
        <div>
          <FormGroup>
            <div className="thankRadioGroup">
              <Radio
                name="radio-group"
                checked={this.state.thankSelectedOption === " you"}
                onChange={this.handleThankChange}
                value=" you">
                you
              </Radio>
              <Radio
                name="radio-group"
                checked={this.state.thankSelectedOption === " very much"}
                onChange={this.handleThankChange}
                value=" very much"
              >
                {" "}
                very much
              </Radio>
              <Radio
                name="radio-group"
                checked={this.state.thankSelectedOption === "s"}
                onChange={this.handleThankChange}
                value="s"
              >
                s
              </Radio>
              <Radio
                name="radio-group"
                checked={this.state.thankSelectedOption === "s a bunch"}
                onChange={this.handleThankChange}
                value="s a bunch"
              >
                s a bunch
              </Radio>
            </div>
          </FormGroup>
        </div>
        <br />
        <div className="container-title">
          <DropdownButton  
              title={this.state.whatForOption}
              id="for_what_dropdown">
              <MenuItem key="1"value="for" onClick={this.whatForDropDown}>for</MenuItem>
              <MenuItem key="2"value="that" onClick={this.whatForDropDown}>that</MenuItem>
            
          </DropdownButton>
        </div>
        
        {this.state.whatForOption === "for" ? (
          <div>
            <FormGroup>
              <div className="thankRadioGroup">
                <Radio className={ "option-input radio"}
                  name="what-for-radio-group"
                  checked={
                    this.state.whatForSecondOption === "being a good friend"
                  }
                  onChange={this.handleWhatForChange}
                  value="being a good friend"
                >
                  being a good friend
                </Radio>
                <Radio
                  name="what-for-radio-group"
                  checked={this.state.whatForSecondOption === "listening to me"}
                  onChange={this.handleWhatForChange}
                  value="listening to me"
                >
                  listening to me{" "}
                </Radio>
                <Radio
                  name="what-for-radio-group"
                  checked={
                    this.state.whatForSecondOption === "not leaving to early"
                  }
                  onChange={this.handleWhatForChange}
                  value="not leaving to early"
                >
                  not leaving to early
                </Radio>
              </div>
            </FormGroup>
          </div>
        ) : (
          <div>
            <FormGroup>
              <div className="thankRadioGroup">
                <Radio
                  name="what-for-radio-group"
                  checked={
                    this.state.whatForSecondOption === "you were there for me"
                  }
                  onChange={this.handleWhatForChange}
                  value="you were there for me"
                >
                  you were there for me
                </Radio>
                <Radio
                  name="what-for-radio-group"
                  checked={this.state.whatForSecondOption === "the presents"}
                  onChange={this.handleWhatForChange}
                  value="the presents"
                >
                  the presents
                </Radio>
                <Radio
                  name="what-for-radio-group"
                  checked={
                    this.state.whatForSecondOption ===
                    "you didn't tell my secret"
                  }
                  onChange={this.handleWhatForChange}
                  value="you didn't tell my secret"
                >
                  you didn't tell my secret
                </Radio>
              </div>
            </FormGroup>
          </div>
        )}

        <br />
        <h1 className="container-title">From</h1>
        <div>
            <FormGroup>
              <div className="thankRadioGroup">
                <Radio
                  name="from-radio-group"
                  checked={
                    this.state.fromSelectedRadio === "Your Collegue"
                  }
                  onChange={this.handleFromChange}
                  value="Your Collegue"
                >
                  Your Collegue
                </Radio>
                <Radio
                  name="from-radio-group"
                  checked={this.state.fromSelectedRadio === "Your Best Friend"}
                  onChange={this.handleFromChange}
                  value="Your Best Friend"
                >
                  Your Best Friend
                </Radio>
                <Radio
                  name="from-radio-group"
                  checked={
                    this.state.fromSelectedRadio ===
                    "Kind person"
                  }
                  onChange={this.handleFromChange}
                  value="Kind person"
                >
                  Kind person
                </Radio>
                <Radio
                  name="from-radio-group"
                  checked={
                    this.state.fromSelectedRadio ===
                    "Other"
                  }
                  onChange={this.handleFromChange}
                  value="Other"
                >
                  Other
                </Radio>
                {
                  this.state.other === false ? <FormControl disabled/> :
                  <FormControl value={this.state.otherValue} onChange={this.otherHandleChange}/>
                }
                
              </div>
            </FormGroup>
          </div>
        <br />
        <div className="result">
          <Result
            thankSelectedOption={this.state.thankSelectedOption}
            whatForOption={this.state.whatForOption}
            whatForSecondOption={this.state.whatForSecondOption}
            fromSelectedRadio={this.state.fromSelectedRadio}
            otherValue={this.state.otherValue}
          />
        </div>
        <ul>
          {this.populateThanksList()}
        </ul>
      </div>
    );
  }
}

export default App;
