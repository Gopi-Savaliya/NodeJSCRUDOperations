const dbconnection = require('./mongodb');

const updateData = async () => {
    const db = await dbconnection();
    //updateOne --> update one record
    //update --> update all records
    let result = await db.updateOne(
        {name:'note 6'},
        {$set: {name: 'Samsang note 6'}}
    );
    if(result.acknowledged) {
        console.log("Record updated");
    }
}

updateData();