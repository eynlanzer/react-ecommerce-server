const getAllUsers = async(req, res) => {
    res.send('get all users route');
};

const getSingleUser = async(req, res) => {
    res.send('get all single user');
};

const showCurrentUser = async(req, res) => {
    res.send('show current user');
};

const updateUser = async(req, res) => {
    res.send('update user');
};

const updateUserPassword = async(req, res) => {
    res.send('update user password');
};

module.exports = {
    getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword,
};