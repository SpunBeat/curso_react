const validateUserAndPassword = (user, password) => {
    if (!user || !password) {
        return false;
    }
    return true;
};

export {validateUserAndPassword};