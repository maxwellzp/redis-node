import { createClient } from "redis";

const client = createClient();

client.on("error", (err) => console.log("Redis Client Error", err));

await client.connect();

// Working with sets
// adds a new member to a set.
client.sAdd("crypto", "BTC");
client.sAdd("crypto", "ETH");
client.sAdd("crypto", "DOGE");
// Shows the size of the set.
const len = await client.sCard("crypto");
console.log(len);
// Shows all members from the set
const members = await client.sMembers("crypto");
console.log(members);
// Delete this set
await client.del("crypto");

await client.disconnect();
