import { React } from 'react';
import context from '../core/context';
import { Button } from '@material-ui/core';

const Movebutton = () =>
	<Button onClick={ () => context.actions.moveProducts() }>MoveButton
	</Button>;

export default Movebutton;
