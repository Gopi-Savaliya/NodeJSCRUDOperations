const dbconnection = require('./mongodb');

const insertData = async () => {
    const db = await dbconnection();
    //insertOne --> insert one record
    //insert --> insert multiple records
    const result = await db.insert([
        {name:"note 5", brand:"Vivo", category:"mobile"},
        {name:"note 6", brand:"Vivo", category:"mobile"}
    ]);
    if(result.acknowledged) {
        console.log("data inserted");
    }
}

insertData(); 