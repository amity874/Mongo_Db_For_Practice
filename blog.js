const Mongoose=require('mongoose');
const blogSchema=Mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
        minLength:10
    },
    author:{//auther is user and we alrady make it so we need user as a referrence
        type: Mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true,
    },
    date:{type:String,default:Date},
},{timestamps:true});
blogSchema.post('save',function(doc){
    console.log('%s blog has been saved',doc._id);
 });
module.exports=Mongoose.model('blog',blogSchema);