import { NextResponse } from "next/server";

export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);

  const query = searchParams.get("q");


  if (!query) {
    return NextResponse.json(
      { error: "Search term required" },
      { status: 400 }
    );
  }


  const apiKey = process.env.GOOGLE_BOOKS_API_KEY;


  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}`
  );


  const data = await response.json();


  return NextResponse.json(data);
}