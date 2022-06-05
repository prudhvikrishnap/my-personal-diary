import dbConect from "../../lib/mongodb";
import User from '../../model/user'

dbConect();

export default async (req,res)=>{
    const {
        query:{id},
        method
    }= req
     switch (method) {
         case "GET":
             try {
                 const user = await User.findById(id)
                 if(!user){
                     return res.status(400).json({success:false})
                 }

                 return res.status(200).json({success:true, data:user})
                 
             } catch (error) {
                 res.status(400).json({success:false})
                 
             }
             break;
        case "PUT":
                try {
                    const update = req.body;
                    const userUpdated = await User.findByIdAndUpdate(id,{$set:update},{
                        new:true,
                        runValidators:true

                    });
                    if(!userUpdated){
                        return res.status(400).json({success:false})
                    }
                    return res.status(200).json({status:true, data:userUpdated})
                    
                } catch (error) {
                    res.status(400).json({success:'Not able to update'})
                 
                }
                break;
            case "DELETE":
                try {
                    const deletedUser = await User.deleteOne({
                        _id:id
                    }
                    );
                    if(!deletedUser){
                        return res.status(400).json({success:false})
                    }
                    return res.status(201).json({status:true, data:{}})
                    
                } catch (error) {
                    res.status(400).json({success:'Deleted User'})
                 
                }
                break;
     
         default:
             break;
     }
}