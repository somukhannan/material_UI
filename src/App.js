import { React } from 'react';
import './App.css';
import fontSlider from './components/slider';
import context from './core/context';
import { Button } from '@material-ui/core';

const App = () =>
	<div>
		<Button
			style={ { fontSize: `${ context.state.fontSize }px` } }
			color="primary"
		>Hello World</Button>
		<div>{ fontSlider() }</div>
	</div>;

export default App;
