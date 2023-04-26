import { createClient } from "redis";

const client = createClient();

client.on("error", (err) => console.log("Redis Client Error", err));

await client.connect();

const response = await client.xRange("price_stream", "-", "+");
console.log(response);

await client.disconnect();
