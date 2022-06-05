import User from "../../model/user"
import dbConect from "../../lib/mongodb";
dbConect();

export default async function handler(req, res) {
    const {method} = req;
            try {
                const user = await User.create(req.body);
                res.redirect('/')
            } catch (error) {
                res.status(400).json({success:false})
            }
            
    }
