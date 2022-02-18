const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) return console.log("Unable to connect to the database");
    const db = client.db(databaseName);
    // db.collection("users").findOne(
    //   {
    //     _id: new ObjectID("620febc47f0cee2f75c77090"),
    //   },
    //   (error, user) => {
    //     if (error) return console.log("Unable to fetch user");
    //     console.log(task);
    //   }
    // );
    // db.collection("tasks")
    //   .find({
    //     completed: false,
    //   })
    //   .toArray((error, result) => {
    //     console.log(result);
    //   });
    // db.collection("users").findOne(
    //   { _id: new ObjectID("620f4485abb90d8048b25204") },
    //   (error, user) => {
    //     if (error) return console.log("Unable to fetch user");
    //     console.log(user);
    //   }
    // );
    // db.collection("users")
    //   .find({
    //     age: 24,
    //   })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });
    // db.collection("users")
    //   .find({
    //     age: 24,
    //   })
    //   .count((error, count) => {
    //     console.log(count);
    //   });
  }
);
