const dbconnection = require('./mongodb');

const deleteData = async () => {
    const db = await dbconnection();
    //deleteOne --> delete one record
    //delete --> delete all records
    let result = await db.deleteOne(  
        {name:'note 5'}
    );
    if(result.acknowledged) {   
        console.log("Record deleted");
    }
}

deleteData();