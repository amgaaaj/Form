import Cards from "@/components/Cards";
import Image from "next/image";

interface Todo {
  id: string;
  name: string;
  author: string;
}

export default async function Home() {
  const res = await fetch("http://localhost:3001/todos");
  const todos: Todo[] = await res.json();
  // console.log(todos, "Testing ...");
  return (
    <main className="flex h-full flex-col items-center p-24">
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] mb-6">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/apply.jpg"
          alt="Next.js Logo"
          width={220}
          height={37}
          priority
        />
      </div>
      <Cards />
      {/* <div>
        <h1>Todo List</h1>
        <ul className="list-disc">
          {todos?.map((todo: Todo) => (
            <li key={todo?.id}>{todo?.name}</li>
          ))}
        </ul>
      </div> */}
    </main>
  );
}

// IF client:

// const [todos, setTodos] = useState<Todo[]>([]);

// useEffect(() => {
//   async function fetchTodos() {
//     const res = await fetch("http://localhost:3001/todos");
//     const todos: Todo[] = await res.json();
//     setTodos(todos);
//   }

//   fetchTodos();
// }, []);
