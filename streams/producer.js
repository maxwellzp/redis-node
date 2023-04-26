import { createClient } from "redis";

const client = createClient();

client.on("error", (err) => console.log("Redis Client Error", err));

await client.connect();

await client.xAdd("price_stream", "*", {
  BTC_USD: "29735.20",
  BTC_EUR: "26946.93",
});

await client.disconnect();
