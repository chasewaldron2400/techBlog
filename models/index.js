const User = require('./user');
const Blog = require('./blog');
const Comment = require('./comment')

//User+Blog one to many
User.hasMany(Blog, {
    onDelete: 'CASCADE'
  });
  
  Blog.belongsTo(User);

  //User+Comment one to many
User.hasMany(Comment, {
    onDelete: 'CASCADE'
  });
  
  Comment.belongsTo(User);

    //Blog+Comment one to many
Blog.hasMany(Comment, {
    onDelete: 'CASCADE'
  });
  
  Comment.belongsTo(Blog);
  
  module.exports = { User, Blog, Comment };