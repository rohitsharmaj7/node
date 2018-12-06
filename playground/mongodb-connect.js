const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
        if(err)
        {
            return console.log('unable to connect to the mongo db server');
        }

        console.log("connected to mongo db server");


        db.collection('Todos').insertOne({
               text:'something to do',
               completed:false
        },(err,result)=>{
            if(err){return console.log("unable to insert todo",err);}
            console.log(JSON.stringify(result.ops,undefined,2));
        });


        db.collection('Users').insertOne({
        	text:'rohitsharmaj7 is learning to insert data in the node js mongo db databse',
        	completed:true
        },(err,result)=>
        {
               if(err)
               {
               	return console.log("unable to insert the user",err);
               }
               	console.log(JSON.stringify(result.ops,undefined,2));
        });

        db.close();
});