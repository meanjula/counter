import React,{Component} from "react"; 
import Button from "./Button";

class Main extends Component{
	state={
		text:[
			{name:'add one'},
			{name:'remove one'},
			{name:'reset'}
		]
	}

	render(){
		return(
			<main>
				<div className="container">
				<button className="circle-button">0</button>
				<div className="box-button">
					<Button name={this.state.text[0].name}/>
					<Button name={this.state.text[1].name}/>
					<Button name={this.state.text[2].name}/>
				</div>
				</div>

			</main>
		)
	}
}
export default Main;