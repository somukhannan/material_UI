/* eslint-disable no-console */
import { React } from 'react';
import './App.css';
// import fontSlider from './components/slider';
// import simpleButton from './components/button';
// import selectInput from './components/selectInput';
// import switchButton from './components/switchButton';
import productList from './components/transferList';
import SelectedProductList from './components/SelectedList';
import Movebutton from './components/moveButton';
import context from './core/context';

const App = () => <div className={ `App ${ context.state.switch ? 'dark' : 'lite' }` }>
	{ productList() }
	{ SelectedProductList() }
	{ Movebutton() }
	{console.log(context.state.selectedList)}
</div>;
// { simpleButton() }
// 	{ fontSlider() }
// 	{ selectInput() }
// 	<div>{ switchButton() }</div>

export default App;
