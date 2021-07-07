import { React } from 'react';
import Slider from '@material-ui/core/Slider';
import context from '../core/context';

const fontSlider = () =>
	<Slider
		value={ context.state.fontSize }
		onChange={ (dummy, newValue) => context.actions
			.setFontSize(newValue) }
	/>;

export default fontSlider;
