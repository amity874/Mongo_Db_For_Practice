const Mongoose=require('mongoose');
const blog = require('./blog');
const User=require('./user');
const UserQuery=require('./UserModelImpl.js');
const BlogQuery=require('./blogModelImpl.js');
const { getMaxListeners } = require('./blog');
const connect=()=>{
   return  Mongoose.connect('mongodb://localhost:27017/MongoDB');
}

connect()
.then(async connection=>{
console.log("Mongo Db Connection setup done!!!!!!!!");
//just for demo
await User.deleteMany({}); //delete all entry
// await blog.deleteMany({})

const user=await User.create({
   firstName:"Amit",
   lastName:"Pandey",
   email:"amity552000@gmail.com",
});
// console.log(user);
await User.create([
   {
   firstName:'Sarthak',
   lastName:'jain',
   email:'sj@gmail.com'
   },
   {
      firstName:'upkar',
      email:'u@gmail.com',
      underAge:true
   }
])
console.log("888888888888888888");
const u1=await UserQuery.getAllUsers();
const u2=await UserQuery.getUserByid(user.id);
const u3=await UserQuery.updateUserByid(user.id,{underAge:true})//by default this return old object 
console.log(u1);
console.log(u2);
console.log(u3);
console.log("*****************************");
const b1= await blog.create({
   title:"New Blog9",
   description:"This is my latest blog please check it out!!!",
   author:user.id, 
});
console.log(b1);
const b21=await BlogQuery.blogByAuthor(user.id);
console.log(b21);
// const b2=await blog.findById(b1.id).populate("author").exec();
// console.log(b2);
const b3=await BlogQuery.blogSortedBydate(user.id);
console.log(b3);
console.log("*****************************");
const res=await BlogQuery.blogTitleByAuther(user.id);
console.log(res);
})
.catch(err=>console.log(err));
