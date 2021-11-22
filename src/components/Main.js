import React,{Component} from "react"; 

class Main extends Component{
	state={
		counter:0,
	}
	addHandler=()=>{
		this.setState({
			counter:this.state.counter + 1
		});
	};
    removeHandler=()=>{
		if(this.state.counter !== 0){
			this.setState({
				counter:this.state.counter - 1
		});
	}
	}
	//set counter to 0 for reseting 
	resetHandler=()=>{
		this.setState({
			counter:0
		});
	}
	render(){
		//adding circleClass using ternary operator
        let circleClass = `${
			this.state.counter === 0
			? ""
			:this.state.counter % 2 === 0
			?'even'
			: 'odd'
		} circle`
		return(
			<main>
				<div className="container">
				  <p className={circleClass}>{this.state.counter}</p>
				  <div className="box-button">
					<button onClick={this.addHandler}>Add one</button>
					<button onClick={this.removeHandler}>minus one</button>
					<button onClick={this.resetHandler}>reset</button>
				  </div>
				</div>
			</main>
		)
	}
}
export default Main;