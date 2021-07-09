import { React } from 'react';
import './App.css';
import fontSlider from './components/slider';
import simpleButton from './components/button';

const App = () =>
	<div>
		{ simpleButton() }
		{ fontSlider() }
	</div>;

export default App;
