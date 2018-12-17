const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// User.deleteMany({}).then((result)=>{
// 	console.log(result);
// });
// Todo.findByOneAndRemove(_id:'5c0cdea835cfa107386d2273').then((todos)=>{
	
// });

Todo.findByIdAndDelete('').then((todos)=>{
	console.log(todos);
});