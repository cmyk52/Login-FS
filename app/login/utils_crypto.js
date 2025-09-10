import bcrypt, { hash } from "bcrypt"
    async function pass_hash(password, password_db){
        try{
            const is_valid = await bcrypt.compare(password, password_db)
            console.log(is_valid)
            return is_valid
        }
        catch(error){
            console.log("algo malo en el hash")
            return false
        }
    }
export default pass_hash
    