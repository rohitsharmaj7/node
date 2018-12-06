const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err)
	{
		return console.log('unble to connect to the mongodb server');
	}
    console.log('Connect to MongoDB server');

	// db.collection('Todos').find().toArray().then((docs)=>{
 //          console.log('Todos');
 //          console.log(JSON.stringify(docs,undefined,2));
	// },(err)=>{
	// 	console.log('unable to fetch todos',err);
	// });


    db.collection('Todos').find().count().then((count)=>{
          console.log(`Todos count: ${count}`);
	},(err)=>{
		console.log('unable to count',err);
	});
	// db.close();
});