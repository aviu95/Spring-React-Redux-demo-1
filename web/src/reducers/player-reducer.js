const playerDetails = (state =[], action) => {
    switch (action.type) {
        case "FETCH_PLAYER":
            return action.player;
        case "CLEAR_PLAYER":
            return [];
        default:
            return state;
    }
};

export { playerDetails };
