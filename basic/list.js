import { createClient } from "redis";

const client = createClient();

client.on("error", (err) => console.log("Redis Client Error", err));

await client.connect();

// Working with lists
// Delete a list
await client.del("currencies");
// adds a new element to the tail of a list
await client.rPush("currencies", "USD");
await client.rPush("currencies", "EUR");
await client.rPush("currencies", "UAH");
// Drop one item from the list
await client.rPop("currencies");
// Shows all items from the list
const currencies = await client.lRange("currencies", 0, -1);
console.log(currencies);
// Shows the length of the list.
const lLength = await client.lLen("currencies");
console.log(lLength);

await client.disconnect();
