import clientPromise from "@/lib/mongo/client";

let client: any;
let db: any;
let ankets: any;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db();
    ankets = await db.collection("ankets");
  } catch (error) {
    throw new Error("Failed to connect to the database.");
  }
}

(async () => {
  await init();
})();

export async function getAnkets(search?: string) {
  if (!ankets) await init();

  let query: any;

  if (search) {
    query = {
      $or: [
        {
          lastname: {
            $regex: `${search}`,
            $options: "i",
          },
        },
        {
          firstname: {
            $regex: `${search}`,
            $options: "i",
          },
        },
        {
          register_number: {
            $regex: `${search}`,
            $options: "i",
          },
        },
        {
          phone_number: {
            $regex: `${search}`,
            $options: "i",
          },
        },
      ],
    };
  }

  const result = await ankets.find(query).toArray();

  return { ankets: result };
}

export async function insertAnkets(values: any) {
  if (!ankets) await init();

  const result = await ankets.insertOne({ ...values });
}
