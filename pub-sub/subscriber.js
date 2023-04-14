import { createClient } from "redis";

const client = createClient();

client.on("error", (err) => console.log("Redis Client Error", err));

await client.connect();

await client.subscribe("privatbank_rate", (message) => {
  const [EUR, USD] = JSON.parse(message);
  console.log("****Latest Currency Exchange Rates*****");
  console.log(`1 US Dollar = ${USD.buy} Ukraine Hryvnia.`);
  console.log(`1 EUR       = ${EUR.buy} Ukraine Hryvnia.`);
  console.log("****************************************");
});
