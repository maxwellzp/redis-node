import { createClient } from "redis";
import axios from "axios";

const client = createClient();

client.on("error", (err) => console.log("Redis Client Error", err));

await client.connect();

setInterval(async () => {
  const { data } = await axios(
    "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
  );

  console.log(data);
  await client.publish("privatbank_rate", JSON.stringify(data));
}, 5000);
