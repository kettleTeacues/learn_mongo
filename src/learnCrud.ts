import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' })

const adminUser = process.env.MONGODB_ADMIN_USERNAME
const adminPass = process.env.MONGODB_ADMIN_PASSWORD
console.log(adminUser, adminPass)
const url = `mongodb://${adminUser}:${adminPass}@localhost:27017/`

const main = async () => {
    const client = new MongoClient(url)
    const database = client.db('sample_mflix');
    const myColl = database.collection("pizzaMenu");
    
    const doc = { name: "Neapolitan pizza", shape: "round" };
    const result = await myColl.insertOne(doc);
    console.log(result)

    const all = myColl.find()
    for await (const rec of all) {
        console.log(rec)
    }

    await client.close()
}
main()
