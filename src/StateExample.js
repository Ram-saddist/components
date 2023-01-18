import React from 'react'

class StateExample extends React.Component{
	render(){
		return(
			<div>
				from state StateExample
				{
					this.props.employees.map((emp)=>(
						<div key={emp.id}>
							<p>Name:{emp.name}</p>
							<p>Age:{emp.age}</p>
						</div>
					))
				}
			</div>
		)
	}
}
export default StateExample