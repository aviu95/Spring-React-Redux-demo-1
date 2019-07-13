import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {deletePlayer, fetchPlayer} from "../../actions/player-actions";
import {connect} from "react-redux";
import CardPresentor from "../presentation/card-presentor";

class PlayerContainer extends Component {
    componentWillMount() {
        this.props.fetchPlayer();
    }

    deletePlayer = (id) => {
        this.props.deletePlayer(id);
    };

    render() {
        return(
            <div>
                <b>Manage Players :</b>
                <div style={{ marginTop: '20px'}}>
                    {this.props.playerDetails.map((value, index) =>
                        <CardPresentor
                            index={index+1}
                            id = {value.id}
                            name={value.name}
                            fields={ [{key: 'Team Name', value: value.team.name }, {key: 'Player Type', value: value.playerType }]}
                            deleteAction={this.deletePlayer.bind(this)}/>)}
                </div>
            </div>
        )
    }

}


function mapStateToProps(state) {
    const  { playerDetails } = state;
    return {
        playerDetails
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchPlayer, deletePlayer }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer);