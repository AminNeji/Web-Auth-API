const jwt=require('jsonwebtoken');

module.exports=(res,req,next)=>{
    const token=req.cookies.token;
    try{
        const user=jwt.verify(token,process.env.TOKEN);
        next();
    }
    catch(err){
        res.clearCookie("token");
    }
}