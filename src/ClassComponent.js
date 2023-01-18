import React from 'react'
import StateExample from './StateExample'

class ClassComponent extends React.Component{
	state={
		students:[
			{id:1,name:"vasu",age:23},
			{id:2,name:"shabeer",age:23},
			{id:3,name:"srivastav",age:25},
			{id:4,name:"balaji",age:23},
			{id:5,name:"saranya",age:21},
			{id:6,name:"ambica",age:22}
		]
	}
	render(){
		console.log(this.state)
		return(
			<div>
				<h1>this is class component {this.props.demo}</h1>
				<StateExample employees={this.state.students}/>
			</div>
		)
	}
}
export default ClassComponent