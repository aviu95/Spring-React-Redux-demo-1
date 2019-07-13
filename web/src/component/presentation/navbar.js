import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/es/Button/Button";

class NavBar extends Component {
    render() {
        return (
            <AppBar position="static" style={{color: 'black', backgroundColor: 'white'}}>
                <Toolbar>
                    <Typography className={'navbar-title'} variant="h6" color="inherit" noWrap>
                        IPL Management
                    </Typography>
                    <div className={'navbar-grow'} />
                    { /* <Button style={{ color: 'white  '}}>Developed By AS</Button> */ }
                </Toolbar>
            </AppBar>
        );
    }
}

export default NavBar;