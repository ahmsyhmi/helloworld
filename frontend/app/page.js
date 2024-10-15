"use client"
import axios from "axios";
import Image from "next/image";
import { useState , useEffect } from "react";

export default function Home() {
  const [hello, setHello] = useState(null);
  const fetchData = async () => {
    const response1 = await axios.get('http://localhost:5000/');
    const response2 = await axios.get('http://localhost:5000/api');
    console.log(response1.data + response2.data);
    setHello(response1.data + response2.data);
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{hello}</h1>
    </main>
  );
}
