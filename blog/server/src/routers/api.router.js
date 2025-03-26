const router = require("express").Router();

 
const likeRouter = require("./post.router");

router.use("/post", likeRouter);
 

module.exports = router;
