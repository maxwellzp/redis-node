import { commandOptions, createClient } from "redis";

const client = createClient();

client.on("error", (err) => console.log("Redis Client Error", err));

await client.connect();

const response = await client.xRead(
  commandOptions({
    isolated: true,
  }),
  [
    {
      key: "price_stream",
      id: "0-0",
    },
  ]
);

const [data] = response;
const { name, messages } = data;

console.log(`Stream Name: ${name}`);

for (const msg of messages) {
  const { id, message } = msg;
  console.log(`ID = ${id} | Message = ${JSON.stringify(message)}`);
}

await client.disconnect();
