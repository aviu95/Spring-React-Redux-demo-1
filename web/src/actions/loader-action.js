const flashLoader = () => {
    return {
        type: "FLASH_LOADER"
    }
};

const stopLoader =() => {
    return {
        type: "STOP_LOADER"
    }
};

export {flashLoader, stopLoader};