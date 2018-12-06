const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err)
	{
		return console.log('unble to connect to the mongodb server');
	}
    console.log('Connect to MongoDB server');
    
	//delete many
     // db.collection('Todos').deleteMany({text:'something to do'}).then((result)=>{
     // 	console.log(result);
     // })
	

	//delete one
     //  db.collection('Todos').deleteOne({text:'eat lunch'}).then((result)=>{
     // 	console.log(result);
     // })
	//find one and delete
      db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
     	console.log(result);
     })
	// db.close();
});