import { React } from 'react';
import { Switch, FormControlLabel } from '@material-ui/core';
import context from '../core/context';

const switchButton = () =>
	<FormControlLabel
		control={
			<Switch
				checked={ context.state.switch }
				onChange={
					(evt) => context.actions
						.setSwitch(evt.target.checked)
				}
			/>
		}
		label="DarkTheme"
	/>;

export default switchButton;
