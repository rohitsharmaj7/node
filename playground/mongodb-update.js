const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err)
	{
		return console.log('unble to connect to the mongodb server');
	}
    console.log('Connect to MongoDB server');
    
	db.collection('Todos').findOneAndUpdate({
           _id:new ObjectID("5c076bd33a703e1af008b225")},{
                  $set:{
                    completed:true
                  }},
                  {
                    returnOriginal:false
                  }).then((result)=>{
                     console.log(result);
                  });
	// db.close();
});