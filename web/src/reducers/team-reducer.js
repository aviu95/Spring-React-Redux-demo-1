const teamInfo = (state =[], action) => {
    switch (action.type) {
        case "FETCH_TEAM":
            return action.team;
        case "CLEAR_TEAM":
            return [];
        default:
            return state;
    }
};

export { teamInfo };
