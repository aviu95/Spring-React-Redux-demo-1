import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import DrawerContainer from "../container/drawer-container";
import {Choose, If, When, Otherwise} from "react-control-statements";
import TeamContainer from "../container/teamcontainer";
import PlayerContainer from "../container/player-container";

class MainContainer extends Component {

    constructor() {
        super();
        this.state = {
            page: 1
        }
    }

    changingPage = (id) => {
      console.log(id);
      this.setState({page: id});
    };

    render() {
        return(
            <Grid container spacing={5}>
                <Grid item xs ={3}>
                    <DrawerContainer
                        renderPage={this.changingPage.bind(this)}/>
                </Grid>
                <Grid item xs={9} style={{ marginTop: '50px'}} >
                    <div>
                        <Choose>
                            <When condition={this.state.page === 1}>
                                <TeamContainer/>
                            </When>
                            <Otherwise condition={this.state.page === 2}>
                                <PlayerContainer/>
                            </Otherwise>
                        </Choose>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default MainContainer;