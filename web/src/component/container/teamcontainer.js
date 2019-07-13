import React, {Component} from 'react';

import {connect} from "react-redux";
import CardPresentor from "../presentation/card-presentor";
import Button from "@material-ui/core/Button";
import {bindActionCreators} from 'redux';
import {createTeam, deleteTeam, fetchTeam} from "../../actions/team-actions";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';


class TeamContainer extends Component {

    constructor() {
        super();
        this.state = {
            open: false,
            name: '',
            rank: 0
        }
    }

    componentWillMount() {
        this.props.fetchTeam();
    }

    toogleDialoge = () =>{
      this.setState({open : !this.state.open})
    };

    createTeam = () => {
        this.props.createTeam(this.state.name, this.state.rank);
        this.toogleDialoge();
        this.setState({name: '', rank: 0});
    };

    enteredValue = (e) => {
        if(e.target.id === 'name') {
            this.setState({ name: e.target.value})
        }else if(e.target.id === 'rank') {
            this.setState({ rank: e.target.value})
        }
    };

    deleteTeam = (id) => {
        this.props.deleteTeam(id)
    }

    render() {
        return (
            <div>
                <b>Manage Team :</b> <Button variant={"outlined"} onClick={() => this.toogleDialoge()}>Create</Button>
                <div style={{ marginTop: '20px'}}>
                    {this.props.teamInfo.map((value, index) =>
                        <CardPresentor
                            index={index+1}
                            id = {value.id}
                            name={value.name}
                            fields={ [{key: 'Rank', value: value.rank }]}
                            deleteAction={this.deleteTeam.bind(this)}/>)}
                </div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Please enter the team details "}</DialogTitle>
                    <DialogContent>
                        <TextField
                            id="name"
                            label="Team Name"
                            value={this.state.name}
                            onChange={this.enteredValue.bind(this)}
                            margin="normal"
                        />
                        <br/>
                        <TextField
                            id="rank"
                            label="Rank"
                            value={this.state.rank}
                            onChange={this.enteredValue.bind(this)}
                            margin="normal"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.toogleDialoge.bind(this)} color="primary">
                            Close
                        </Button>
                        <Button onClick={this.createTeam.bind(this)} color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
};

function mapStateToProps(state) {
    const  { teamInfo } = state;
    return {
        teamInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ createTeam, fetchTeam, deleteTeam }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(TeamContainer);
