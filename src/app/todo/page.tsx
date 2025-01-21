import AddTask from "@/components/AddTask";
import TodoList from "@/components/TodoList";
import React from "react";
import { getAllTodos } from "../pages/api";

export default async function Todo() {
  const todos = await getAllTodos();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
      <h2>Nextjs 13 Todo App</h2>
      <div className="w-full max-w-xl mt-5">
        <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
          <AddTask />
          <TodoList todos={todos} />
        </div>
      </div>
    </div>
  );
}
