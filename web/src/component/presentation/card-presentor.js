import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from "../container/drawer-container";

class CardPresentor extends Component {

    deleteInfo = (id) => {
        console.log(id);
        this.props.deleteAction(id);
    };

    render() {
        return (
            <div className={'card-presentor'}>
                <Grid container spacing={24}>
                    <Grid item xs={0}>
                        <div style={{marginTop: '9px'}}>{this.props.index}.</div>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography component="h6" variant="h6">{this.props.name} <span style={{float: 'right', fontSize: '16px'}}>
                            {this.props.fields.map( field => (<span> {field.key} : <span style={{color : '#ef4956'}}>{field.value}</span></span>))}
                            <span onClick={() => this.deleteInfo(this.props.id)} className="fas fa-trash-alt" style={{marginLeft: '25px', color:'red'}}/></span>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default CardPresentor;