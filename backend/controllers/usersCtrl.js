const asyncHandler = require("express-async-handler")

//!USer Registration

const usersController = {
    //!Register
    register: asyncHandler(async(req, res)=> {
        res.json({message:"Register"});
    }),
    //!Login
    //!profile
}

module.exports = usersController;