const verify_token = (req,res,next) => {
    res.status(200).send("hola mundo")
    next
}

export default verify_token