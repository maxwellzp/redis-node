import { createClient } from "redis";

const client = createClient();

client.on("error", (err) => console.log("Redis Client Error", err));

await client.connect();

const len = await client.xLen("price_stream");
console.log(len);

await client.disconnect();
