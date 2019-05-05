import dotenv from "dotenv";
import MongoClient from "mongodb";

/* Settings */
dotenv.config();

export async function connect() {
  try {
    let client = await MongoClient.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@demos-xba50.mongodb.net/test?retryWrites=true`, {
        useNewUrlParser: true
      }
    )
    if (process.env.DB_USER && process.env.DB_PASS) {
      client = await MongoClient.connect(
        `mongodb://@localhost`, {
          useNewUrlParser: true
        }
      );
    }
    const database = client.db("programming_languages");
    console.log("Data base is Ok".america);
    return database;
  } catch (error) {
    console.log(error);
  }
}