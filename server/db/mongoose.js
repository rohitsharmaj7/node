var mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect(process.env.MONGODB_URI = 'mongodb://rohit:sharmaj7@ds047592.mlab.com:47592/rsj7' || 'mongodb://localhost:27017/TodoApp');

module.exports={mongoose};
