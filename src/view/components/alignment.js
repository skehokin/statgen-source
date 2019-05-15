import React, {Component} from 'react';
import Box from './box';
import _ from 'lodash'
// import List from './list'
//import {titleCase} from '../../utils/caps-formatter'
// import {vocabulary} from '../../datasets/vocabularies'
import {capitalise} from '../../utils/caps-formatter'
// import _ from 'lodash';




class Alignment  extends Component {

	render () {
		// const {alignment} = this.props;
		const lawAxis = _.get(this.props, 'alignment.lawAxis', ' ');
		const goodAxis = _.get(this.props, 'alignment.goodAxis', ' ');
		const full = _.get(this.props, 'alignment.full', ' ');
		const acronym = full !== 'true neutral' ? lawAxis[0].toUpperCase() + goodAxis[0].toUpperCase() : 'TN';
		return (
			<Box className='alignment'>
			{capitalise(lawAxis)} <Box className='alignment-acronym'>{acronym}</Box> {capitalise(goodAxis)}
			</Box>

			)

	}
}
export default Alignment;