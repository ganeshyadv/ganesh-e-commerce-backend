const userModal = require("../../modal/UserModal");

class UserServises{
    constructor(){}

   async registretion(req, res){
        let data = req.body;
        let insertUser = await userModal.inserUser(data)
        return true  
    };

    async loginAuth(req, res){
        let response = {
            status: "",
            message: "",
            data: {},
        }
        const username = req.body.username;
        const password = req.body.password;
        let user = await userModal.getUserByEmail(username);
        console.log("user", user);
        if (user && user.length > 0) {
            let userInfo = user[0]
            if (userInfo && userInfo.password == password) {
                response.status = "SUCCESS";
                response.message = "SUCCESSFULL";
                response.data = userInfo.id;
            } else {
                response.status = "ERROR";
                response.message = "Invelid Password";
            }
        } else {
            response.status = "ERROR";
            response.message = "Invelid Email";
        }

        return response
    };

    async getUserById(req, res) {
        let userId = req.params.userId
        console.log("userId", userId);
        let getUserById = await userModal.getUserById(userId)
        console.log("getUserById", getUserById);
        return getUserById
    };

}
module.exports = new UserServises();