import axios from 'axios';

const setPlayer = (player) =>{
    return {
        type: 'FETCH_PLAYER',
        player: player
    };
};


const clearPlayer = () => {
    return {
        type: 'CLEAR_PLAYER'
    };
};

const fetchPlayer = () => {
  return (dispatch) => {
      return axios.get('http://localhost:8082/team-management/api/player')
          .then((response) => dispatch(setPlayer(response.data)))
          .catch((error) => console.log(error));
  };
};

const updatePlayer = (id) => {
    return (dispatch) => {
      return axios.put(`http://localhost:8082//chart-buster/api/player/${id}`)
          .then(() => dispatch(fetchPlayer()))
          .catch((error) => console.log(error));
    };
};

const createPlayer = (playerName, rank) => {
    const headers = {
        "Access-Control-Allow-Origin": "*"
    };
    return (dispatch) => {
        return axios.post(`http://localhost:8082/team-management/api/player`, {
            name: teamName,
            rank: rank
        }, { headers: headers}).then(() => dispatch(fetchPlayer()))
          .catch((error) => console.log(error));
    }

};

const deletePlayer = (id) => {
    return (dispatch) => {
        return axios.delete(`http://localhost:8082/team-management/api/player/${id}`)
            .then(() => dispatch(fetchPlayer()))
            .catch((error) => console.log(error));
    }
};


export { deletePlayer, createPlayer, updatePlayer, fetchPlayer }