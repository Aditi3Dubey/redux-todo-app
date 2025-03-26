import React from "react";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";

export default function App() {
  return (
    <main className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-4">
      {/* Todo App Container */}
      <div className="w-full  max-w-lg bg-gray-800 shadow-lg rounded-2xl p-6 border border-gray-700">
        {/* App Heading */}
        <h1 className="text-3xl font-bold text-center text-blue-400 mb-4">
          My Todo List
        </h1>

        {/* Add Todo Input & Button */}
        <AddTodo />
        {/* Todo Items */}
        <Todos />
      </div>
    </main>
  );
}

