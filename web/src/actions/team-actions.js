import axios from 'axios';

const setTeam = (team) =>{
    return {
        type: 'FETCH_TEAM',
        team: team
    };
};


const clearTeam = () => {
    return {
        type: 'CLEAR_TEAM'
    };
};

const fetchTeam = () => {
  return (dispatch) => {
      return axios.get('http://localhost:8082/team-management/api/team')
          .then((response) => dispatch(setTeam(response.data)))
          .catch((error) => console.log(error));
  };
};

const updateTeam = (id) => {
    return (dispatch) => {
      return axios.put(`http://localhost:8082//chart-buster/api/team/${id}`)
          .then(() => dispatch(fetchTeam()))
          .catch((error) => console.log(error));
    };
};

const createTeam = (teamName, rank) => {
    const headers = {
        "Access-Control-Allow-Origin": "*"
    };
    return (dispatch) => {
        return axios.post(`http://localhost:8082/team-management/api/team`, {
            name: teamName,
            rank: rank
        }, { headers: headers}).then(() => dispatch(fetchTeam()))
          .catch((error) => console.log(error));
    }

};

const deleteTeam = (id) => {
    return (dispatch) => {
        return axios.delete(`http://localhost:8082/team-management/api/team/${id}`)
            .then(() => dispatch(fetchTeam()))
            .catch((error) => console.log(error));
    }
};


export { deleteTeam, createTeam, updateTeam, fetchTeam }