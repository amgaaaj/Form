import clientPromise from "@/lib/mongo/client";

let client: any;
let db: any;
let users: any;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db();
    users = await db.collection("users");
  } catch (error) {
    throw new Error("Failed to connect to the database.");
  }
}

(async () => {
  await init();
})();

export async function getUsers() {
  if (!users) await init();

  const result = await users.find({}).toArray();

  return { users: result };
}
