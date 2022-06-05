import dbConect from "../../lib/mongodb";
import User from '../../model/user'
import Homepage from '../home'

dbConect();

export default async function handler (req,res){
    const{ email,password} = req.body
    const user = await User.findOne({email}).lean()
    if(!user){
        return res.json({status:'Invalid Password / username'})
        
    }
    else{
        return res.redirect('/home')
    }
}