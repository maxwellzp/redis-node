import { createClient } from "redis";

const client = createClient();

client.on("error", (err) => console.log("Redis Client Error", err));

await client.connect();

// Store and then retrieve a string in Redis
await client.set("btc_usd", "30479.60");
const value = await client.get("btc_usd");
console.log(value);

await client.disconnect();
