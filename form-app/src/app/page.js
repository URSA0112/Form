//https://pinecone-academy-multi-step-form.vercel.app/  -app link
//https://pinecone-academy-multi-step-form.vercel.app/ -figma link

"use client";
import { Form1 } from "./components/page-1";
import { Form2 } from "./components/page-2";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const Forms = [Form1, Form2][currentPage];
  function handleBackClick() {
    if (currentPage > 0) {
     setCurrentPage(currentPage - 1)
    }
  }
  function handleNextClick() {
    if(currentPage < Forms.length)
    {setCurrentPage(currentPage + 1)}
  }
  return (
    <div>
      <Forms></Forms>
      <div>
        <button onClick={handleBackClick}>back</button>
        <button onClick={handleNextClick}>continue</button>
      </div>
    </div>
  );
}
