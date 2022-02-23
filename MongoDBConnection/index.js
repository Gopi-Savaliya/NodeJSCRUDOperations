// search or get data from mongodb database

const dbconnection = require('./mongodb');

// getData().then((res) => {
//     res.find().toArray().then((data) => {
//         console.log(data);
//     })
// })

const findData = async () => {
    const db = await dbconnection();
    let data = await db.find({"name":"i-phone 12"}).toArray();
    console.log(data);
}

findData();
