import { users } from "../auth"

export default (req , res) => {
    switch(req.method){
        case "GET" : 
            return res.status(200).json(users)
        default : 
        return res.status(200).json(users)
    }
}