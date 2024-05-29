"use client";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Table from "./components/Table/Table";

export default function Home() {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch("/api/properties");
      const data = await res.json();
      setProperties(data);
    };
    fetchdata();
  }, []);
  return (
    <main className="">
      <Navbar />
      <Table />
    </main>
  );
}
