const { verify } = require("jsonwebtoken");

module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get("authization");
        if(token){
            token = token.slice(7);
            verify(token, "qwe1234", (err, decoded)=>{
                if(err){
                    res.josn({
                        success: 0,
                        message: "Invalid token"
                    });
                }
                else{
                    next();
                }
            });///secret key copied from other folder
        }else{
            res.json({
                success: 0,
                message: "Access denied! unauthorized user"
            });
        }
    }
}