import React, {Component} from 'react';

class List extends Component {

	render () {
		const {className, children, items} = this.props;
		return (
			<ul className={className}>
				{items ? items.map(item => <li>{item}</li>) : children}
			</ul>
			)
	}
}
export default List;
