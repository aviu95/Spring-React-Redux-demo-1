import {combineReducers} from "redux";
import {loader} from "./loader-reducer";
import {teamInfo} from "./team-reducer";
import {playerDetails} from "./player-reducer";

const reducer = combineReducers({
    teamInfo: teamInfo,
    playerDetails: playerDetails,
    loader: loader
});

export default reducer;