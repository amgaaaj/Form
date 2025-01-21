"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";

export default function Test() {
  const [type, setType] = useState("Posts");

  console.log("render");

  useEffect(() => {
    console.log("changed");
  }, [type]);

  return (
    <div className="container w-full h-full pt-40 max-w-[400px]">
      <div className="flex gap-5">
        <Button onClick={() => setType("Posts")}>Posts</Button>
        <Button onClick={() => setType("Users")}>Users</Button>
        <Button onClick={() => setType("Comments")}>Comments</Button>
      </div>
      <h3 className="mt-4 text-blue-400">{type}</h3>
    </div>
  );
}
