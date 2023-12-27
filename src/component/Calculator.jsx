import React, { Component } from "react";
import Buttons from "./Buttons";
import Display from "./Display";
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inp: "",
      out: 0,
    };
    this.btnHandler = this.btnHandler.bind(this); //method binding
  }
  //main handler function
  btnHandler(val) {
    console.log(`btn value=`, val);
    if (val === "C") {
      this.clear();
    } else if (val === "CE") {
      this.masterClear();
    } else if (val === "=") {
      this.calculate();
    } else if (val === "<-") {
      this.backspace();
    }else if (val === "sqrt") {
      this.squrt();
    }else {
      //number,math operator
      this.setState({
        inp: this.state.inp + val,
      });
    }
  }
  //clear=C
  clear() {
    this.setState({
      inp: "",
    });
  }
 /*  squrt(){
    this.setState({
      out: this.state.inp**2
    })
  } */
  masterClear() {
    this.setState({
      inp: "",
      out: 0,
    });
  }
  //calculate-=
  calculate() {
    this.setState({
      out: eval(this.state.inp),
    });
  }
  backspace() {
    this.setState({
      // let x=this.state.inp.slice(0,-1)
      inp:this.state.inp.substring(0,this.state.inp.length-1)
    })
  }

  render() {
    return (
      <div className="cal-container">
        <Display {...this.state} />
        <Buttons btnClick={this.btnHandler} />
      </div>
    );
  }
}
export default Calculator;
