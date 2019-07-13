const loader = (state = {isLoading: false}, action) => {
    switch(action.type) {
        case "FLASH_LOADER":
            return Object.assign({}, state, {isLoading: true});
        case "STOP_LOADER":
            return Object.assign({}, state, {isLoading: false});
        default:
            return state;
    }
};

export {loader}