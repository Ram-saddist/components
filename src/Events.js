import {Component} from 'react'
export default class Events extends Component{
	state={
		username:"",
		password:""
	}
	handleChange=(op)=>{
		this.setState({
			[op.target.name]:op.target.value
		})
	}
	handleClick=()=>{
		console.log(this.state.username,this.state.password)
	}
	render(){
		return(
			<div>
				<input name="username" onChange={this.handleChange} placeholder="Enter username"/>
				<input name="password" onChange={this.handleChange} placeholder="Enter password"/>
				<button onClick={this.handleClick}>Submit</button>
			</div>
		)
	}
}

