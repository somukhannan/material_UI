import { React } from 'react';
import { Button } from '@material-ui/core';
import context from '../core/context';

const simpleButton = () =>{
    return (
        <Button style={ { fontSize: `${ context.state.fontSize }px` } } color="primary">Hello World</Button>
        <Button variant="contained">Default</Button>
    );
};

export default simpleButton;
