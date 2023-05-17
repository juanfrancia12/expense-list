import { NextResponse } from "next/server";

// export async function GET(request: Request) {
//   return new Response("Hello, Next.js!");
// }

export async function GET(request: Request) {
  return NextResponse.json(
    {
      message: "Hola desde la API de Next.js 13 con TypeScript y app directory",
    },
    { status: 200 }
  );
}
