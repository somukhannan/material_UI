import { React } from 'react';
import { Button } from '@material-ui/core';
import context from '../core/context';

const simpleButton = () =>
	<div>
		<Button
			style={ { fontSize: `${ context.state.fontSize }px` } }
			color="primary"
		>Hello World
		</Button>
		<Button variant="outlined" color="secondary">
			Secondary
		</Button>
		<Button variant="contained" color="inherit">
			Third</Button>
		<Button variant="text" color="default">
			Fourth</Button>
		<Button variant="text" color="default">
			Fifth</Button>
	</div>;

export default simpleButton;
