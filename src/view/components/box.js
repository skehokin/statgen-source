import React, {Component} from 'react';

class Box extends Component {

	render () {
		const {className, wrap} = this.props
		return (
				<div className={`box ${className ? className : ''} ${wrap ? 'wrap':''}`}>
					{this.props.children}
				</div>
			)
	}
}
export default Box;