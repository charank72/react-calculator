import React,{Component} from "react";
import Buttons from "./Buttons";
import Display from "./Display";
class Calculator extends Component{
  constructor(props){
    super(props);
    this.state={
      inp:"0"
    }
  }
  render(){
    return(
      <div className="cal-container">
        <Display {...this.state}/>
        <Buttons/>
      </div>
    )
  }
}
export default Calculator