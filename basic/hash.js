import { createClient } from "redis";

const client = createClient();

client.on("error", (err) => console.log("Redis Client Error", err));

await client.connect();

// Working with hashes
// Sets the value of one or more fields on the hash.
client.hSet("countries", "Ukraine", "Kyiv");
client.hSet("countries", "Spain", "Madrid");
client.hSet("countries", "Italy", "Rome");

// Shows all items from the hash
const items = await client.hGetAll("countries");
console.log(items);

// Show the value associated with field in the hash stored at key.
const country = await client.hGet("countries", "Spain");
console.log(country);

// Show the number of fields in the hash
const length = await client.hLen("countries");
console.log(length);

// update one item
client.hSet("countries", "Ukraine", "Kharkiv");
const items2 = await client.hGetAll("countries");
console.log(items2);

// delete this hash
await client.del("countries");

await client.disconnect();
