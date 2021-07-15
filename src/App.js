import { React } from 'react';
import './App.css';
import fontSlider from './components/slider';
import simpleButton from './components/button';
import selectInput from './components/selectInput';
import switchButton from './components/switchButton';
import context from './core/context';

const App = () =>
	<div className={ `App ${ context.state.switch ? 'dark' : 'lite' }` }>
		{ simpleButton() }
		{ fontSlider() }
		{ selectInput() }
		<div>{switchButton()}</div>
	</div>;

export default App;
