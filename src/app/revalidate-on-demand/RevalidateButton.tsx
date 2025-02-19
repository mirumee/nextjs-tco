"use client";

import { useState } from "react";
import { RevalidateResponse } from "@/app/api/revalidate-on-demand/route";

export default function RevalidateButton() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleRevalidate() {
    setLoading(true);
    setMessage("");
    try {
      const res = await fetch("/api/revalidate-on-demand");
      const data = await res.json() as RevalidateResponse;
      if (data.revalidated) {
        setMessage("Page revalidated successfully!");
      } else {
        setMessage("Revalidation failed.");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error occurred during revalidation.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleRevalidate}
        disabled={loading}
      >
        {loading ? "Revalidating..." : "Revalidate Page"}
      </button>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
} 