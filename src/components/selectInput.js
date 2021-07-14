import { InputLabel } from '@material-ui/core';
import { React } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import context from '../core/context';

const Options = (text) =>
	<MenuItem key={ text } value={ text }>{ text }</MenuItem>;

const selectInput = () =>
	<div>
		<InputLabel>Text</InputLabel>
		<Select
			labelId="demo-simple-select-label"
			id="demo-simple-select"
			value={ context.state.text }
			onChange={ (evt) => context.actions.selectInput(evt.target.value) }
		>
			{ context.config.texts.map(Options) }
		</Select>
	</div>;

export default selectInput;
