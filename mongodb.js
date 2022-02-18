const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) return console.log("Unable to connect to the database");
    const db = client.db(databaseName);
    // db.collection("users").insertOne(
    //   {
    //     name: "Abhishek Prajapat",
    //     age: 24,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }
    //     console.log(result);
    //   }
    // );
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Anurag Prajapat",
    //       age: 27,
    //     },
    //     {
    //       name: "Ankita Prajapat",
    //       age: 32,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert many");
    //     }
    //     console.log(result);
    //   }
    // );
    db.collection("tasks").insertMany(
      [
        {
          description: "Good string",
          completed: true,
        },
        {
          description: "Bad String",
          completed: false,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to insert many!");
        }
        console.log(result);
      }
    );
  }
);
