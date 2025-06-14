const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const main = async () => {
    await client.connect();
    const db = client.db('mytest');
    const collection = db.collection('cc');
    //   await collection.insertMany([{ username: 'a', age: 18}, { username: 'b', age: 28 }]);
    //   await collection.insertOne({ username: 'c', age: 38});
    //   const findResult = await collection.find({ age: {$gt: 20} }).toArray();
    //  await collection.updateOne({ username: 'a' }, { $set: { username: 'aa' } });
    await collection.deleteMany({ username: 'b' });
    const findResult = await collection.find({}).toArray();
    console.log(findResult);
}

main().finally(() => client.close())