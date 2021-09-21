const Blog=require('./blog');
const blogByTitle=(title)=>{
    return Blog.find({title:title}).exec();
}
const blogByAuthor=(id)=>{
    return Blog.find({author:id}).populate().exec();
}
// const blogSortedBydate=()=>{
//     return Blog.find({}).sort('date').exec();
// }
//reverse of above
const blogSortedBydate=()=>{
    return Blog.find({}).sort('-date').exec();
}
const blogTitleByAuther=(id)=>{
    return Blog.find({author:id}).select({title:1,description:1}).exec();
}
module.exports={
    blogByAuthor,blogByTitle,blogSortedBydate,blogTitleByAuther
}