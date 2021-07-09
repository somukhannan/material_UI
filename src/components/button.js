import { React } from 'react';
import { Button } from '@material-ui/core';
import context from '../core/context';

const simpleButton = () => <Button style={ { fontSize: `${ context.state.fontSize }px` } } color="primary">Hello World </Button>;

export default simpleButton;