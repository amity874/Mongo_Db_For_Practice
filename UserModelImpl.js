const user=require('./user');
const getAllUsers= ()=>{
    return  user.find({}).exec();
}
const getUserByid=(id)=>{
    return user.findById(id).exec();
}

const updateUserByid=(id,params)=>{
    return user.findByIdAndUpdate(id,params,{new:true}).exec();
} 
module.exports={
    getAllUsers,
    getUserByid,
    updateUserByid
}