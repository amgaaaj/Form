import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import React from "react";
interface Todo {
  id: string;
  name: string;
  author: string;
}
const API_URL = "http://localhost:3001";

export default async function New() {
  const res = await fetch(`${API_URL}/todos`);
  const todos: Todo[] = await res.json();
  const createTodo = async (formData: FormData) => {
    "use server";
    console.log(formData, "FormData");
    const name = formData.get("name");
    await fetch(`${API_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    revalidatePath("/new");
    // redirect("/");
  };

  return (
    <div className="container w-full h-full pt-40 max-w-[400px]">
      <h1 style={{ justifyContent: "center" }} className="flex mb-4">
        New
      </h1>
      <form className="flex w-full justify-center" action={createTodo}>
        <Input type="text" name="name" />
        <Button className="ml-2">Нэмэх</Button>
      </form>
      <ul className="list-disc pt-4 pl-32">
        {todos?.map((todo: Todo) => (
          <li key={todo?.id}>{todo?.name}</li>
        ))}
      </ul>
    </div>
  );
}

// export default New;

// IF client comp:

// const [name, setName] = useState("");

// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault;
//   await fetch(`${API_URL}/todos`),
//     {
//       method: "POST",
//       body: JSON.stringify({ name }),
//     };
//   setName("");
// };
