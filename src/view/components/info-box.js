import React, {Component} from 'react';
import Box from './box'


class InfoBox  extends Component {

	render () {
		const {children} = this.props;

		return (
			<Box className='glass-box info-box'>
			{children}
			</Box>
			)

	}
}
export default InfoBox;