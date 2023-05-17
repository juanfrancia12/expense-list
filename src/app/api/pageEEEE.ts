import { NextRequest, NextResponse } from "next/server";

let todos: {
  id: number;
  title: string;
}[] = [
  { id: 1, title: "Todo 1" },
  { id: 2, title: "Todo 2" },
  { id: 3, title: "Todo 3" },
];

export default function handler({ req, res }: handlerProps) {
  if (req.method === "OPTIONS") {
    console.log("OPTIONS");
    res.status(200).json({ message: "OPTIONS" });
  } else if (req.method === "HEAD") {
    console.log("HEAD");
    res.status(200).json({ message: "HEAD" });
  } else if (req.method === "PUT") {
    console.log("PUT");
    res.status(200).json({ message: "PUT" });
  } else if (req.method === "PATCH") {
    console.log("PATCH");
    res.status(200).json({ message: "PATCH" });
  } else if (req.method === "CONNECT") {
    console.log("CONNECT");
    res.status(200).json({ message: "CONNECT" });
  }

  if (req.method === "GET") {
    console.log("GET");

    res.status(200).json(todos);
  } else if (req.method === "POST") {
    console.log("POST");

    const { title } = req.body;
    const newTodo = { id: Date.now(), title };
    todos.push(newTodo);
    res.status(201).json(newTodo);
  } else if (req.method === "DELETE") {
    console.log("DELETE");

    const { id } = req.body;
    todos = todos.filter((todo) => todo.id !== id);
    res.status(200).json({ message: "Todo deleted successfully" });
  }
}

type handlerProps = {
  req: NextRequest;
  res: NextResponse;
};
