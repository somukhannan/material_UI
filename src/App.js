import { React } from 'react';
import './App.css';
import fontSlider from './components/slider';
import simpleButton from './components/button';
import selectInput from './components/selectInput';

const App = () =>
	<div>
		{ simpleButton() }
		{ fontSlider() }
		{ selectInput() }
	</div>;

export default App;
